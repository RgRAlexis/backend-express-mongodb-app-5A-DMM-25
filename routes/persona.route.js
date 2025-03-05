    const express = require('express');
    const router = express.Router();
    const {
        getPersons,
        getPersonById,
        createPerson,
        updatePersonById,
        deletePersonById
    } = require('../controllers/Persona.controller');

    // Endpoint para la recuperación de todas las personas
    router.get('/all', getPersons);
    // Endpoint para la recuperación de una persona por ID
    router.get('/byId/:id', getPersonById);
    // Endpoint para la creación de una nueva persona
    router.post('/add', createPerson);
    // Endpoint para la actualización de una persona
    router.put('/update/:id', updatePersonById);
    // Endpoint para la eliminación de una persona
    router.delete('/delete/:id', deletePersonById);

    module.exports = router;
