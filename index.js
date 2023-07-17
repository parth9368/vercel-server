import express from "express";
// const express = require("express")

const app = express();

const PORT = 9000;

app.use("/", (req,res) => {
    res.json({ message: "Hello from Express App"})
});

app.listen(9000, () => {
    console.log(`starting server on port  ${PORT}`)
});

