const project = require('../controllers/project')

module.exports = async function (fastify) {
  fastify.get('/projects', project.getProjects)
  /*  fastify.get('/projects/:id', project.getInsurancePolicy) */
  fastify.post('/projects', project.addProject)
  fastify.put('/projects/:id', project.updateProject)
  fastify.delete('/projects/:id', project.deleteProject)
}
