import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.homeText}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
        </ul>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search anything" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">search</button>
        </form>
      </div>
    </div>
  </nav>
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