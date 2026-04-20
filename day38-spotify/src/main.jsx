import { createRoot } from "react-dom/client";
import "./index.css";
import GlobalError from "./shared/components/ GlobalError";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import AppRoutes from "./app/routes/AppRoutes";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalError />
    <AppRoutes />
  </Provider>
);