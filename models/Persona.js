const mongoose = require('mongoose');

// Modelo de Persona
const PersonSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    contactMethods: [{
        type: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }],
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
