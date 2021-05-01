
import Fastify from 'fastify'

const fastify = Fastify()

fastify.get('/', async (request, reply) => {
  reply.type('text/html')
  return `
  <html>
    <body>
    <script>
    const blob = new Blob(['hello world'], { type: 'text/plain' })
    navigator.sendBeacon('/beacon', blob)
    </script>
    </body>
  </html>`
})

fastify.post('/beacon', (request, reply) => {
  console.log(`Received beacon: ${request.body}`)
  reply.code(204).send()
})

fastify.listen(8080)
