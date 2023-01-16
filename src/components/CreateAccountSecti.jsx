import * as React from "react";
import "./CreateAccountSecti.css";
import imagePlaceholder from "../assets/imagePlaceholder.png";
import Button from "./Button";
import TypeForm from "./TypeForm";
const CreateAccountSecti = (props) => {
  return (
    <div className={`create-account-secti ${props.className || ""}`}>
      <img className="image-placeholder" src={imagePlaceholder} />
      <div className="flex-container">
        <span className="create-account">
          {props.createAccount || "Create account"}
        </span>
        <span className="welcome-enter-your-d">
          {props.welcomeEnterYourD ||
            "Welcome! enter your details and start creating, collecting and selling NFTs."}
        </span>
        <TypeForm className="type-form-instance-1" {...props.typeForm1} />
        <TypeForm className="type-form-1-instance" {...props.typeForm} />
        <TypeForm className="type-form-2-instance" {...props.typeForm2} />
        <TypeForm className="type-form-3-instance" {...props.typeForm3} />
        <Button className="button-instance-1" {...props.button} />
      </div>
    </div>
  );
};
export default CreateAccountSecti;
