import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setErr } from "../../state/ErrorReducer/slicers/ErrorSlice";

const Toaster = () => {
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.errorReducer);

  useEffect(() => {
    if (!message) return;

    const onClose = () => {
      dispatch(setErr({ error: false, message: "" }));
    };

    if (error) {
      toast.error(message, { onClose });
      return;
    }

    toast.success(message, { onClose });
  }, [dispatch, error, message]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss={false}
      pauseOnHover
      theme="dark"
    />
  );
};

export default Toaster;
