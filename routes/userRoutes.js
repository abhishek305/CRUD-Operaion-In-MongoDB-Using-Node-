const express = require('express');
const users = require('../controllers/userController');
const router = express.Router();

router.route('/')
.get(users.getAllUsers)
.post(users.postuser)

router.route('/:id')
.get(users.getuserbyid)
.delete(users.deleteuserbyid)
.put(users.updateuserbyid)


module.exports = router;