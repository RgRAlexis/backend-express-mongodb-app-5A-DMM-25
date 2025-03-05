const mongoose = require('mongoose');


// Modelo de Asignación
const AssignmentSchema = mongoose.Schema({
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    },
    observation: {
        type: String
    },
    status: {
        type: String,
        enum: ['Activa', 'Inactiva'],
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
const Assignment = mongoose.model('Assignment', AssignmentSchema);
module.exports = Assignment;