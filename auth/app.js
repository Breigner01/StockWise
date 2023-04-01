// app.js

const express = require("express");
const bodyParser = require("body-parser");
const { admin } = require("./firebaseConfig");
const firebase = require('firebase');
const firebaseui = require('firebaseui');
const app = express();

const ui = new firebaseui.auth.AuthUI(firebase.auth());

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/register", (req, res) => {
    const { email, password } = req.body;

    admin
        .auth()
        .createUser({
            email,
            password,
        })
        .then((userRecord) => {
            console.log("User created:", userRecord.uid);
            res.redirect("/");
        })
        .catch((error) => {
            console.log("Error creating user:", error);
            res.redirect("register");
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
