import { createContext, useEffect, useState } from "react";
import { storage } from "../utils/localStorage";

export let Employee = createContext();

export let EmployeeContextProvider = ({ children }) => {
  const [registeredEmployees, setRegisteredEmployees] = useState([]);

  useEffect(() => {
    let data = storage.get("employees");
    setRegisteredEmployees(() => (data ? data : []));
  }, []);

  return (
    <Employee.Provider
      value={{
        registeredEmployees,
        setRegisteredEmployees,
      }}
    >
      {children}
    </Employee.Provider>
  );
};
