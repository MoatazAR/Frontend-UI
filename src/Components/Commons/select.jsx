import React from "react";

const Select = ({ name, options, placehold}) => {
  return (
    <div>
      <select className={name} id={name} placeholder={placehold}>
        <option default> {options[0]} </option>
        {options.map(option => (
          <option>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
