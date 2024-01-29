const skills = [
  { id: 125223, skill: 'drawing', done: true },
  { id: 127904, skill: 'reading', done: false },
  { id: 139608, skill: 'markiting', done: false }
]

const getAll = () => {
  return skills
}

const getOne = (id) => {
  console.log('id inside of getone function:', id)
  let skill = skills.find((skill) => {
    return skill.id === parseInt(id)
  })
  return skill
}
module.exports = {
  getAll,
  getOne
}
