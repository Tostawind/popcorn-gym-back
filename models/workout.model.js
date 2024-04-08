const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weightSchema = new Schema({
    kg: { type: Number, required: true },
    equipment: { type: String, required: true },
    notes: { type: String, required: true }
});

const exerciceSchema = new Schema({
    id: { type: String, required: true },
    position: { type: Number, required: true },
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    rest: { type: String, required: true },
    weights: { type: [weightSchema], required: true },
    notes: { type: String },
    image: { type: String, required: true }
});

const workoutSchema = new Schema({
    name: { type: String, required: true },
    exercises: { type: [exerciceSchema], required: true }
});

module.exports = mongoose.model('workout', workoutSchema);