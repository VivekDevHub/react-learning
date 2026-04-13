import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./app/routes/AppRoutes.jsx";
import { AuthContextProvide } from "./context/AuthContext.jsx";
import { EmployeeContextProvider } from "./context/EmployeeContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvide>
    <EmployeeContextProvider>
      <AppRoutes />
    </EmployeeContextProvider>
  </AuthContextProvide>
);