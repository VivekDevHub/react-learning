import React, { useState } from "react";
import DashboardOne from "./components/dashboardOne/DashboardOne";
import DashboardTwo from "./components/dashboardTwo/DashboardTwo";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={()=> setToggle((prev)=>!prev)}>
        {toggle ? 'Go To Home' : 'Go To Users'}
      </button>
      {toggle ? (
        <div>
          <DashboardTwo />
        </div>
      ) : (
        <div>
          <DashboardOne />
        </div>
      )}
    </div>
  );
};

export default App;
