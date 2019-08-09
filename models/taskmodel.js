const mongoose= require('mongoose');
mongoose.set('useCreateIndex', true);


const taskSchema=mongoose.Schema({
    task:{
        type:String,
        
    },
    status:{
        type:String,
        required:true
        }
})

const taskdata = mongoose.model('taskdata',taskSchema);



module.exports=taskdata
