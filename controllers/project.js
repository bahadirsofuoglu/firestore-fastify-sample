const firebase = require('../db')
const db = firebase.firestore()

// example controller console.log(x.id)   projects.push({ id: `${x.id}`, ...x.data() })
exports.getProjectsWithId = async (req, res) => {
  const dbResponse = await db
    .collection('workspaces')
    .doc('z0IYAx24GlWuRyoJCVLq')
    .collection('projects')
    .get()
  const dbResponse1 = await db.collection('workspaces').get()
  const projects = []
  dbResponse1.forEach(x => projects.push({ id: `${x.id}`, ...x.data() }))
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
  const { id } = req.params
  const data = req.body
  await db
    .collection('workspaces')
    .doc(data.workspaceId)
    .collection('projects')
    .doc(id)
    .update(data)

  res.send(data)
}
exports.deleteProject = async (req, res) => {
  const { id } = req.params
  const workspaceId = req.body.workspaceId
  await db
    .collection('workspaces')
    .doc(workspaceId)
    .collection('projects')
    .doc(id)
    .delete()
  res.send(true)
}
