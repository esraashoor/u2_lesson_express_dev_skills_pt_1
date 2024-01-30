var express = require('express')
var router = express.Router()
const skillsCtrl = require('../controllers/skills')
// All actual paths start with "/skills"
/* GET home page. */
router.get('/', skillsCtrl.index)
// /skills/:id
router.get('/:id', skillsCtrl.show)
module.exports = router