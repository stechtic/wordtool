import React from "react";

function Alert(props) {
  const capatalize = (word) => {
    let a = word.charAt(0).toUpperCase();
    return a + word.substring(1);
  };
  return (
    <div style={{height:'60px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-1 my-1`} role="alert">
        <strong>{capatalize(props.alert.type)} </strong>
        {props.alert.msg}
      </div>}
    </div>
  );
}

export default Alert;
