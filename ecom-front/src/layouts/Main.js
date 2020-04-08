import React from 'react'
import MenuNavigation from '../components/MenuNavigation'
const Main = ({
  title = 'Title',
  description="Description",
  children,
  className
}) => {
  return (
    <div>
      <nav>
        <MenuNavigation />
      </nav>
      <div className ="jumbotron">
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>

  )
}

export default Main
