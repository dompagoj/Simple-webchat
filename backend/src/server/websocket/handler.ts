import { Socket } from 'socket.io'

export function handleSocketConnections(client: Socket) {
  client.on('message', msg => {
    client.emit('message', msg)
    client.broadcast.emit('message', msg)
  })
}
