import React from "react";

function FormData({ forms }) {
  return (
    <div className="my-2">
      <h2 className="font-bold text-xl text-rose-600">Form Data</h2>
      {forms.map((form, index) => (
        <div key={index} className="flex flex-col gap-2 text-xl">
          <p>Name: {form.name}</p>
          <p>Dept: {form.dept}</p>
          <p>Year: {form.year}</p>
          <hr className="border-rose-300" />
        </div>
      ))}
    </div>
  );
}

export default FormData;
