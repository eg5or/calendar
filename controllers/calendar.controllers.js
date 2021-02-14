const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')
const Counter = require('../models/Counter')

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
                    'events.$.dateEnd': newDateStart,
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

module.exports.addEvent = async function (req, res) {
    const dateStart = new Date(req.body.dateStart)
    const dateEnd = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate(), dateStart.getHours() + +req.body.duration - 1)
    try {
        await Counter.updateOne(
            {counterName: 'eventNumber'},
            {$inc: {seq: 1}},
            {new: true})
        await Counter.findOne({counterName: 'eventNumber'},
            async function (error, ret) {
                await User.updateOne(
                    {_id: req.body.id},
                    {
                        $addToSet: {
                            "events": {
                                id: ret.seq,
                                event: req.body.event,
                                descr: req.body.descr,
                                dateStart: dateStart,
                                dateEnd: dateEnd,
                                tag: req.body.tagName
                            }
                        }
                    },
                    {new: true, upsert: true},
                    function (error, result) {
                        res.status(200).json(result)
                    })
            })
    } catch (e) {
        // Обработать ошибку
        errorHandler(res, e)
    }
}


module.exports.editEvent = async function (req, res) {
    try {
        const dateStart = new Date(req.body.dateStart)
        const dateEnd = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate(), dateStart.getHours() + +req.body.duration - 1)
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
                    'events.$.event': req.body.event,
                    'events.$.descr': req.body.descr,
                    'events.$.dateStart': dateStart,
                    'events.$.dateEnd': dateEnd,
                    'events.$.tag': req.body.tagName,
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

module.exports.deleteEvent = async function (req, res) {
    try {
        await User.updateOne(
            {
                _id: req.body.id,

                },
            {
                $pull: {
                    "events": {
                        id: +req.body.eventId
                    }
                }
            },
            {multi: true},
            function (error, result) {
                res.status(200).json(result)
            })
    } catch (e) {
        // Обработать ошибку
        errorHandler(res, e)
    }
}