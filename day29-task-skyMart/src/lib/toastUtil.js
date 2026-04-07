import { createElement } from "react";
import toast from "react-hot-toast";
import AppToast from "../components/AppToast";

export function showAppToast(message, variant = "error") {
  return toast.custom(() =>
    createElement(AppToast, {
      message,
      variant,
    }),
  );
}

export function showErrorToast(message) {
  return showAppToast(message, "error");
}

export function showSuccessToast(message) {
  return showAppToast(message, "success");
}

export function showInfoToast(message) {
  return showAppToast(message, "info");
}
