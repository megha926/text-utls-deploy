import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">{props.about}</a>
        </li> */}
      </ul>

      {/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Enable Mode
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"  id = "drop1">
    <li><a className="dropdown-item" href="/" id="Dark" onClick={props.colorMode} value="Dark">Dark Mode</a></li>
    <li><a className="dropdown-item" href="/" id="Light" value="Light">Light Mode</a></li>
    <li><a className="dropdown-item" href="/" id ="Green" value="Green">Green Mode</a></li>
  </ul>
</div> */}
      
      {/* <select onchange={`${props.colorMode}(this.value)`}>
    <option value="Choose" selected="selected">Enable Mode</option>
    <option value="Dark" >Dark Mode</option>
    <option value="Light" >Light Mode</option>
    <option value="Red" > Red Mode</option>
</select> */}
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes=
{
    title: PropTypes.string
    //about: PropTypes.string
}

Navbar.defaultProps=
{
    title: "Set Title here"
    //about: "About"
}