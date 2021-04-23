
import Fastify from 'fastify'
import fs from 'fs'

const fastify = Fastify()

fastify.get('/', async (request, reply) => {
  reply.type('text/html')
  return `
  <html>
    <body>
    <video width="320" height="240" controls>
      <source src="/movie" type="video/mp4">
    </video>
    </body>
  </html>`
})

fastify.get('/movie', (request, reply) => {
  reply.type('video/mp4')
  return fs.createReadStream('./GOPRO.MP4')
})

fastify.listen(8080)
