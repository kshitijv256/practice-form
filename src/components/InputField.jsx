import React, { useState } from "react";

function InputField({ index, removeCB }) {
  const [input, setInput] = useState("");
  const [saved, setSaved] = useState("");
  const clearInput = () => {
    setInput("");
    setSaved("");
  };
  return (
    <div>
      <div className="flex gap-4 my-4 items-center">
        <input
          type="text"
          className="border-2 border-gray-400 rounded-md p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="p-2 rounded-md bg-sky-400/50"
          onClick={(_) => setSaved(input)}
        >
          save
        </button>
        <button
          className="p-2 rounded-md bg-indigo-400/50"
          onClick={(_) => clearInput()}
        >
          clear
        </button>
        <button
          className="p-2 rounded-md bg-red-400/50 w-10 font-bold"
          onClick={(_) => removeCB(index)}
        >
          X
        </button>
        {saved && <span>Value: {saved}</span>}
      </div>
    </div>
  );
}

export default InputField;
