const router = require("express").Router();
const mongojs = require("mongojs");
const Workout = require("../models/Workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

router.get("/api/workouts", (req, res)=> {
    Workout.find({})
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.update(
        {
            _id: mongojs.ObjectId(req.params.id)
    },
    {
        $push: {
            exercises: req.body
        }
    },
    {
        new: true
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

route.get("/api/workouts/range", (req,res) => {
    Workout.find({})
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;