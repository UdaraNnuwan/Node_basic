// const http=require('http')
// http.createServer((reqq,res)=>{
//     res.write("Server is Running")
//     res.end()
// })
// .listen(3000)


const express=require("express")
const bodyParser=require('body-parser')

const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get("/",(req,res)=>{
    res.send("Server Up and Running ")
})

const route=require("./routes/route")
app.use("/route",route)

app.listen(3000,()=>{
    console.log("Server Up and Runnign")
})