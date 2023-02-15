const router=require("express").Router()

const { route } = require("./auth.router")
const auth=require("./auth.router")

route.use(auth)

module.exports=router