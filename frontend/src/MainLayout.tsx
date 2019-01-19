import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import styles from './App.module.css'
import { Socket } from './socket'
import { ChatRoom } from './components/ChatRoom'

interface State {
  client: Socket
}

export class MainLayout extends Component<any, State> {
  public state: State = {
    client: new Socket('http://localhost:8000'),
  }
  render() {
    return (
      <div className={styles['chatroom-wrapper']}>
        <ChatRoom title="Matija chatroom" client={this.state.client} />
      </div>
    )
  }
}
