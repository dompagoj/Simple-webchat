import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './components/Login'
import { MainLayout } from './MainLayout'

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={MainLayout} />
      </Switch>
    )
  }
}
