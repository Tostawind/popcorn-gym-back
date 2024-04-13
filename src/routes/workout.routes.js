const express = require('express');
const workoutSchema = require('../models/workout.model');

const router = express.Router();

//__________________________________________________________
// Create workout:
router.post('/workouts', (req, res) => {   
    // 1) Crear workout con el esquema:
    const workout = workoutSchema(req.body);

    // 2) Guardar el workout:
    workout
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

//__________________________________________________________
// Get all workouts:
router.get('/workouts', (req, res) => {
    workoutSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

// Get workout:
router.get('/workouts/:id', (req, res) => {
    const { id } = req.params;
    workoutSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

//__________________________________________________________
// Update workout:
router.put('/workouts/:id', (req, res) => {
    const { id } = req.params;
    const { name, exercices } = req.body;
    workoutSchema
        .updateOne({ _id: id }, { $set: { name, exercices } }) 
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

//__________________________________________________________
// Delete workout:
router.delete('/workouts/:id', (req, res) => {
    const { id } = req.params;
    workoutSchema
        .deleteOne({ _id: id }) 
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

module.exports = router;