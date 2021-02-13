const express = require('express')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/calendar.controllers')

// /api/calendar
router.post('/events', passport.authenticate('jwt', {session: false}), controller.getEvents)
router.post('/events/changeposition', passport.authenticate('jwt', {session: false}), controller.changePosition)

module.exports = router