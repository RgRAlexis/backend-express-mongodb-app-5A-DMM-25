const express = require('express');
const mongoose = require('mongoose');
// Importando librería CORS
const cors = require('cors');

// Importando rutas de diferentes recursos
const userRoute = require('./routes/user.route');
const assignmentRoute = require('./routes/asignacion.route');
const articleRoute = require('./routes/articulo.route');
const inventoryRoute = require('./routes/inventario.route');
const personRoute = require('./routes/persona.route');
const locationRoute = require('./routes/ubicacion.route');

const app = express();
// Agregando el parser JSON de express
app.use(express.json());
// Agregando el middleware de CORS para consumo de APIs en el mismo origen
app.use(cors());

// Ruta por defecto
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de APIs versión 1.0.0');
})

// Endpoints para las diferentes colecciones
app.use('/api/users', userRoute);
app.use('/api/assignments', assignmentRoute);
app.use('/api/articles', articleRoute);
app.use('/api/inventories', inventoryRoute);
app.use('/api/persons', personRoute);
app.use('/api/locations', locationRoute);


// Realizar petición de conexión a MongoDB
mongoose.connect('mongodb+srv://RogerAlexis:Alexis161718@cluster0.2dwl5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster/BB') //jdhfihdi
.then(() => {
    console.log('Se estableció la conexión a base de datos exitosamente');
    app.listen(3000, () => {
        console.log('Servidor trabajando en el puerto 3000');
    });
})
.catch(() => console.log('Ocurrió un error en la conexión a la base de datos'));

