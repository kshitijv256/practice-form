import React, { useState } from "react";
import InputField from "./InputField";
import FormData from "./FormData";

function Form() {
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState({
    name: "",
    dept: "",
    year: "",
  });

  const onChange = (value) => {
    setForm({ ...value });
  };

  return (
    <div className="mx-2 md:w-1/2 lg:w-1/3">
      <h1 className="font-bold text-2xl">Student Form</h1>
      <InputField key={"name"} name="name" form={form} onChangeCB={onChange} />
      <InputField key={"dept"} name="dept" form={form} onChangeCB={onChange} />
      <InputField key={"year"} name="year" form={form} onChangeCB={onChange} />
      <button
        className="bg-rose-300 rounded-sm p-2 mx-4 my-2"
        onClick={() => {
          setForms([...forms, form]);
          setForm({
            name: "",
            dept: "",
            year: "",
          });
        }}
      >
        Submit
      </button>
      <FormData forms={forms} />
    </div>
  );
}

export default Form;
