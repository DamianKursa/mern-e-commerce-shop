import React from 'react'
import {Link, withRouter } from 'react-router-dom'
import {signout, isAuthenticated } from "../auth/index";

const isActive = (history, path) => {
  if(history.location.pathname === path){
    return {color:"#ff9900"}
  }else{
    return {color: "#fff"}
  }
}
const MenuNavigation = ({history}) => {
  return (
    <nav>
      <ul className = "nav nav-tabs bg-primary">
          <li className = "nav-item">
            <Link  
              className="nav-link" 
              style={isActive(history, '/')} 
              to="/">Home
            </Link>
          </li>
          <li className = "nav-item">
            <Link  
              className="nav-link" 
              style={isActive(history, '/shop')} 
              to="/shop">Shop
            </Link>
          </li>

          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <li className = "nav-item">
              <Link  
                className="nav-link" 
                style={isActive(history, '/dashboard')} 
                to="/user/dashboard">Dashboard
              </Link>
            </li>
          )}

          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <li className = "nav-item">
              <Link  
                className="nav-link" 
                style={isActive(history, '/dashboard')} 
                to="/admin/dashboard">Admin Dashboard
              </Link>
            </li>
          )}
          {!isAuthenticated() && (
            <>
              <li className = "nav-item">
                <Link 
                  className="nav-link"  
                  style={isActive(history, '/signup')} 
                  to="/signup">Signup
                </Link>
              </li>
              <li className = "nav-item">
                <Link 
                className="nav-link"  
                style={isActive(history, '/signin')} 
                to="/signin">Signin
                </Link>
              </li>
            </>
          )}

          {isAuthenticated() &&(
            <li className = "nav-item">
              <span 
              className="nav-link"  
              style={{cursor: 'pointer', color: "white"}} 
              onClick={ () => signout(() =>{
                history.push('/')
              })}>Signout
              </span>
            </li>
          )}
      </ul>
    </nav>
  )
}

export default withRouter(MenuNavigation)