import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Signin from "../pages/user/Signin"
import Signup from "../pages/user/Signup"
import HomePage from "../pages/core/HomePage"
import PrivateRoute from "../auth/PrivateRoute"
import AdminRoute from "../auth/AdminRoute"
import UserDashboard from "../pages/user/UserDashboard"
import AdminDashboard from "../pages/user/AdminDashboard"
import AddCategory from "../admin/AddCategory"
import AddProduct from "../admin/AddProduct"
import ShopPage from "../pages/core/ShopPage"
import SingleProduct from '../pages/core/SingleProduct'
import Cart from '../pages/core/Cart'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <Route path= '/product/:productId' exact component={SingleProduct} />
        <Route path= '/cart' exact component={ Cart } />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
