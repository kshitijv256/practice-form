import React, { useState } from "react";
import InputField from "./InputField";

function Form() {
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState({
    name: "",
    dept: "",
    year: "",
  });

  const onChange = (value) => {
    setForm({ ...form, ...value });
  };

  return (
    <div>
      <h1>Form</h1>
      <InputField name="name" value={form} onChangeCB={onChange} />
      <InputField name="dept" value={form} onChangeCB={onChange} />
      <InputField name="year" value={form} onChangeCB={onChange} />
      <button
        onClick={() => {
          setForms([...forms, form]);
        }}
      ></button>
      <div>
        <h2>Form Data</h2>
        {forms.map((form) => (
          <div>
            <p>{form.name}</p>
            <p>{form.dept}</p>
            <p>{form.year}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
