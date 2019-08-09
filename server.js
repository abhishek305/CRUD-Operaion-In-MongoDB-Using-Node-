const mongoose=require("mongoose");
const app=require('../ExpressRouterTemplate with mongodb/app')

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true })
.then((data)=>{
    console.log("db connected");
}).catch((err)=>{
    console.log("error in connection");
})
