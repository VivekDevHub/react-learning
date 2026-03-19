import React, { useRef, useState } from "react";

const App = () => {
  console.log("app rendering...");

  let inpRef = useRef({});
  console.log(inpRef);

  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <h1>Create Account</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inpRef.current.name.value);
          console.log(inpRef.current.email.value);
          console.log(inpRef.current.password.value);
          console.log(inpRef.current.mobile.value);
        }}
        className="border flex flex-col gap-4 w-[400px] border-gray-600 p-5 rounded-2xl"
        action=""
      >
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Name
          </label>
          <input
            name="name"
            ref={(e) => {
              inpRef.current.name = e;
            }}
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
            ref={(e) => {
              inpRef.current.email = e;
            }}
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
            ref={(e) => {
              inpRef.current.password = e;
            }}
            name="Pss"
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
            ref={(e) => {
              inpRef.current.mobile = e;
            }}
            className="bg-gray-300 p-2 rounded text-white"
            type="number"
            placeholder="9579457347"
          />
        </div>
        <button className="bg-blue-600 p-2 rounded text-white cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
