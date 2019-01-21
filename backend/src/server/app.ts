// tslint:disable-next-line:no-var-requires
require('dotenv').config()
// tslint:disable-next-line:no-var-requires
require('reflect-metadata')
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { createServer } from 'http'
import WebSocket from 'socket.io'

import { createConnection } from 'typeorm'
import { connectionOptions } from '../../ormconfig/ormconfig'
import { mainRouter } from './api/main-router'
import { handleSocketConnections } from './websocket/handler'

async function main() {
  const app = express()

  app.use(cors())
  app.use(bodyParser.json())

  app.use('/api', mainRouter)

  await createConnection(connectionOptions)

  const server = createServer(app)

  const io = WebSocket(server)

  io.on('connection', client => {
    console.log('Client connected!', client.id)

    handleSocketConnections(client)

    client.on('disconnect', () => {
      console.log('Client disconnected!', client.id)
    })
  })

  server.listen(8000, () => {
    console.log('server started on port 8000..')
  })
}

main().catch(console.error)
