//Require express
const express = require('express') ;
const User = require('../models/User');

//Express routes
const router = express.Router() ;
 
//Get all users
router.get('/all', async (req, res)=>{
    try {
        const users = await User.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Add new user
router.post('/add', async (req, res)=>{
    try {
        const {name, age, email} = req.body ;
        const newUser = new User ({name, age, email}) ;
        await newUser.save();
        res.status(200).send('User Added Successfully')
    } catch (error) {
        res.status(400).send(error)
    }
})

//Find and update user
router.put('/edit/:_id', async (req, res)=>{
    try {
        const {_id} = req.params;
        await User.updateOne({_id}, {$set : {...req.body}})
        res.status(200).send("User updated.")
    } catch (error) {
        res.status(400).send(error)
    }
})

//Delete user by id
router.delete('/delete/:_id', async (req, res)=>{
    try {
        const {_id} = req.params;
        await User.findByIdAndDelete({_id})
        res.status(200).send("User deleted successfully.")
    } catch (error) {
        res.status(400).send(error)
    }
})

//Exporting routes
module.exports = router