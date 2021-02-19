import React from "react";
import '../CSS/home.css';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <input {...rest} name={name} id={name} className="inputClass" />
      {error && <p className="errorField">{error}</p>}
    </div>
  );
};

export default Input;
