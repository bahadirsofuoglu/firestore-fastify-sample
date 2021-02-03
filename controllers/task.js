const db = require('../db')
// example controller console.log(x.id)   tasks.push({ id: `${x.id}`, ...x.data() })
exports.getTask = async _ => {
  const dbResponse = await db.collection('test').get()
  const tasks = []
  dbResponse.forEach(x => tasks.push({ id: `${x.id}`, ...x.data() }))

  return tasks
}

exports.addTask = async (_, req) => {
  const data = req
  await db
    .collection('test')
    .doc()
    .set(data)

  return data
}

exports.updateTask = async (_, req) => {
  const id = req.id
  delete req.id
  const data = req
  await db
    .collection('test')
    .doc(id)
    .update(data)

  return data
}
exports.deleteTask = async (_, req) => {
  const id = req.id
  await db
    .collection('test')
    .doc(id)
    .delete()
  return true
}
