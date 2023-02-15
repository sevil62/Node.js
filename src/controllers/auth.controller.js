const user=require("../models/user.model")
const bycrpt=require("bcrypt");
const user = require("../models/user.model");
const { response } = require("express");


const login=async(req,res)=>{
    console.log(req.body);
    return res.json(req.body);
}

const register=async (req,res)=>{
    const {email}=req.body

    const userCheck=await user.findOne({email})
    if(userCheck){
        console.log("Girmiş olduğunuz mail kullanımda");
    }
    req.body.password=await bycrpt.hash(req.body.password,10)
    console.log("hash sifre:",req.body.password)

    try {
        const userSave=new user(req.body)
        await user.save()
        .then((response)=>{
            return res.status(201).json({
                success:true,
                data:response,
                message:"Mesaj başarıyla eklendi"
            })
        })
        .catch((err)=>{
            console.log(err);
        })
        
    } catch (error){
        console.log(error);
    }
        
    
}

module.exports={
    login,
    register
}
