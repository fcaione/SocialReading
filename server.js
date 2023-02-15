const express = require("express")
const PORT = process.env.PORT || 3001
const db = require("./db")
const routes = require("./routes")
const logger = require("morgan")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.static(`${__dirname}/client/build`))
app.use(express.json())
app.use(logger("dev"))
app.use("/api", routes)

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
   })

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})