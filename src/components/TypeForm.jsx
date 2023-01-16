import * as React from "react";
import "./TypeForm.css";
const TypeForm = (props) => {
  return (
    <input
      className={`type-form ${props.className || ""}`}
      placeholder={props.username || "Username"}
      type="text"
    />
  );
};
export default TypeForm;
