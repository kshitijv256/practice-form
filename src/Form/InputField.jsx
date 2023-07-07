import React from "react";

function InputField(props) {
  const { name, form, onChangeCB } = props;
  return (
    <div className="flex flex-col m-2">
      <label htmlFor={name} className="capitalize font-semibold">
        {name}
      </label>
      <input
        type="text"
        className="border-2 border-rose-300 rounded-sm ml-2 h-10"
        name={name}
        value={form[name]}
        onChange={(e) => {
          onChangeCB({ ...form, [name]: e.target.value });
        }}
      />
    </div>
  );
}

export default InputField;
