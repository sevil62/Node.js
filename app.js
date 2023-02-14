const express=require("express")
const app=express()
require("dotenv").config()
require("./src/db/dbConnection")
const port=process.env.PORT || 5001
app.get("/",(req,res)=>
{
    res.json({
        message:"Hoş geldiniz"
    })
})

const router=require("./src/routers")


app.use(express.json())
app.use(expres.json({limit:"50mb"}))
app.use(expres.urlencoded({limit:"50mb",extended:true,parameterLimit:50000}))

app.use("/api",router)



app.listen(port,()=>{
    console.log(`Server ${port} portunda çalışıyor`);
})