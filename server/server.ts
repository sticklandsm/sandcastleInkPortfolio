import express from 'express'
import { join } from 'node:path'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.get('*', (req, res) => {
  const appPath = join(__dirname, 'public', 'index.html')
  res.sendFile(appPath)
})

export default server
