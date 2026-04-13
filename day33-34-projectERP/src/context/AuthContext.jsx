import { createContext, useEffect, useState } from "react";
import { storage } from "../utils/localStorage";

export let Auth = createContext();

export let AuthContextProvide = ({ children }) => {
  const [registeredAdmins, setRegisteredAdmins] = useState([]);
  const [loggedInAdmin, setLoggedInAdmin] = useState(null);

  console.log("register admins->", registeredAdmins);
  console.log("loggedin admin->", loggedInAdmin);

  useEffect(() => {
    let data = storage.get("reg admins");
    setRegisteredAdmins(() => (data ? data : []));

    let ldata = storage.get("log admin");
    setLoggedInAdmin(ldata);
  }, []);

  return (
    <Auth.Provider
      value={{
        registeredAdmins,
        setRegisteredAdmins,
        loggedInAdmin,
        setLoggedInAdmin,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
