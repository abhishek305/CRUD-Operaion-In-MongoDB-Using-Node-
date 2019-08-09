const mongoose= require('mongoose');
mongoose.set('useCreateIndex', true);


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is mandatory field"]

    },
    email:{
        type:String,
        required:[true,"Email is mandatory field"],
        unique:true
       
    }
})

const userdata = mongoose.model('userdata',userSchema);



module.exports=userdata
