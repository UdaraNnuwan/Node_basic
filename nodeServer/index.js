// const http=require('http')
// http.createServer((reqq,res)=>{
//     res.write("Server is Running")
//     res.end()
// })
// .listen(3000)


const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const dotEnv=require('dotenv')

const app = express()
dotEnv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.send("Server Up and Running ")
})

const route = require("./routes/route")
mongoose.connect("mongodb://localhost:27017/test").then(() => {
    console.log("Connected to database")
})
    .catch((error) => {
        console.log(error)
    })
app.use("/route", route)
// app.use("/posts",route)

app.listen(3000, () => {
    console.log("Server Up and Runnign")
})