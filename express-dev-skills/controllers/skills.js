const skill = require('../models/skill')

const index = (req, res) => {
  const skils = Skill.getAll()
  const title = 'skills'
  res.render('skills/index', {
    skills,
    title
  })
}

const show = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  console.log(skill)
  res.render('skills/show', { skill })
}

module.exports = {
  index,
  show
}
