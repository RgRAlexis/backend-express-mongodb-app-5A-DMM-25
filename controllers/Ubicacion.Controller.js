const Location = require('../models/Ubicacion');

// Controlador de Ubicaciones
const getLocations = async (req, res) => {
    try {
        const locations = await Location.find({});
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const getLocationById = async (req, res) => {
    try {
        const { id } = req.params;
        const location = await Location.findById(id);
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const createLocation = async (req, res) => {
    try {
        const location = await Location.create(req.body);
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const updateLocationById = async (req, res) => {
    try {
        const { id } = req.params;
        const location = await Location.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const deleteLocationById = async (req, res) => {
    try {
        const { id } = req.params;
        await Location.findByIdAndDelete(id);
        res.status(200).json({ message: 'Ubicación eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

module.exports = {
    getLocations,
    getLocationById,
    createLocation,
    updateLocationById,
    deleteLocationById,
};
