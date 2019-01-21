import io from 'socket.io-client'
import { ChatMessage } from './components/ChatRoom'

export class Socket {
  private socket: SocketIOClient.Socket

  public constructor(uri: string) {
    this.socket = io.connect(uri)
  }

  public sendMsg(message: ChatMessage) {
    this.socket.emit('message', { message })
  }
  public registerNewMsg(handler: (result: Message) => void) {
    this.socket.on('message', handler)
  }
  public unRegisterNewMsg() {
    this.socket.off('message')
  }
}

type Message = {
  message: string
}

// export function Socket(url: string) {
//   const socket = io.connect(url)

//   function sendMessage(message: string) {
//     console.log('Sending msg?')
//     socket.emit('message', { message })
//   }
//   const newMessage: Handlers['newMessage'] = handler => {
//     socket.on('message', handler)
//   }

//   return {
//     sendMessage,
//     newMessage,
//   }
// }
