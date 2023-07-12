import React from "react";

function Button({ text, style, onClickCB }) {
  return (
    <button
      className={`${style} p-2 border-2 border-gray-500 w-20 rounded-md`}
      onClick={onClickCB}
    >
      {text}
    </button>
  );
}

export default Button;
