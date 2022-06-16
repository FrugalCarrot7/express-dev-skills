const skills = [
    {id: 1, skill: "Front End", ability: true},
    {id: 2, skill: "Back End", ability: false}
]

module.exports = {
    getAll,
    getOne,
    create,
}

function getAll() {
    return skills
}

function getOne(id) {
    return skills.find( skill => skill.id)
}

function create(skill) {
    skill.id = Date.now() % 1000000

    skill.ability = false
    skills.push(skill)
}