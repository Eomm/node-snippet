
import fs from 'fs'
import axios from 'axios'
import { fileURLToPath } from 'url'
import formAutoContent from 'form-auto-content'

const url = 'https://webhook.site/41981f17-1abd-4656-9e83-0a510223ffc2'
const content = formAutoContent({
  foo: 'bar',
  file: fs.createReadStream(fileURLToPath(import.meta.url))
}, { payload: 'data' })

await axios({
  url,
  method: 'POST',
  ...content
})
