const express = require("express")
const PORT = process.env.PORT || 3001
const db = require("./db")
const routes = require("./routes")
const logger = require("morgan")

const app = express();

app.use(logger("dev"))
app.use("/api", routes)

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})