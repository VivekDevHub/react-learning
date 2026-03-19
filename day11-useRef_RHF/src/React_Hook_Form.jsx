import React, { useState } from "react";
import { useForm } from "react-hook-form";

const React_Hook_Form = () => {
  console.log("render..");
  let { register, handleSubmit, reset } = useForm();
  const [formData, setFormData] = useState(null);
  console.log(formData)

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>React hook form</h1>

      <form
        onSubmit={handleSubmit((data) => {
          setFormData(data);
          reset();
        })}
        action=""
      >
        <input
          {...register("name")}
          className="border p-2"
          type="text"
          placeholder="Name"
        />{" "}
        <br /> <br />
        <input
          {...register("email")}
          className="border p-2"
          type="text"
          placeholder="Email"
        />{" "}
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default React_Hook_Form;