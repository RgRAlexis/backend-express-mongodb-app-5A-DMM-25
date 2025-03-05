const mongoose = require('mongoose');

// Modelo de Inventario
const InventorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dates: [{
        type: Date,
        required: true
    }],
    responsible: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Activa', 'Inactiva'],
        required: true
    }
});
const Inventory = mongoose.model('Inventory', InventorySchema);
module.exports = Inventory;