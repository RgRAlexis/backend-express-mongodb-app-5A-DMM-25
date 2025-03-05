const express = require('express');
const router = express.Router();
const {
    getInventories,
    getInventoryById,
    createInventory,
    updateInventoryById,
    deleteInventoryById
} = require('../controllers/Inventario.controller');

// Endpoint para la recuperación de todos los inventarios
router.get('/all', getInventories);
// Endpoint para la recuperación de un inventario por ID
router.get('/byId/:id', getInventoryById);
// Endpoint para la creación de un nuevo inventario
router.post('/add', createInventory);
// Endpoint para la actualización de un inventario
router.put('/update/:id', updateInventoryById);
// Endpoint para la eliminación de un inventario
router.delete('/delete/:id', deleteInventoryById);

module.exports = router;
