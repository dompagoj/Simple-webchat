import React from 'react'
import { Button, Input, Icon } from 'antd'

import { Socket } from '../socket'
import styles from '../styles/chat-room.module.css'

interface Props {
  title: string
  client: Socket
}
interface State {
  chatHistory: string[]
  msg: string
}

export class ChatRoom extends React.Component<Props, State> {
  public state: State = {
    chatHistory: [],
    msg: '',
  }
  public render() {
    const { title } = this.props
    const { msg } = this.state

    return (
      <div>
        <h2>{title}</h2>
        <div>
          <div className={styles['text-area']}>
            {this.state.chatHistory.map((msg, i) => {
              return (
                <span key={i} className={styles['chat-rows']}>
                  {msg}
                </span>
              )
            })}
          </div>
          <form className={styles.chatroomSendForm} onSubmit={this.sendMessage}>
            <Input style={{ width: '85%' }} autoComplete="off" name="msg" value={msg} onChange={this.onChange} />
            <Button type="primary" shape="circle" icon="right-circle" htmlType="submit" onClick={this.sendMessage} />
          </form>
        </div>
      </div>
    )
  }
  public componentWillUnmount = () => {
    this.props.client.unRegisterNewMsg()
  }
  public componentDidMount = () => {
    this.props.client.registerNewMsg(this.onMsgRecieved)
  }

  public onMsgRecieved = entry => {
    console.log('Recieved msg! ', entry)

    this.updateChatHistory(entry)
  }

  public updateChatHistory = ({ message }) => {
    this.setState({ chatHistory: this.state.chatHistory.concat(message) })
  }

  public onChange = event => {
    // @ts-ignore
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  public sendMessage = e => {
    e.preventDefault()

    if (this.state.msg === '') return

    this.props.client.sendMsg(this.state.msg)
    return this.setState({ msg: '' })
  }
}
