import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';

function App() {
  const [mode, setMode] = useState('light'); //wheathe dark mode i enabked or not
  const [alert, setAlert] = useState(null); //alert message
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
      },1500);
      


  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='Rapit GT -Dark Mode';
      // setInterval(() => {
      //   document.title='Rapit GT is amazing !';
      // }, 1500);
      // setInterval(() => {
      //   document.title='Im Inspecting On your Device.... !';
      // }, 2000);
  }
  else{
    setMode('light');
    document.body.style.background='white';
    showAlert("Light mode has been enabled","success");
    document.title='Rapit GT -Light Mode';
  }
}
  return (
    <>

<Router>
<Navbar title="Rapit GT" homeText="Home" aboutText="About Us" loginText="Login" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>    
<Routes>
    <Route  exact path="/about"   element={<About/>} />
    <Route  exact path="/"   element={<Textform showAlert={showAlert} Heading="Enter the text to analyze below" mode={mode} />} />
    <Route   path="/login"   element={<Login titleForlogin="Please Sign In" rememberMe="Remember Me" password="Password" email="Email Address" showAlert={showAlert} mode={mode}/>} />

</Routes>
  </Router>
</>
  );
}

export default App;
