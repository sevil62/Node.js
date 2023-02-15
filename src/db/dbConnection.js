const mongoose=require("mongoose")

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Veri tabanına başarıyla bağlandı");
})
.catch((err)=>{
    console.log("Veri tabanına bağlanırken hata oluştu",err);
})