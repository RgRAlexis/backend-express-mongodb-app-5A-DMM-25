const Article = require('../models/Articulo');

// Controlador de Artículos
const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({});
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const getArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const createArticle = async (req, res) => {
    try {
        const article = await Article.create(req.body);
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const updateArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

const deleteArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        await Article.findByIdAndDelete(id);
        res.status(200).json({ message: 'Artículo eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error ' + error.message });
    }
};

module.exports = {
    getArticles,
    getArticleById,
    createArticle,
    updateArticleById,
    deleteArticleById,
}

//Termine el trabajo 