const {Router} = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('welcome'))

router.post('/code',controllers.CreateCode)
router.get('/code',controllers.GetAllCodes)

module.exports = router