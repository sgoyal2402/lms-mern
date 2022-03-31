const express = require("express");
const app = express();

app.use(express.static("build"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("index.html");
})

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send("OK");
})

app.listen(3000, () => {
    console.log("Server running on 3000");
})