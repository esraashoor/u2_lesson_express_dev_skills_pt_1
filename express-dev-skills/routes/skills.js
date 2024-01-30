var express = require('express')
var router = express.Router()
const skillsCtrl = require('../controllers/skills')
// All actual paths start with "/skills"
/* GET home page. */
router.get('/', skillsCtrl.index)
// /skills/:id
router.get('/new', skillsCtrl.newSkill)


router.get('/:id', skillsCtrl.show)


router.post('/', skillsCtrl.create)
//post /todos
router.delete('/:id', skillsCtrl.deleteSkills)

router.get('/:id/edit', skillsCtrl.edit);

router.put('/:id', skillsCtrl.updateSkill);

module.exports = router