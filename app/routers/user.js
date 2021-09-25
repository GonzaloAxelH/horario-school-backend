  
const express = require('express')
const router = express.Router()

const { getUser,getUsers,deleteUser,updateUser,createUser} = require('../controllers/userControllers')

router.get('/', getUsers)

router.get('/:id', getUser)

//TODO: Donde recibimos data
router.post('/', createUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)


module.exports = router