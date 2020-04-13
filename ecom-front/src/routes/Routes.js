import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signin from '../pages/user/Signin'
import Signup from '../pages/user/Signup'
import HomePage from '../pages/core/HomePage'
import PrivateRoute from '../auth/PrivateRoute'
import AdminRoute from '../auth/AdminRoute'
import UserDashboard from '../pages/user/UserDashboard'
import AdminDashboard from '../pages/user/AdminDashboard'
const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />

            </Switch>

        </BrowserRouter>
    )
}
export default Routes