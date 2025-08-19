const router=require("express").Router()

router.get("/ping",(req,res)=>{
    // res.send("pong")
    res.json({
        message:"pong"
    })
})

router.post("/ping",(req,res)=>{
    const request=req.body
    res.json(request)
})

module.exports=router