const express = require("express");
const router = express.Router();
const Parent = require('../../models/Parent')


// GET Listing
router.get('/', (req, res, next) => {

    //find all parents
    Parent
        .find()
        .then((listOfParents) => {
            console.log(listOfParents);
            res.render('parents/index', {
                listOfParents: listOfParents
            })
        })
       .catch((err) => res.send(err))
});

//NEW Route
router.get('/new', (req, res) => { 
    res.render('parents/new')
});

//CREATE Route
// router.post('/', (req, res) => {
//     const newParent = req.body.Parent
//     .create(newParent)
//     .then(() => {
//         res.redirect('/parents')
//     })
// });

//SHOW Route
router.get('/:id', (req,res)=> {
    Parent
    .findById(req.params.id)
    .then((parentProfile)=> {
        res.render('parents/show', {
            parentProfile: parentProfile
        })
    })
});

//EDIT Route
// router.get('/:id/edit', (req, res)=> {
//     Parent
//     .findById(req.params.id)
//     .then((newParent)=>{
//         res.render('/parents/edit', {
//             parentProfile: newParent
//         })
//     })
// });

//UPDATE Route
// router.put('/:id', (req, res)=>{
//     Parent.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(()=>{
//         res.redirect(`/parents/${req.params.if}`)
//     })
// });

//DELETE Route
router.delete('/:id', (req, res)=> {
    Parent.findByIdAndRemove(req.params.id)
    .then(()=>{
        console.log('Deleted user successfully')
        res.redirect('/parents')
    })
});

module.exports = router;
