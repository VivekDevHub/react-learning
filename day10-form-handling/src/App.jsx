import React, { useState } from "react";

const App = () => {
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  console.log("form value->", formValues);

  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <h1>Create Account</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("after onchange->", formValues);
        }}
        className="border flex flex-col gap-4 w-[400px] border-gray-600 p-5 rounded-2xl"
        action=""
      >
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Name
          </label>
          <input
            onChange={(e) => {
              formValues.name = e.target.value;
              setFormValues({ ...formValues });
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
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
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
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
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
            onChange={(e) =>
              setFormValues({ ...formValues, mobile: e.target.value })
            }
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

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   const [formValues, setFormValues] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormValues({
//       ...formValues,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ✅ Validation
//   const validate = () => {
//     let err = {};

//     if (!formValues.email.includes("@")) {
//       err.email = "Valid email required";
//     }

//     if (formValues.password.length < 6) {
//       err.password = "Min 6 characters";
//     }

//     if (!isLogin && !formValues.name.trim()) {
//       err.name = "Name required";
//     }

//     return err;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       if (isLogin) {
//         // LOGIN
//         const savedUser = JSON.parse(localStorage.getItem("user"));

//         if (
//           savedUser &&
//           savedUser.email === formValues.email &&
//           savedUser.password === formValues.password
//         ) {
//           alert("Login Successful ✅");
//         } else {
//           alert("Invalid Credentials ❌");
//         }
//       } else {
//         // REGISTER
//         localStorage.setItem("user", JSON.stringify(formValues));
//         alert("Account Created ✅");
//         setIsLogin(true);
//       }

//       // reset
//       setFormValues({
//         name: "",
//         email: "",
//         password: "",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-100 to-blue-100">

//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-[350px]">

//         {/* Toggle */}
//         <div className="flex mb-6 bg-gray-200 rounded-lg overflow-hidden">
//           <button
//             onClick={() => setIsLogin(true)}
//             className={`w-1/2 py-2 ${
//               isLogin ? "bg-blue-600 text-white" : ""
//             }`}
//           >
//             Login
//           </button>
//           <button
//             onClick={() => setIsLogin(false)}
//             className={`w-1/2 py-2 ${
//               !isLogin ? "bg-blue-600 text-white" : ""
//             }`}
//           >
//             Register
//           </button>
//         </div>

//         <h1 className="text-2xl font-bold text-center mb-4">
//           {isLogin ? "Welcome Back" : "Create Account"}
//         </h1>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//           {/* Name (only register) */}
//           {!isLogin && (
//             <div>
//               <input
//                 name="name"
//                 value={formValues.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 className="w-full border p-2 rounded-lg"
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm">{errors.name}</p>
//               )}
//             </div>
//           )}

//           {/* Email */}
//           <div>
//             <input
//               name="email"
//               value={formValues.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-full border p-2 rounded-lg"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email}</p>
//             )}
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <input
//               name="password"
//               value={formValues.password}
//               onChange={handleChange}
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="w-full border p-2 rounded-lg"
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-2 cursor-pointer text-sm text-blue-600"
//             >
//               {showPassword ? "Hide" : "Show"}
//             </span>
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password}</p>
//             )}
//           </div>

//           <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
//             {isLogin ? "Login" : "Register"}
//           </button>
//         </form>

//         {/* Switch */}
//         <p className="text-sm text-center mt-4">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <span
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-blue-600 cursor-pointer ml-1"
//           >
//             {isLogin ? "Register" : "Login"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default App;
