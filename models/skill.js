const skills = [
    {skill: "Front End", ability: true},
    {skill: "Back End", ability: false}
]

module.exports = {
    getAll,
}

function getAll() {
    return skills
}