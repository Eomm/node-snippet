
import fs from 'fs'
import fetch from 'node-fetch'
import { fileURLToPath } from 'url'
import formAutoContent from 'form-auto-content'

const url = 'https://webhook.site/123'
await fetch(url, {
  method: 'POST',
  ...formAutoContent(
    {
      foo: 'bar',
      file: [
        fs.createReadStream(fileURLToPath(import.meta.url)),
        fs.createReadStream(fileURLToPath(import.meta.url))
      ]
    },
    { payload: 'body' })
})
