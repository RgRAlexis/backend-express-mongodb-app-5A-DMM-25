const express = require('express');
const router = express.Router();
const {
    getLocations,
    getLocationById,
    createLocation,
    updateLocationById,
    deleteLocationById
} = require('../controllers/Ubicacion.Controller');

// Endpoint para la recuperación de todas las ubicaciones
router.get('/all', getLocations);
// Endpoint para la recuperación de una ubicación por ID
router.get('/byId/:id', getLocationById);
// Endpoint para la creación de una nueva ubicación
router.post('/add', createLocation);
// Endpoint para la actualización de una ubicación
router.put('/update/:id', updateLocationById);
// Endpoint para la eliminación de una ubicación
router.delete('/delete/:id', deleteLocationById);

module.exports = router;
