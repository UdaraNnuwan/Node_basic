const router=require("express").Router()
const post=require("../model/post")
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

router.post("/save",async(req,res)=>{
    const title=req.body.title
    const description=req.body.description

    const newPost=new post(
        {
            title:title,
            description:description
        }
    )
    const savepost =await newPost.save()
    res.json(savepost)
})

router.get("/save",async(req,res)=>{
    const getDetails=await post.find({})
    res.json(getDetails)
})

router.get("/save/:id",async(req,res)=>{
    const getDetails=await post.findOne({_id:req.params.id})
    res.json(getDetails)
})

router.patch("/save/:id",async(req,res)=>{
    const _id=req.params.id
     const update=await post.findByIdAndUpdate(_id,{$set:{
        description:req.body.description
    }})
    res.json(update)
})

router.delete("/save/:id",async(req,res)=>{
    const _id=req.params.id
     await post.findByIdAndDelete({_id:_id})
    res.json({message:"Removed"})
})
module.exports=router