const user = require('../controllers/user')

module.exports = async function (fastify) {
  fastify.post('/signup', user.signUp)
}
