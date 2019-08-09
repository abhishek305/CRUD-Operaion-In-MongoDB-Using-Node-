const express = require('express');
const tasks = require('../controllers/taskController');
const router = express.Router();



router.route('/')
.get(tasks.getAllTasks)
.post(tasks.posttask)
.put(tasks.updatemany)
.delete(tasks.deletetaskmany)

router.route('/:id')
.get(tasks.gettaskbyid)
.delete(tasks.deletetaskbyid)
.put(tasks.updatetaskbyid)


module.exports=router;