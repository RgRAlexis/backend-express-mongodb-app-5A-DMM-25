const Inventory = require('../models/Inventario');

// Controlador de Inventarios
const getInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find({});
        res.status(200).json(inventories);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const getInventoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const inventory = await Inventory.findById(id);
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const createInventory = async (req, res) => {
    try {
        const inventory = await Inventory.create(req.body);
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const updateInventoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const inventory = await Inventory.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const deleteInventoryById = async (req, res) => {
    try {
        const { id } = req.params;
        await Inventory.findByIdAndDelete(id);
        res.status(200).json({ message: 'Inventario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

module.exports = {
    getInventories,
    getInventoryById,
    createInventory,
    updateInventoryById,
    deleteInventoryById,
};
