import React from 'react'

export default function Alert(props) {
    const capitalLetter =(word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1
            );
        

    }
  return (
   <>

{props.alert?.type && (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalLetter(props.alert.type)}</strong>:{props.alert.msg}
        </div>
        )}
   </>
  )
}
