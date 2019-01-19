import { Socket } from 'socket.io'

export function handleSocketConnections(socket: Socket) {
  socket.on('message', (msg: string) => {
    socket.emit('message', msg)
    socket.broadcast.emit('message', msg)
  })
}
