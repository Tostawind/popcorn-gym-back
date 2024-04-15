const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const workoutsRoutes = require('./routes/workout.routes');

/*_________________________________________________________*/
const app = express();
const port = process.env.PORT ||  9000;

/*_________________________________________________________*/
/* __MIDDLEWARES__ */
// Cors:
app.use(cors());
// Convertir req.body a json:
app.use(express.json());
// Rutas:
app.use('/api', workoutsRoutes);


/*_________________________________________________________*/
/* __ROUTES __*/
app.get('/', (req, res) => {
    res.send('Hello World!');
})


/*_________________________________________________________*/
/* __CONECTION__ */
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));


/*_________________________________________________________*/
app.listen(port, () => console.log(`http://localhost:${port}`));