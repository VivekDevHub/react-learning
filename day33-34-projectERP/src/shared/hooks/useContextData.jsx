import { useContext } from "react";
import { Auth } from "../../context/AuthContext";
import { Employee } from "../../context/EmployeeContext";

export let useAuthContext = () => useContext(Auth);
export let useEmployeeContext = () => useContext(Employee);