const express = require("express")
const PORT = process.env.PORT || 3001
const db = require("./db")

const app = express();

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})