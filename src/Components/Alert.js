import React from 'react'

export default function Alert(props) {
    const capitalizeWord = (word)=>
    {
        const lowerWord= word.toLowerCase();
        return lowerWord.charAt(0).toUpperCase()+lowerWord.slice(1);
    }
  return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalizeWord(props.alert.type)}</strong>: {props.alert.msg}
</div>

  )
}
