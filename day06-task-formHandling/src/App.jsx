import React, { useState } from "react";
import Login from './components/login/Login';
import Register from './components/register/Register';

const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {toggle ? (
        <Register setToggle={setToggle} />
      ) : (
        <Login setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;