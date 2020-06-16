import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import { NasaContainer } from 'containers'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/nasa' component={NasaContainer} />
      <Redirect to='/nasa' />
    </Switch>
  </BrowserRouter>
)

export default Routes
