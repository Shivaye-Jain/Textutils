import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: "+ text)
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpclick")
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked: "+ text)
        let newText = text.toLowerCase();
        // setText("You have clicked on handleUpclick")
        setText(newText);
        props.showAlert("Converted to lower case!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change") 
        setText(event.target.value) // This sets the text to value in the textarea and on rerendering value in the textarea is again set to text which makes on no difference
    }
    const [text, setText] = useState("");
    // text = "new text" // wrong way to change the state
    // setText("new text"); // correct way to change the text
    // console.log()
    return (<>
        <div className='container' style={{ color: (props.mode === "dark") ? "white" : "black" }}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: (props.mode === "light") ? "white" : "#13466e", color: (props.mode === "dark") ? "white" : "black" }} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                Convert To Uppercase
            </button>
            <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
                Convert To Lowercase
            </button>
        </div>
        <div className="container my-3" style={{ color: (props.mode === "dark") ? "white" : "black" }}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((value)=>{return value.length !== 0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((value)=>{return value.length !== 0}).length} Minutes read</p>
            <h2>
                Preview
            </h2>
            <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
    </>
    )
}
