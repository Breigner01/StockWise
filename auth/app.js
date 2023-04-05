// app.js

const express = require("express");
const bodyParser = require("body-parser");
const { admin, auth } = require("./firebaseConfig");
const { signInWithEmailAndPassword } = require("firebase/auth");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
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
            userToken = userRecord.uid;
            res.redirect("/");
        })
        .catch((error) => {
            console.log("Error creating user:", error);
            res.redirect("register");
        });
});

app.get("/login", (req, res) => {
    res.render("login");
});

// app.get("/test", (req, res) => {
//     signInWithEmailAndPassword(auth, "test@example.com", "testPassword")
//         .then((userCredential) => {
//             // Signed in successfully
//             const user = userCredential.user;
//             console.log("User signed in:", user.uid);
//         })
//         .catch((error) => {
//             // Handle errors here
//             console.error("Error signing in:", error);
//         });
// });

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User logged in successfully
            const user = userCredential.user;
            return auth.currentUser.getIdToken(/* forceRefresh */ true);
        })
        .then((idToken) => {
            // Send the token to the backend
            fetch("http://localhost:3000/secureToken", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + idToken,
                },
            });
        })
        .catch((error) => {
            // Handle login error
            console.log("Error signing in:" + error);
        })
        .finally(() => {
            res.render("index");
        });
});

const authMiddleware = (req, res, next) => {
    const token =
        req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).send("Unauthorized");
    admin
        .auth()
        .verifyIdToken(token)
        .then((decodedToken) => {
            req.user = decodedToken;
            next();
        })
        .catch((error) => {
            res.status(401).send("Unauthorized");
        });
};

module.exports = authMiddleware;

app.get("/secureToken", authMiddleware, (req, res) => {
    // The user's decoded token is available in req.user
    console.log("Route handler called");
    console.log(req.user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
