import React from "react";

function Counter(props) {

  return (
    <div>
      <h2>Count: {props.count}</h2>
      {props.count >= 10 ? <p className="alert-box warning">¡El conteo es demasiado alto!</p> : <></>}
    </div>
  );
}

export default Counter;
