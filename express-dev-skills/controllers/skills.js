const Skill = require('../models/skills')

const index = (req, res) => {
  const skills = Skill.getAll()
  const title = 'skills'
  res.render('skills/index', {
    skills,
    title
  })
}

const show = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/show', { skill })
}

const newSkill = (req, res) => {
  res.render('skills/new')
}

const create = (req, res) => {
  Todo.create(req.body)
  res.redirect('/skills')
}

const deleteSkills = (req, res) => {
  Todo.deleteOne(req.params.id);
  res.redirect('/skills');
};

const editSkill = (req, res) => {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
      skill
  });
};

const updateSkill = (req, res) => {
  let skillId = req.params.id;
  let updatedSkill = req.body.skill;
  Skill.updateOne(skillId, updatedSkill);
  res.redirect('/skills');
};

module.exports = {
  index,
  show,
  newSkill,
  create,
  deleteSkills,
  edit: editSkill,
  updateSkill
}
