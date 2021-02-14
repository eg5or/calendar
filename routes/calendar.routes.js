const express = require('express')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/calendar.controllers')

// /api/calendar
router.post('/events', passport.authenticate('jwt', {session: false}), controller.getEvents)
router.post('/events/changeposition', passport.authenticate('jwt', {session: false}), controller.changePosition)
router.post('/events/add', passport.authenticate('jwt', {session: false}), controller.addEvent)
router.post('/events/edit', passport.authenticate('jwt', {session: false}), controller.editEvent)
router.post('/events/delete', passport.authenticate('jwt', {session: false}), controller.deleteEvent)

module.exports = router