const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')

module.exports.login = async function (req, res) {
    // получаем из req email и password
    const candidate = await User.findOne({email: req.body.email}) // проверяем на наличие такого пользователя

    if (candidate) {
        // Проверка пароля, пользователь существует
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            // Генерация токена, пароли совпали
            const token = jwt.sign({  // первый параметр объект со свойствами которые будут нужны
                email: candidate.email,
                userId: candidate._id,
                access: candidate.position
            }, config.get('jwt'), {expiresIn: 43200}) // 2ой параметр секретный ключ 3ий параметр время жизни токена

            res.status(200).json({
                token: `Bearer ${token}`,
                id: candidate._id
            })
        } else {
            // Пароль не совпал, ошибка
            res.status(401).json({
                message: 'Неверный пароль'
            })
        }
    } else {
        // ПОльзователя нет, ошибка
        res.status(404).json({
            message: 'Пользователь с таким email не найден'
        })
    }
}

module.exports.me = async function (req, res) {
    // в req.body приходит id
    const id = req.body.id
    const result = await User.findById(id, '-password -__v')
    if (result) {
        // если пользователь найден
        try {
            // Передаем статус 200
            res.status(200).json(result)
        } catch (e) {
            // Обработать ошибку
            errorHandler(res, e)
        }
    } else {
        res.status(409).json({
            message: `Пользователя с id ${id} нет в списке!`
        })
    }
}

module.exports.logout = async function (req, res) {
    // в req к нам приходит id ользователя, которого надо удалить из таблицы
    // ищем совпадения в БД
    const candidate = await UserLogin.findOne({id: req.params.id})

    if (candidate) {
        // если пользователь найден то удаляем его из таблицы
        try {
            await UserLogin.findOneAndDelete({id: req.params.id})
            // Передаем статус 201 Created - что-то создано в БД
            res.status(201).json({
                message: `Пользователь с id ${req.params.id} удален из списка`
            })
        } catch (e) {
            // Обработать ошибку
            errorHandler(res, e)
        }
    } else {
        res.status(409).json({
            message: `Пользователя с id ${req.params.id} нет в списке!`
        })
    }
}

module.exports.register = async function (req, res) {
    // в req к нам приходит email и password
    // ищем совпадения в БД
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        // Пользователь существует, нужно отдать ошибку
        // передаем статус 409 Conflict
        res.status(409).json({
            message: 'Такой e-mail уже занят. Попробуйте другой.'
        })
    } else {
        // Нужно создать пользователя
        // зашифровываем пароль
        const salt = bcrypt.genSaltSync(10) // доп безопасность
        const password = req.body.password
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(password, salt) // добавляем зашифрованный пароль
        })
        try {
            await user.save()
            // Передаем статус 201 Created - что-то создано в БД
            res.status(201).json(user)
        } catch (e) {
            // Обработать ошибку
            errorHandler(res, e)
        }
    }
}

module.exports.changePassword = async function (req, res) {
    // в req к нам приходит id пользователя и новый пароль
    // зашифровываем новый пароль
    const salt = bcrypt.genSaltSync(10) // доп безопасность
    const newPassword = bcrypt.hashSync(req.body.newPassword, salt) // зашифрованный новый пароль
    try {
        await Employee.update({_id: req.body.id},
            {
                $set: {
                    "password": newPassword,
                }
            },
            function (err, result) {
                res.status(201).json({
                    message: 'Пароль успешно изменен'
                })
            }
        );
    } catch (e) {
        // Обработать ошибку
        errorHandler(res, e)
        res.status(500).json({
            message: e
        })
    }

}