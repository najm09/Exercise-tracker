const router = require('express').Router()
const User = require('../Models/users.model')

router.route('/').get((req, res) => {
  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error : ' + err))
})

router.route('/add').post((req, res) => {
  let username = req.body.username
  let newUser = new User({username})
  newUser.save()
  .then(() => {res.json('User Added')})
  .catch((err) => {res.json('Error : ' + err)}) 
})

module.exports = router