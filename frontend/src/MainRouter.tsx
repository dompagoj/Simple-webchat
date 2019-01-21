import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom'
import { observer } from 'mobx-react'

import { Login } from './components/Login'
import { MainLayout } from './MainLayout'

@observer
class RouterComponent extends Component<RouteComponentProps<{}>> {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* {!authStore.isLoggedIn && <Redirect to="/login" />} */}
        <Route exact path="/chat-rooms" component={MainLayout} />
        <Redirect exact from="/" to="/chat-rooms" />
      </Switch>
    )
  }
}

export default withRouter(RouterComponent)
