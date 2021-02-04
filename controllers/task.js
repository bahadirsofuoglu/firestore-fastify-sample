const db = require('../db')
// example controller console.log(x.id)   tasks.push({ id: `${x.id}`, ...x.data() })
exports.getTasks = async (req, res) => {
  const dbResponse = await db.collection('test').get()
  const tasks = []
  dbResponse.forEach(x => tasks.push({ id: `${x.id}`, ...x.data() }))

  res.send(tasks)
}

exports.addTask = async (req, res) => {
  const data = req.body
  await db
    .collection('test')
    .doc()
    .set(data)
  res.send(data)
}

exports.updateTask = async (req, res) => {
  const id = req.params
  const data = req.body
  await db
    .collection('test')
    .doc(id)
    .update(data)

  res.send(data)
}
exports.deleteTask = async (req, res) => {
  const id = req.params
  await db
    .collection('test')
    .doc(id)
    .delete()
  res.send(true)
}
