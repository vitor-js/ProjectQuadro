const express = require('express')

const routes = express.Router()

const userController = require('./controller/userController')

routes.post('/create/user', userController.userData)

module.exports = routes;