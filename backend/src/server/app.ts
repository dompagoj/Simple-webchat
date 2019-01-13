import express from 'express'
import WebSocket from 'ws'
import { createServer } from 'http'
import cors from 'cors'

async function main() {
  const app = express()

  const server = createServer(app)

  const wss = new WebSocket.Server({
    server,
  })

  app.use(cors)

  app.get('/', (req, res) => {
    res.send('bok')
  })

  wss.on('connection', (ws: WebSocket) => {
    console.log('CONNECTION!')
    //connection is up, let's add a simple simple event
    ws.on('message', (message: string) => {
      //log the received message and send it back to the client
      console.log('received: %s', message)
      ws.send(`Hello, you sent -> ${message}`)
    })

    //send immediatly a feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server')
  })

  server.listen(8000, () => {
    console.log('server started on port 8000..')
  })
}

main().catch(console.error)
