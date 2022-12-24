const PetController = require('../controllers/pet.controllers');

module.exports = (app) => {
    app.get('/api/pets', PetController.fildAllPets);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.post('/api/pets', PetController.createPet);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);
}