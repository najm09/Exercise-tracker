/**
 * Author : Fakhra Najm <fnajm09@gmail.com>
 */

const router = require('express').Router()
const Exercise = require('../Models/exercises.model')

router.route('/').get((req, res) => {
  Exercise.find()
  .then(exercise => {res.json(exercise)})
  .catch(err => {res.status(400).json('Error : ' + err)})
})

router.route('/add').post((req, res) => {
  let username = req.body.username
  let description = req.body.description
  let duration = Number(req.body.duration)
  let date = Date.parse(req.body.date)

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  })

  newExercise.save()
  .then(() => {res.json('Excercise added !')})
  .catch(err => {res.status(400).json('Error : ' + err)})
})

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
  .then(exercise => res.json(exercise))
  .catch(err => res.status(400).json('Error : ' + err)) 
})

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
  .then(() => res.json('Exercise deleted'))
  .catch(error => {res.status(400).json("Error : " + error)})
})

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
  .then(exercise => {
    exercise.username = req.body.username
    exercise.description = req.body.description
    exercise.duration = Number(req.body.duration)
    exercise.date = Date.parse(req.body.date)
    exercise.save()
    .then(() => {res.json('Exercise updated !')})
    .catch(error => {res.status(400).json("Error : " + error)})
  })
  .catch(error => {res.status(400).json("Error : " + error)})
})

module.exports = router