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

module.exports = router