
const Person = require('../models/Persona');

// Controlador de Personas
const getPersons = async (req, res) => {
    try {
        const persons = await Person.find({});
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const getPersonById = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await Person.findById(id);
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const createPerson = async (req, res) => {
    try {
        console.log('Datos recibidos:', req.body); // Depuración
        const person = await Person.create(req.body);
        res.status(200).json(person);
    } catch (error) {
        console.error('Error al crear persona:', error); // Depuración
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const updatePersonById = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await Person.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const deletePersonById = async (req, res) => {
    try {
        const { id } = req.params;
        await Person.findByIdAndDelete(id);
        res.status(200).json({ message: 'Persona eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

module.exports = {
    getPersons,
    getPersonById,
    createPerson,
    updatePersonById,
    deletePersonById,
};
