const db = require('../db')
// example controller console.log(x.id)   workspaces.push({ id: `${x.id}`, ...x.data() })
exports.getWorkspaces = async (req, res) => {
  const dbResponse = await db.collection('workspaces').get()
  const workspaces = []
  dbResponse.forEach(x => workspaces.push({ id: `${x.id}`, ...x.data() }))

  res.send(workspaces)
}
exports.getWorkspacesWithProjects = async (req, res) => {
  const dbResponse = await db
    .collection('workspaces')
    .doc('z0IYAx24GlWuRyoJCVLq')
    .collection('projects')
    .get()
  const workspaces = []
  console.log(dbResponse)
  dbResponse.forEach(x => workspaces.push({ id: `${x.id}`, ...x.data() }))

  res.send(workspaces)
}

exports.addWorkspace = async (req, res) => {
  const data = req.body
  await db
    .collection('workspaces')
    .doc()
    .set(data)
  res.send(data)
}

exports.updateWorkspace = async (req, res) => {
  const id = req.body.id
  delete req.body.id
  const data = req.body
  await db
    .collection('workspaces')
    .doc(id)
    .update(data)

  res.send(data)
}
exports.deleteWorkspace = async (req, res) => {
  const id = req.body.id
  await db
    .collection('workspaces')
    .doc(id)
    .delete()
  res.send(true)
}
