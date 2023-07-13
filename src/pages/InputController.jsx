import React, { useState } from "react";
import InputField from "../components/InputField";

function InputController() {
  const [count, setCount] = useState(0);
  const [fields, setFields] = useState([]);

  const addField = () => {
    setCount((count) => count + 1);
    setFields((fields) => [...fields, count]);
  };

  const removeField = (index) => {
    setFields((fields) => fields.filter((field) => field !== index));
  };

  return (
    <div>
      <div className="my-2">
        <h1 className="text-2xl font-bold my-4">
          Form{" "}
          <button
            className="ml-6 p-2 rounded-md bg-emerald-400/50 text-base font-normal"
            onClick={addField}
          >
            Add Field
          </button>
        </h1>
      </div>
      {fields.map((index) => (
        <InputField key={index} index={index} removeCB={removeField} />
      ))}
    </div>
  );
}

export default InputController;
