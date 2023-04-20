/* eslint-disable no-undef */

describe("template spec", () => {
  const serverId = "ksrlfzd2";
  const testEmail1 = `test@${serverId}.mailosaur.net`;
  const testEmail2 = `test2@${serverId}.mailosaur.net`;
  const fakePassword = "123456";

  Cypress.Commands.add("login", (email, password) => {
    cy.visit("localhost:3000/login");
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("button").click();
  });

  Cypress.Commands.add("logout", () => {
    cy.visit("http://localhost:3000/home");
    cy.contains("Logout").click();
    cy.url().should("include", "/login");
  });

  Cypress.Commands.add("validateEmailReception", (email, subject) => {
    cy.mailosaurGetMessage(
      serverId,
      {
        sentTo: email,
        subject: subject,
      },
      {
        timeout: 60000,
      }
    ).then((content) => {
      expect(content.subject).to.equal(subject);
    });
  });

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
  });

  it("alerts all product owners when a new product is added", () => {
    const productName = "ANP";

    cy.login(testEmail1, fakePassword);
    cy.get('[aria-label="Create Product"]').click();
    cy.wait(1500);
    cy.get('input[name="name"]').as("input").type(productName);
    cy.get("@input").should("have.value", productName);
    cy.get('input[name="brand"]').type("Bauer");
    cy.get('input[name="description"]').type("random stuff");
    cy.get('input[name="price"]').type(199.99);
    cy.get("#mui-component-select-category")
      .click()
      .then(() =>
        cy.get('li.MuiButtonBase-root[data-value="Sports & Fitness"]').click()
      );
    cy.get('button.MuiButtonBase-root[type="submit"]').click();
    cy.contains(productName);
    cy.logout();
    cy.validateEmailReception(
      testEmail1,
      `[New Product] -- Product ${productName} - Product Added`
    );
    cy.validateEmailReception(
      testEmail2,
      `[New Product] -- Product ${productName} - Product Added`
    );
  });

  it("alerts the business owner when the level of stock is low", () => {
    const productId = 18;
    cy.login(testEmail1, fakePassword);
    cy.get("td.MuiTableCell-root")
      .contains(productId)
      .parent()
      .within(() => {
        cy.get('[aria-label="Actions"]').click();
      });
    cy.get("div.MuiInputBase-root")
      .contains("Add Inventory")
      .click()
      .then(() =>
        cy.get("li.MuiButtonBase-root").contains("Decrease Inventory").click()
      );
    cy.get('.MuiInputBase-input[name="quantity"]').type(9);
    cy.get('button.MuiButtonBase-root[type="submit"]')
      .contains("Update")
      .click();
    cy.logout();
    cy.validateEmailReception(
      testEmail1,
      `[New Product] -- Product ${productId} - Low inventory`
    );
  });

  it("alerts products owners when deleting a prodcut from the product list", () => {
    const productId = 17;
    cy.login(testEmail1, fakePassword);
    cy.get("td.MuiTableCell-root")
      .contains(productId)
      .parent()
      .within(() => {
        cy.get('[aria-label="Remove Product"]').click();
      });
    cy.logout();
    cy.validateEmailReception(
      testEmail1,
      `[New Product] -- Product ${productId} - Removed`
    );
    cy.validateEmailReception(
      testEmail2,
      `[New Product] -- Product ${productId} - Removed`
    );
  });

  it("alerts the product owner when the products are store in the warehouse", () => {
    const productId = 18;
    cy.login(testEmail1, fakePassword);
    cy.get("td.MuiTableCell-root")
      .contains(productId)
      .parent()
      .within(() => {
        cy.get('[aria-label="Actions"]').click();
      });
    cy.get("div.MuiInputBase-root")
      .contains("Add Inventory")
      .click()
      .then(() =>
        cy.get("li.MuiButtonBase-root").contains("Store Inventory").click()
      );
    cy.get('.MuiInputBase-input[name="quantity"]').type(1);
    cy.get('button.MuiButtonBase-root[type="submit"]')
      .contains("Update")
      .click();
    cy.logout();
    cy.validateEmailReception(
      testEmail1,
      `[New Product] -- Product ${productId} - In storage`
    );
  });
});
