const {Router} = require('express')
const codeController = require('../controllers/codeController')
const adminController = require('../controllers/adminController')
const projectController = require('../controllers/projectController')
const router = Router()

router.get('/', (req, res) => res.send('welcome'))

router.post('/code',codeController.CreateCode)
router.get('/code',codeController.GetAllCodes)
router.get('/code/:id',codeController.getCodesWithId)
router.get('/project',projectController.getAllProjects)
router.get('/project/codes',projectController.getAllProjectsWithCodes)
router.post('/login',adminController.logInAdmin)

module.exports = router