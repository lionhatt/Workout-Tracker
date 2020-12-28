const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: {
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
        }
    },

    totalDuration: {
        type: Number
    }
});

workoutSchema.methods.getTotalDuration = function(exercises){
    let acc = exercises.reduce((acc, curr) => {
        acc.totalDuration = (acc.totalDuration || 0) + curr.duration;
        return acc;
    }, {});
    this.totalDuration = acc.totalDuration;    
    return this.totalDuration
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;