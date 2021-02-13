const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const config = require('config')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth.routes')
const calendarRoutes = require('./routes/calendar.routes')

mongoose.connect(config.get('mongoUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))

app.use(passport.initialize()) // инициализируем модуль паспорт
require('./middleware/passport')(passport)



app.use(require('morgan')('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/api/auth', authRoutes)
app.use('/api/calendar', calendarRoutes)

module.exports = app