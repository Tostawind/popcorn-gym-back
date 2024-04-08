const router = require('express').Router();

const Workout = require('../../models/workout.model');

router.get('/', async (req, res) => {
    try {
        const workout = await Workout.find();
        res.json(workout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;