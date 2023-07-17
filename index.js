const express = require("express")

const app = express();

const PORT = 5000;

app.use("/", (req,res) => {
    res.json({ message: "Hello from Express App"})
});

app.listen(5000, () => {
    console.log(`starting server on port : ${PORT}`)
})

