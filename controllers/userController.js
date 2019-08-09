
const users=require('../models/usermodel')
const mongodb=require('mongodb').ObjectId;

const getAllUsers = (req,res)=>{
 
    users.find()
    .then((data)=>{
        res.json({
            message:"Succesfully fetched data",
            data:data
        })
    
}).catch((err)=>{
    console.log(err);
})
}

const getuserbyid=(req,res)=>{
    var id = req.params.id
    users.findById({_id:mongodb.ObjectId(id)})
    .then((data)=>{
       res.json({
           message:"successfully fetched the specfic user",
           data:data
       })
    }).catch((err)=>{
        console.log(err);
    })
}

const deleteuserbyid=(req,res)=>{
    var id = req.params.id
    users.deleteOne({_id:mongodb.ObjectId(id)})
    .then((data)=>{
       res.json({
           message:"successfully deleted one user",
           data:data
       })
    }).catch((err)=>{
        console.log(err);
    })
}

const updateuserbyid=(req,res)=>{
    var id = req.params.id
    var name=req.body.name
    users.updateOne({_id:mongodb.ObjectId(id)},{$set:{name}})
    .then((data)=>{
       res.json({
           message:"successfully updated one user",
           data:data
       })
    }).catch((err)=>{
        console.log(err);
    })
}

const postuser=(req,res)=>{
   // var id = req.params.id
    var name=req.body.name
    var email=req.body.email
    users.create({name,email})
    .then((data)=>{
       res.json({
           message:"successfully created a user",
           data:data
       })
    }).catch((err)=>{
        console.log(err);
    })
}





module.exports.getAllUsers=getAllUsers;
module.exports.getuserbyid=getuserbyid;
module.exports.deleteuserbyid=deleteuserbyid;
module.exports.updateuserbyid=updateuserbyid;
module.exports.postuser=postuser;




















































































































///////////////////////////////////////////////////// reference ///////////////////////////////////////////////////////////



// const getAllUsers=async (req,res)=>{
//     let usersdata=await users.find();
//     try{
//         res.json({
//                 message:"Succesfully fetched data",
//                 data:useradata
//             })
//         }
//     catch{
//         console.log("error loading data");
//     }
// }