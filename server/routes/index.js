const Router = require('express')
const router = new Router()
const brandRouter = require('./brandRouter')
const carRouter = require('./carRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')


router.use('/user', userRouter)
router.use('/car', carRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)




module.exports = router