const Router = require('express')
const router = new Router()
const carController = require('../contollers/carController')

router.post('/', carController.create)

module.exports = router