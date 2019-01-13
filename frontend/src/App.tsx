import React, { Component } from 'react'
import { Input, Button, message } from 'antd'
import openSocket from 'socket.io-client'
import './App.css'

interface IState {
  messages: string[]
  currentMsg: string
}

class App extends Component<any, IState> {
  public state: IState = {
    messages: [],
    currentMsg: '',
  }

  render() {
    const { currentMsg } = this.state
    return (
      <div>
        <h2>Matija krivosic chat</h2>
        <div className="wrapper">
          <div className="text-area">
            {this.state.messages.map((msg, i) => {
              return (
                <span key={i} className="chat-rows">
                  {msg}
                </span>
              )
            })}
          </div>
          <Input value={currentMsg} name="currentMsg" onChange={this.onChange} />
          <Button onClick={this.sendMessage}> Send </Button>
        </div>
      </div>
    )
  }
  public componentDidMount = () => {
    const socket = openSocket('http://localhost:8000')
    socket.on('message', message => {
      message(message)
    })
  }

  public onChange = event => {
    // @ts-ignore
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  public sendMessage = () => {
    const { currentMsg } = this.state
    console.log({ currentMsg })

    this.setState({
      messages: [...this.state.messages, currentMsg],
      currentMsg: '',
    })
  }
}

export default App
