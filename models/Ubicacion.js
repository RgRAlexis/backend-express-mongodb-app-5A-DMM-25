const mongoose = require('mongoose');

// Modelo de Ubicación
const LocationSchema = mongoose.Schema({
    building: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const Location = mongoose.model('Location', LocationSchema);
module.exports = Location;