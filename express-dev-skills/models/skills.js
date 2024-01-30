const skills = [
  { id: 125223, skill: 'drawing', done: true },
  { id: 127904, skill: 'reading', done: false },
  { id: 139608, skill: 'markiting', done: false }
]

const getAll = () => {
  return skills
}

const getOne = (id) => {
  
  let skill = skills.find((skill) => {
    return skill.id === parseInt(id)
  })
  return skill
}

const create = (skill) => {
  skill.id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
}

const deleteOne = (id) => {
  const index = skills.findIndex((skill) => {
    return skill.id === parseInt(id)
  })
  skills.splice(index, 1)
}

const updateOne = (id, updatedSkills) => {
  const skillToUpdate = skills.find((skill) => {
    return skill.id === parseInt(id)
  })
  skillToUpdate.skill = updatedSkills
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne
}
