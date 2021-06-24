
import { setTimeout } from 'timers/promises'

Promise.all([
  setTimeout(100).then(() => { throw new Error('ops 1') }),
  setTimeout(200).then(() => { throw new Error('ops 2') }),
  setTimeout(300).then(() => 'done')
])
  .catch(err => {
    console.log('this is catched', err)
  })

process.on('multipleResolves', function (type, promise, reason) {
  console.log('ops', { type, promise, reason })
})
