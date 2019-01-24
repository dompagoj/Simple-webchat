import React, { Component } from 'react'

import styles from './MainLayout.module.css'
import { Socket } from './socket'
import { ChatRoom } from './components/ChatRoom'
import { observer } from 'mobx-react'

interface State {
  client: Socket
}

@observer
export class MainLayout extends Component<any, State> {
  public state: State = {
    client: new Socket('http://localhost:8000'),
  }
  render() {
    return (
      <div className={styles['chatroom-wrapper']}>
        <ChatRoom title="Chatroom" client={this.state.client} />
      </div>
    )
  }
}
