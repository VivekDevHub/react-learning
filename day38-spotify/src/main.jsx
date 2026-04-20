import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import GlobalError from "./shared/components/ GlobalError";
import { store } from "./app/store/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalError />
    <AppRoutes />
  </Provider>
);