const db = require('../db')
// example controller console.log(x.id)   projects.push({ id: `${x.id}`, ...x.data() })
exports.getProjectsWithId = async (req, res) => {
  const dbResponse = await db
    .collection('workspaces')
    .doc('z0IYAx24GlWuRyoJCVLq')
    .collection('projects')
    .get()
  const projects = []
  console.log(dbResponse)
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
  const projectId = req.params

  const data = req.body
  await db
    .collection('workspaces')
    .doc(projectId)
    .collection('projects')
    .doc(data.workspaceId)
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
