
import { stat, readdir } from 'fs/promises'
import { join } from 'path'

for await (const file of readDirectory('./')) {
  console.log(`Read file: ${file}`)
}

async function* readDirectory(path) {
  const files = await readdir(path)
  for (const file of files) {
    const completePath = join(path, file)
    if ((await stat(completePath)).isDirectory()) {
      yield* readDirectory(completePath)
    } else {
      yield completePath
    }
  }
}
