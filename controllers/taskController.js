const mongodb=require('mongodb').ObjectId;
const taskmodel=require('../models/taskmodel')


const getAllTasks = (req,res)=>{
    taskmodel.find()
    .then((data)=>{
        console.log(data);
        res.json({
            message:"all task fetched successfully !!!",
            data:data

        })
    }).catch((err)=>{
        console.log(err);
    })
}


const gettaskbyid=(req,res)=>{
    var id = req.params.id
    taskmodel.findById({_id:mongodb.ObjectId(id)})
    .then((data)=>{
       res.json({
           message:"successfully fetched the specfic task",
           data:data
       })
    }).catch((err)=>{
        console.log(err);
    })
}

const deletetaskbyid=(req,res)=>{
    var id = req.params.id
    taskmodel.deleteOne({_id:mongodb.ObjectId(id)})
    .then((data)=>{
       res.json({
           message:"successfully deleted one task",
           data:data
       })
    }).catch((err)=>{
        console.log(err);
    })
}

const deletetaskmany=(req,res)=>{
    var status=req.body.status;
    taskmodel.deleteMany({status})
    .then((data)=>{
       res.json({
           message:"successfully deleted many task",
           data:data
       })
    }).catch((err)=>{
        console.log(err);
    })
}



const updatetaskbyid=(req,res)=>{
    var id = req.params.id
    var status=req.body.status
    taskmodel.updateOne({_id:mongodb.ObjectId(id)},{$set:{status}})
    .then((data)=>{
       res.json({
           message:"successfully updated one status",
           data:data
       })
    }).catch((err)=>{
        console.log(err);
    })
}

const updatemany=(req,res)=>{
   // var id = req.params.id
    var status=req.body.status
    taskmodel.updateMany({"status":"incomplete"},{$set:{status}})
    .then((data)=>{
       res.json({
           message:"successfully updated many status",
           data:data
       })
    }).catch((err)=>{
        console.log(err);
    })
}


const posttask=(req,res)=>{
    // var id = req.params.id
     var task=req.body.task
     var status=req.body.status
     taskmodel.create({task,status})
     .then((data)=>{
        res.json({
            message:"successfully created a task",
            data:data
        })
     }).catch((err)=>{
         console.log(err);
     })
 }
 

module.exports.getAllTasks=getAllTasks;
module.exports.posttask=posttask;
module.exports.gettaskbyid=gettaskbyid;
module.exports.deletetaskbyid=deletetaskbyid;
module.exports.updatetaskbyid=updatetaskbyid;
module.exports.updatemany=updatemany;
module.exports.deletetaskmany=deletetaskmany;