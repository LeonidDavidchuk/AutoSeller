const Router = require('express')
const router = new Router()
const carController = require('../contollers/carController')

router.post('/', carController.create)
router.get('/auth', carController.getAll)
router.get('/:id', carController.getOne)

module.exports = router