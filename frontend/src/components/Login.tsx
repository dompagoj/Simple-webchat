import React from 'react'

import { Input, Button, Form, Icon, message } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import styles from '../styles/Login.module.css'
import { RouteComponentProps, withRouter } from 'react-router'
import { axios } from '../axios'
import { observer } from 'mobx-react'
import { userStore } from '../stores/UserStore'

type extendedProps = FormComponentProps & RouteComponentProps<{}>
interface Props extends extendedProps {}

@observer
class LoginComponent extends React.Component<Props> {
  public render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <Form onSubmit={this.onSubmit}>
            <h2>Web chat</h2>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Username is required' }],
              })(<Input autoComplete="off" placeholder="Username" prefix={<Icon type="user" />} />)}
            </Form.Item>
            {/* <Form.Item>
              {getFieldDecorator('chatRoomName', {
                rules: [{ required: true, message: 'Room name is required' }],
              })(<Input autoComplete="off" placeholder="Chat room name" prefix={<Icon type="wechat" />} />)}
            </Form.Item> */}
            <div className={styles['buttons-space']}>
              <Button type="primary" htmlType="submit">
                Enter
              </Button>
              {/* <Button>Create new room</Button> */}
            </div>
          </Form>
        </div>
      </div>
    )
  }
  public onSubmit = async e => {
    e.preventDefault()

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        if (!'WebSocket' in window) {
          return message.error('Your browser doesnt support websockets, sorry')
        }
        const { data } = await axios.post('/login', values)
        userStore.me = data.user
        this.props.history.push('/chat-rooms')
      }
    })
  }
}

export const Login = Form.create<Props>()(LoginComponent)
