
import { Readable } from 'stream'
import Fastify from 'fastify'

const fastify = Fastify()

fastify.get('/', (request, reply) => {
  reply.type('text/html')
    .send(` <html>
              <body> <script>
                var source = new EventSource('/events');
                source.onmessage = function(e) {
                  document.body.innerHTML += e.data + '<br>';
                };
              </script> </body>
            </html>`)
})

fastify.get('/events', (request, reply) => {
  reply.type('text/event-stream')
  reply.header('Connection', 'keep-alive')

  const dataStream = new Readable({ read () { } })
  reply.send(dataStream)

  setInterval(function () {
    dataStream.push(`data: ${new Date().toLocaleTimeString()}\n\n`)
  }, 1000)
})

fastify.listen(8080)
