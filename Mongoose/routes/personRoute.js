//Require express
const express = require('express') ;
const Person = require('../models/Person');

//Express routes
const router = express.Router() ;

//Creating routes
router.get('/test', (req, res)=>{
    try {
        res.send('Hello World !')
    } catch (error) {
        console.log(error)
    }
})

//Add new person
router.post('/add', async (req, res)=>{
    try {
        const {name, age, favoriteFoods} = req.body ;
        const newPerson = new Person ({name, age, favoriteFoods}) ;
        await newPerson.save();
        res.status(200).send('Added Successfully')
    } catch (error) {
        res.status(400).send(error)
    }
})

//Find all persons 
router.get('/all', async (req, res)=>{
    try {
        const persons = await Person.find()
        res.status(200).send(persons)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Find person by favorite food
router.get('/get/:_food', async (req, res)=>{
    try {
        const {_food} = req.params;
        const getPerson = await Person.findOne({_food});
        res.status(200).send(getPerson);
    } catch (error) {
        res.status(400).send(error)
    }
})

//Find one person by id
router.get('/get-one/:_id', async (req, res)=>{
    try {
        const {_id} = req.params;
        const getPerson = await Person.findById({_id});
        res.status(200).send(getPerson);
    } catch (error) {
        res.status(400).send(error)
    }
})

//Delete one person by id
router.delete('/delete/:_id', async (req, res)=>{
    try {
        const {_id} = req.params;
        await Person.findByIdAndDelete({_id})
        res.status(200).send("Person deleted successfully.")
    } catch (error) {
        res.status(400).send(error)
    }
})

//Find a person and update it
router.put('/edit/:_id', async (req, res)=>{
    try {
        const {_id} = req.params;
        await Person.updateOne({_id}, {$set : {...req.body}})
        res.status(200).send("Person updated.")
    } catch (error) {
        res.status(400).send(error)
    }
})


//Exporting routes
module.exports = router