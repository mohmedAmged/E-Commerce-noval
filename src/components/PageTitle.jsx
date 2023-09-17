import React from 'react'
import "./pageTitle.css"
import { NavLink } from 'react-router-dom'
export default function PageTitle(props) {
  return (
    <div className='titleBox'>
      <div className="container">
        <div className="textTitle">
            <h1>{props.title}</h1>
            <span>
                <NavLink className="nav-link" to="/">
                    home </NavLink> 
                - {props.title}
            </span>
        </div>
      </div>
    </div>
  )
}
