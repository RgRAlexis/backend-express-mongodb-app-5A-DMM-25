const Assignment = require('../models/Asignacion');

// Controlador de Asignaciones
const getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find({});
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const getAssignmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const assignment = await Assignment.findById(id);
        res.status(200).json(assignment);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const createAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.create(req.body);
        res.status(200).json(assignment);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const updateAssignmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const assignment = await Assignment.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(assignment);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const deleteAssignmentById = async (req, res) => {
    try {
        const { id } = req.params;
        await Assignment.findByIdAndDelete(id);
        res.status(200).json({ message: 'Asignación eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

module.exports = {
    getAssignments,
    getAssignmentById,
    createAssignment,
    updateAssignmentById,
    deleteAssignmentById,
};