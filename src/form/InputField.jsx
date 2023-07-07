import React from "react";

function InputField(props) {
  const { name, form, onChangeCB } = props;
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        name={name}
        onChange={(e) => onChangeCB({ [name]: e.target.value })}
      />
    </div>
  );
}

export default InputField;
