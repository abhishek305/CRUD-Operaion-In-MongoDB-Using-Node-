const express = require('express');
const dotenv = require('dotenv');//helps add config to process.env
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoutes');
//configurin environment variables for setting PORT=3000
dotenv.config({path:'./config.env'});// configuring the environment 
// console.log(process.env.PORT)
const app = express()

app.use(express.json()); ///middleware for accessong json body through postman quering

app.use('/tasks',taskRouter)
app.use('/users',userRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`)
});


module.exports=app