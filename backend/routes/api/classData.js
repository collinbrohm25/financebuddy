const express = require('express')
const router = express.Router();
var bodyParser = require("body-parser")

const Class = require('../../models/ClassData')
router.use(bodyParser.json());

router.get('/', (req,res) => {
    Class.find() 
    .then((classData) => res.json({classData}))
    .catch((error) => res.status(404).json({error: error.message}))
});
router.get('/:id', (req,res) => {
    Class.findById(req.params.id)
    .then((classData) => res.json(classData))
    .catch((error) => res.status(404).json({error: error.message})) 
});
router.put('/:id', (req,res) => {
    Class.findByIdAndUpdate(req.params.id, req.body)
    .then((classData) => res.json({msg: 'Updated sucessfully'}))
    .catch((error) => res.status(404).json({error: error.message}))
});

router.delete('/:id', (req,res) => {
    Class.findByIdAndDelete(req.params.id)
    .then((classData) => res.json({mgs: 'Student deleted successfully'}))
    .catch((error) => res.status(404).json({error: error.message}));
});

router.post('/',bodyParser.json(), (req,res) => {
    Class.create(req.body)
    .then((classData) => res.json({msg: 'Student added successfully'}))
    .catch((error) => res.status(400).json({error: error.message}))
});

module.exports = router;
