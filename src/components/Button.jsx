import * as React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button className={`button ${props.className || ""}`}>
      {props.button || "Create account"}
    </button>
  );
};
export default Button;
