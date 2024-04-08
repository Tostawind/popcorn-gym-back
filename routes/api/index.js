const router = require('express').Router();

router.use('/workouts', require('./workouts.route'));


module.exports = router;