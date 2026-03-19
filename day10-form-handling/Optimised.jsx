import { useState } from "react";

const Optimised = () => {
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  let [arr, setArr] = useState([]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("after onchange->", formValues);

    setArr([...arr, formValues]);
    console.log(arr);

    setFormValues({
      name: "",
      email: "",
      password: "",
      mobile: "",
    });
  };

  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <h1>Create Account</h1>

      <form
        onSubmit={handleSubmit}
        className="border flex flex-col gap-4 w-[400px] border-gray-600 p-5 rounded-2xl"
        action=""
      >
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Name
          </label>
          <input
            value={formValues.name}
            name="name"
            onChange={handleChange}
            className="bg-gray-300 p-2 rounded text-white"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Email
          </label>
          <input
            value={formValues.email}
            name="email"
            onChange={handleChange}
            className="bg-gray-300 p-2 rounded text-white"
            type="text"
            placeholder="john@xyz.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Password
          </label>
          <input
            value={formValues.password}
            name="password"
            onChange={handleChange}
            className="bg-gray-300 p-2 rounded text-white"
            type="text"
            placeholder="12345678"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Mobile
          </label>
          <input
            value={formValues.mobile}
            name="mobile"
            onChange={handleChange}
            className="bg-gray-300 p-2 rounded text-white"
            type="number"
            placeholder="9579457347"
          />
        </div>
        <button className="bg-blue-600 p-2 rounded text-white cursor-pointer">
          Submit
        </button>
      </form>

      <div>
        <h1>User name</h1>
        <div>
          {arr.map((elem) => (
            <h1>{elem.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Optimised;
