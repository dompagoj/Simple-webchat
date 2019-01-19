import React from 'react'
import Axios from 'axios'

import { Input, Button, Form, Icon } from 'antd'
import { FormComponentProps } from 'antd/lib/form'

import styles from '../styles/Login.module.css'

interface Props extends FormComponentProps {}

class LoginComponent extends React.Component<Props> {
  public render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <Form onSubmit={this.onSubmit}>
            <h2>Matija chat room</h2>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Username is required' }],
              })(<Input placeholder="Username" prefix={<Icon type="user" />} />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('chatRoom', {
                rules: [{ required: true, message: 'Room name is required' }],
              })(<Input placeholder="Chat room name" prefix={<Icon type="wechat" />} />)}
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
        console.log('Gratz')
      }
    })
  }
}

export const Login = Form.create<Props>()(LoginComponent)
