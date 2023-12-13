import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';

export default function Navbar(props) {
  const buttonText = props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode';
  return (
  <>
  
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" >{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">{props.homeText}</Link>
          </li>
          <li className="nav-item">
          <Link  to="/about" className="nav-link">{props.aboutText}</Link>
          </li>
          <li className="nav-item">
          <Link  to="/login" className="nav-link">{props.loginText}</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{buttonText}</label>
</div>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search anything" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">search</button>
        </form>
      </div>
    </div>
  </nav>

 </>
 
  )
}

// proptype for Navbar components 
Navbar.propTypes={
    title:PropTypes.string,
    homeText:PropTypes.string,
    aboutText:PropTypes.string
}

// default props if developer doesnt pass props 
Navbar.defaultProps = {
    title: 'set title here',
    homeText:'set home text here',
    aboutText:'set about text here'
  };