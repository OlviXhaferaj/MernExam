const Pets = require('../models/pet.models');;

module.exports.fildAllPets= (req,res) => {
    Pets.find({})
    .then(allPets => {
        console.log(allPets);
        res.json(allPets);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
}
module.exports.findOnePet= (req,res) => {
    Pets.findOne({_id: req.params.id})
    .then(onePet => {
        console.log(onePet);
        res.json(onePet);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
}
module.exports.createPet= (req,res) => {
    Pets.create(req.body)
    .then(pet => {
        console.log(pet);
        res.json(pet);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
}
module.exports.updatePet = (req,res) => {
    Pets.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
    .then(updatedPet => {
        console.log(updatedPet);
        res.json(updatedPet);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
}
module.exports.deletePet= (req,res) => {
    Pets.findOneAndDelete({_id: req.params.id})
    .then( confirmDelete => {
        console.log(confirmDelete);
        res.json(confirmDelete);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
}