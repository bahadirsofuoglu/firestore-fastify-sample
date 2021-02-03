const workspace = require('../controllers/workspace')

module.exports = async function (fastify) {
  fastify.get('/workspaces', workspace.getWorkspaces)
  /*  fastify.get('/workspaces/:id', workspace.getInsurancePolicy) */
  fastify.post('/workspaces', workspace.addWorkspace)
  fastify.put('/workspaces/:id', workspace.updateWorkspace)
  fastify.delete('/workspaces/:id', workspace.deleteWorkspace)
}
