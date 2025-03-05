const mongoose = require('mongoose');

// Modelo de Artículo
const ArticleSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['Mobiliario de oficina', 'Equipo de cómputo', 'Otros'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: ['Sin determinar', 'Malo', 'Regular', 'Bueno', 'Excelente'],
        required: true
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;