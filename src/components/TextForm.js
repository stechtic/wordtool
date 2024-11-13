import React, { useState } from "react";


export default function TextForm(props) {
  //functions

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleTitleClick = () => {
    let newText = text.replace(/\b\w\S+/g, function (text) {
      return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    });
    setText(newText);
    props.showAlert("Converted To Titlecase", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //state
  const [text, setText] = useState("");

  // setText = "new Text" - wrong way
  // setText("New Text"); - Right way

  return (
    <>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0} className="btn btn-primary mx-1 my-1"
          onClick={handleTitleClick}
        >
          Convert to Titlecase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0} className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Handle Extra Spaces
        </button>
        <button
          disabled={text.length === 0} className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Your Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{
              return element.length !==0
          }).length} words , {text.length} characters
        </p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{
              return element.length !==0
          }).length} minute read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
