const fastify = require('fastify')({
  logger: true
})
const AutoLoad = require('fastify-autoload')
const formBody = require('fastify-formbody')
const cors = require('fastify-cors')
const path = require('path')

fastify.register(formBody)
fastify.register(AutoLoad, {
  dir: path.join(__dirname, 'routes')
})
fastify.register(cors, {
  origin: true
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
