'use strict'

import fs from 'fs'
import got from 'got'
import { fileURLToPath } from 'url'
import formAutoContent from 'form-auto-content'

const url = 'https://webhook.site/123'
await got.post(url, {
  ...formAutoContent(
    {
      foo: 'bar',
      file: fs.createReadStream(fileURLToPath(import.meta.url))
    },
    { payload: 'body' })
})
