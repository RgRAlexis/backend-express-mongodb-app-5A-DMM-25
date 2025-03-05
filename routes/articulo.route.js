const express = require('express');
const router = express.Router();
const {
    getArticles,
    getArticleById,
    createArticle,
    updateArticleById,
    deleteArticleById
} = require('../controllers/Articulo.controller');

// Endpoint para la recuperación de todos los artículos
router.get('/all', getArticles);
// Endpoint para la recuperación de un artículo por ID
router.get('/byId/:id', getArticleById);
// Endpoint para la creación de un artículo
router.post('/add', createArticle);
// Endpoint para la actualización de un artículo
router.put('/update/:id', updateArticleById);
// Endpoint para la eliminación de un artículo
router.delete('/delete/:id', deleteArticleById);

module.exports = router;
