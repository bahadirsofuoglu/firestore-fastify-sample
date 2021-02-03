const task = require('../controllers/task')

module.exports = async function (fastify) {
  const preValidation = [fastify.agent]

  fastify.get('/tasks', task.getTasks)
  /*  fastify.get('/tasks/:id', task.getInsurancePolicy) */
  fastify.post('/tasks', task.addTask)
  fastify.put('/tasks/:id', task.updateTask)
  fastify.delete('/tasks/:id', task.deleteTask)
}
