const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    totalDuration: {
        type: Number
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
        },
    ],


});

workoutSchema.methods.getTotalDuration = function () {
    this.totalDuration = this.exercises.reduce((acc, curr) => {
        acc.totalDuration = (acc.totalDuration || 0) + curr.duration;
        return acc;
    }, {}).totalDuration;
    return this.totalDuration;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;