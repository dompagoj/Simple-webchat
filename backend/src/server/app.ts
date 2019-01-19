import express from 'express'
import WebSocket from 'socket.io'
import { createServer } from 'http'
import cors from 'cors'
import { handleSocketConnections } from './websocket/handler'

async function main() {
  const app = express()

  app.use(cors())

  app.get('/hello', (req, res) => {
    res.send('bok')
  })

  const server = createServer(app)

  const io = WebSocket(server)

  io.on('connection', socket => {
    console.log('Client connected!', socket.id)

    handleSocketConnections(socket)

    socket.on('disconnect', () => {
      console.log('Client disconnected!', socket.id)
    })
  })

  server.listen(8000, () => {
    console.log('server started on port 8000..')
  })
}

main().catch(console.error)
