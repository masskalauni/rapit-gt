import React,{useState} from 'react'


import PropTypes from 'prop-types';
export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        if(text.trim()!==''){
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
        }
        else{
          props.showAlert("Textarea is empty cant convert to uppercase","danger");  
        }
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
        setErrorMessage('');
        setSuccessMessage('');
       
    }
    const handleResetClick = () => {
        // Reset the text to its initial state
        setText('');
      };
      const handleLwClick=()=>{
      if(text.trim() !==''){
        let newText1=text.toLowerCase();
        setText(newText1);
        props.showAlert("Converted to LowerCase","success");
      }
      else{
         // Set an error message to be displayed
         props.showAlert("Textarea is empty cant convert to lowercase","danger");  
      }
      }
 //downloadText
 const downloadText = () => {
    // Check if there is text to download
    if (text.trim() !== '') {
      // Create a Blob and initiate a download
      const blob = new Blob([text], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'filename.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      props.showAlert("Downloaded !!!","success");
    } else {
      // Set an error message to be displayed
      props.showAlert("Textarea is empty. Cannot download.","danger");
      
    }
  };
//copy text
const copyText=()=>{
    if(text.trim() !== '') {
        navigator.clipboard.writeText(text).then(()=>{
          props.showAlert("Copied!","success");
           
            }, ()=>{
              props.showAlert("Could not copy text. Please try again later.","primary");
                
                })
                }else{
                  props.showAlert("Textarea is empty. Cannot Copy.","danger");
                    
                }
}

//removeExtraSpace
const removeExtraSpace = () => {
    if (text.trim() !== '') {
      // Replace consecutive spaces with a single space
      let newText = text.replace(/\s+/g, ' ');
      setText(newText);
      props.showAlert("Extra Space Removed!","success");
    } else {
      // Set an error message to be displayed
      props.showAlert("Textarea is empty. Cannot Remove Extra Space.","danger");
    
    }
  };
  
            

     // Declare a new state variable, which we'll call "text"
 const [text, setText] = useState('');
 const [errorMessage, setErrorMessage] = useState('');
 const [succesMessage, setSuccessMessage] = useState(''); //these state are curreently not using because i have updated the code , in the begining i use these state (errorMessage and successMessage)
    return (
        <>
       
        <div className="container mt-5" style={{color:props.mode==='dark'?'white':'black'}}>
            <div className="mb-3 text-center">
                <label htmlFor="my_box" className="form-label ">{props.Heading}</label>
            <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            {succesMessage && <div style={{ color: 'green' }}>{succesMessage}</div>}

                
            </div>
            <button className="btn btn-primary m-3" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary m-3" onClick={handleLwClick}>Convert to lowercase</button>
            <button className="btn btn-primary m-3" onClick={downloadText}>Download text</button>
            <button className="btn btn-primary m-3" onClick={copyText}>Copy text</button>
            <button className="btn btn-primary m-3" onClick={removeExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-secondary m-3" onClick={handleResetClick}>Clear Text</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
          <h4>Your Text Summary</h4>
                            <p>
                    {text.trim() === '' ? (
                    'Enter Something...'
                    ) : (
                    <span>
                        <b>{text.split(' ').length}</b> words and <b>{text.length}</b> Characters 
                    </span>
                    )}
                    </p>

        <p><b>{0.008 * text.split(" ").length} </b>Minutes reads.</p>
        <div class="preview-container">
             <h4>Preview</h4>
             <p  id="preview-text">{text.length>0?text:"Enter Something To Preview..."}</p>
            
        </div>
        </div>
       
        </>
    )
}


// proptype for Textform  components 
Textform.propTypes={
    Heading:PropTypes.string
}

// default props if developer doesnt pass props 
Textform.defaultProps = {
    Heading: 'set your heading  here'
    
  };





 