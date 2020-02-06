const {Router} = require('express')
const codeController = require('../controllers/codeController')
const adminController = require('../controllers/adminController')
const router = Router()

router.get('/', (req, res) => res.send('welcome'))

router.post('/code',codeController.CreateCode)
router.get('/code',codeController.GetAllCodes)
router.post('/login',adminController.logInAdmin)

module.exports = router