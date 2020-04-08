import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signin from '../pages/user/Signin'
import Signup from '../pages/user/Signup'
import HomePage from '../pages/core/HomePage'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
            </Switch>

        </BrowserRouter>
    )
}
export default Routes