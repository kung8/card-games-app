import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Login from './component/Login'

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/dash' component={Dashboard}/>
    </Switch>
)