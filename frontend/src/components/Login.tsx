import React from 'react'

import { Input, Button, Form, Icon } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import styles from '../styles/Login.module.css'
import { RouteComponentProps, withRouter } from 'react-router'
import { axios } from '../axios'
import { observer } from 'mobx-react'

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
            <h2>Matija web chat</h2>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Username is required' }],
              })(<Input autoComplete="off" placeholder="Username" prefix={<Icon type="user" />} />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('chatRoomName', {
                rules: [{ required: true, message: 'Room name is required' }],
              })(<Input autoComplete="off" placeholder="Chat room name" prefix={<Icon type="wechat" />} />)}
            </Form.Item>
            <div className={styles['buttons-space']}>
              <Button type="primary" htmlType="submit">
                Enter
              </Button>
              <Button>Create new room</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
  public onSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('/login', values)
      }
    })
  }
}

export const Login = Form.create<Props>()(LoginComponent)
