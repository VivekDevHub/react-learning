import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setErr } from "../../../shared/state/ErrorReducer/slicers/ErrorSlice";
import { authenticateUser } from "../api/AuthApi";
import { setLogUser } from "../state/UserReducer/slicers/UserSlice";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    const result = authenticateUser(values);

    if (!result.ok) {
      dispatch(setErr({ error: true, message: result.message }));
      return;
    }

    dispatch(
      setLogUser({
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
      }),
    );
    dispatch(
      setErr({
        error: false,
        message: `Welcome back, ${result.user.name}!`,
      }),
    );
    navigate("/home");
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  };
};

export default LoginHook;
