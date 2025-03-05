const express = require('express');
const router = express.Router();
const {
    getAssignments,
    getAssignmentById,
    createAssignment,
    updateAssignmentById,
    deleteAssignmentById
} = require('../controllers/Asignacion.controller');

// Endpoint para la recuperación de todas las asignaciones
router.get('/all', getAssignments);
// Endpoint para la recuperación de una asignación por ID
router.get('/byId/:id', getAssignmentById);
// Endpoint para la creación de una nueva asignación
router.post('/add', createAssignment);
// Endpoint para la actualización de una asignación
router.put('/update/:id', updateAssignmentById);
// Endpoint para la eliminación de una asignación
router.delete('/delete/:id', deleteAssignmentById);

module.exports = router;
