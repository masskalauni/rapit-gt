import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
function App() {
  const [mode, setMode] = useState('dark'); //wheathe dark mode i enabked or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
  }
  else{
    setMode('light');
  }
}
  return (
<>
<Navbar title="Rapit GT" homeText="Home" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
{/* <About/> */}
<Textform Heading="Enter the text to analyze below"/>

</>
  );
}

export default App;
