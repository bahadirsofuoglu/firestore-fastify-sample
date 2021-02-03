const db = require('../db')
// example controller console.log(x.id)   projects.push({ id: `${x.id}`, ...x.data() })
exports.getProjects = async (req, res) => {
  const dbResponse = await db.collection('projects').get()
  const projects = []
  dbResponse.forEach(x => projects.push({ id: `${x.id}`, ...x.data() }))

  res.send(projects)
}

exports.addProject = async (req, res) => {
  const data = req.body
  await db
    .collection('workspaces')
    .doc(data.workspaceId)
    .collection('projects')
    .add(data)
  res.send(data)
}

exports.updateProject = async (req, res) => {
  const id = req.body.id
  delete req.body.id
  const data = req.body
  await db
    .collection('workspaces')
    .doc(data.workspaceId)
    .collection('projects')
    .update(data)

  res.send(data)
}
exports.deleteProject = async (req, res) => {
  const id = req.body.id
  await db
    .collection('projects')
    .doc(id)
    .delete()
  res.send(true)
}
