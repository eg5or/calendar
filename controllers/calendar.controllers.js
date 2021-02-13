const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')

module.exports.getEvents = async function (req, res) {
    try {
        await User.findOne({
            _id: req.body.id,
        }, '-_id -__v -email -password -name')
            .exec(function (err, result) {
                res.status(200).json(result)
            })
    } catch (e) {
        // Обработать ошибку
        errorHandler(res, e)
    }
}

module.exports.changePosition = async function (req, res) {
    try {
        const newDate = new Date(req.body.newDate)
        const newDateStart = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), newDate.getHours())
        const newDateEnd = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), newDate.getHours() + req.body.duration - 1)
        await User.updateOne(
            {
                _id: req.body.id,
                'events': {
                    $elemMatch: {
                        'id': req.body.eventId
                    }
                }
            },
            {
                $set: {
                    'events.$.dateStart': newDateStart,
                    'events.$.dateEnd': newDateEnd,
                }
            },
            {new: true, upsert: true},
            function (error, result) {
                res.status(200).json(result)
            })
    } catch (e) {
        // Обработать ошибку
        errorHandler(res, e)
    }
}