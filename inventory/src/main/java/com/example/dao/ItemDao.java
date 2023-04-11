package com.example.dao;

import io.micronaut.data.annotation.Embeddable;
import io.micronaut.data.annotation.EmbeddedId;
import io.micronaut.data.annotation.MappedEntity;
import io.micronaut.serde.annotation.Serdeable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Objects;

@Serdeable
@MappedEntity(value = "items")
public class ItemDao {

    @EmbeddedId
    private ItemPK itemPK;
    private int quantity;
    private int available;
    private int inTransit;

    @Embeddable
    public static class ItemPK {
        @NotNull
        @NotBlank
        private final String ownerId;

        @NotNull
        @NotBlank
        private final String sku;

        public ItemPK(String ownerId, String sku) {
            this.ownerId = ownerId;
            this.sku = sku;
        }

        public String getOwnerId() {
            return ownerId;
        }

        public String getSku() {
            return sku;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            ItemPK itemPK = (ItemPK) o;
            return ownerId.equals(itemPK.ownerId) && sku.equals(itemPK.sku);
        }

        @Override
        public int hashCode() {
            return Objects.hash(ownerId, sku);
        }
    }

    public ItemDao(String ownerId, String sku, int quantity, int available, int inTransit) {
        this.itemPK = new ItemPK(ownerId, sku);
        this.quantity = quantity;
        this.available = available;
        this.inTransit = inTransit;
    }

    public ItemDao(String ownerId, String sku) {
        this.itemPK = new ItemPK(ownerId, sku);
    }

    public ItemDao(ItemPK itemPK, int quantity, int available, int inTransit) {
        this.itemPK = itemPK;
        this.quantity = quantity;
        this.available = available;
        this.inTransit = inTransit;
    }

    public ItemPK getItemPK() {
        return itemPK;
    }

    public void setItemPK(ItemPK itemPK) {
        this.itemPK = itemPK;
    }

    public String getOwnerId() {
        return itemPK.getOwnerId();
    }

    public String getSku() {
        return itemPK.getSku();
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getAvailable() {
        return available;
    }

    public void setAvailable(int available) {
        this.available = available;
    }

    public int getInTransit() {
        return inTransit;
    }

    public void setInTransit(int inTransit) {
        this.inTransit = inTransit;
    }

    public void decreaseInventory(int quantity) {
        this.available -= quantity;
        this.quantity -= quantity;
    }

    public void insertInTransit(int quantity) {
        this.inTransit += quantity;
        this.quantity += quantity;
    }
}
