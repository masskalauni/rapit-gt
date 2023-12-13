
import React, { useState } from 'react';
import styles from './Login.css';
import PropTypes from 'prop-types';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleRememberMeChange = () => {
      setRememberMe(!rememberMe);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform form validation here
      if (email.trim() === '' || password.trim() === '') {
        props.showAlert("Fill all fields!","danger");
        return;
      }
      isFormSubmitted && 
        props.showAlert("Form submitted successfully","success");
    
      // If validation passes, you can proceed with form submission or other actions
  
      // For demonstration purposes, let's log the form data
    //   console.log('Form submitted:', { email, password, rememberMe });
      setIsFormSubmitted(true);
    };
  
    return (
        <>
<main className="form-signin mt-5" style={{color:props.mode==='dark'?'white':'black'}}>
  <form  onSubmit={handleSubmit}>
    <h1 className="h3 mb-3 fw-normal text-center">{props.titleForlogin}</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  value={email} onChange={handleEmailChange}/>
    <label htmlFor="floatingInput">{props.email}</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password}
              onChange={handlePasswordChange}/>
      <label htmlFor="floatingPassword">{props.password}</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox"  value={rememberMe}
                onChange={handleRememberMeChange}/> {props.rememberMe}
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
 
    <p className="mt-5 mb-3 text-muted text-center">&copy; 2017–2025</p>
  </form>
</main>
        </>
    )
}

export default Login;
