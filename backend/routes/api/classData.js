const express = require('express')
const router = express.Router();
var bodyParser = require("body-parser")
const auth = require("../../middleware/auth")

const Class = require('../../models/ClassData')
router.use(bodyParser.json());



router.get('/', (req,res) => {
    console.log('getOne');
    Class.find() 
    .then((classData) => res.json({classData}))
    .catch((error) => res.status(404).json({error: error.message}))
});

router.get('/:className', (req, res) => {
   console.log('getTwo');
   const Name = req.params.className;

   Class.findOne({name:Name})
    .then(classData => {
        if (classData) {
            console.log('Found class', classData);
            
            res.json(classData);

        } else {
            console.log('Class not found');

        }
    })
    .catch((error) => res.status(404).json({error:error.message}))
  
   
});
router.get('/:id', auth, (req,res) => {
    console.log('getysburg');
    Class.findById(req.params.id)
    .then((classData) => res.json(classData))
    .catch((error) => res.status(404).json({error: error.message})) 
}); 

router.put('/:id', auth, (req,res) => {
    Class.findByIdAndUpdate(req.params.id, req.body)
    .then((classData) => res.json({msg: 'Updated sucessfully'}))
    .catch((error) => res.status(404).json({error: error.message}))
});

router.delete('/:id', auth, (req,res) => {
    Class.findByIdAndDelete(req.params.id)
    .then((classData) => res.json({mgs: 'Student deleted successfully'}))
    .catch((error) => res.status(404).json({error: error.message}));
});

router.post('/', auth, bodyParser.json(), (req,res) => {
    Class.create(req.body)
    .then((classData) => res.json({msg: 'Student added successfully'}))
    .catch((error) => res.status(400).json({error: error.message}))
});

module.exports = router;
