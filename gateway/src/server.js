import app from "./index.js";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server Running on Port ", PORT);
});
