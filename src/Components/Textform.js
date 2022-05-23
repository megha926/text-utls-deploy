import React, { useState } from 'react';

export default function Textform(props) {

    const convertToUppercase=()=>
    {
        if(text===null || text==="")
        {
            alert("Please Enter some Value!")
        }
        else{
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText)
        props.showAlert("Converted to Uppercase","success");}
    }
    const convertToLowercase=()=>
    {
        if(text===null || text==="")
        {
            alert("Please Enter some Value!")
        }
        else{
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText)
        props.showAlert("Converted to Lowercase","success");}
    }
    const clearText=()=>
    {
        setText("");
        props.showAlert("Text Cleared" , "success");
    }
    const handleCopy=()=>
    {
        var text=document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied" ,"success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed" , "success");
    }


    const handleOnChange=(event)=>
    {
        setText(event.target.value)
        //console.log("inside handle on change");
    }
   
    const [text, setText] = useState('Enter text here!');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}} > 
    <h1>{props.heading}</h1>     
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black' }}  rows="8"></textarea>
    </div>
    <button type="button" className ="btn btn-primary mx-1" onClick={convertToUppercase}>Convert To UpperCase</button>
    <button type="button" className ="btn btn-primary mx-1" onClick={convertToLowercase}>Convert To LowerCase</button>
    <button type="button" className ="btn btn-primary mx-1" onClick={clearText}>Clear</button>
    <button type="button" className ="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button type="button" className ="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary </h2>
    <p>{text.split(" ").length} words and {text.length} characters. </p>
    <p>{0.008* text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length >0 ?text:"Please enter some text in the above text box to preview it!"}</p>   
    </div>
    </>
  )
}
