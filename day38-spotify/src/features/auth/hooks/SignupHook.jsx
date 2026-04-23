import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setErr } from "../../../shared/state/ErrorReducer/slicers/ErrorSlice";
import { createUser } from "../api/AuthApi";
import { setLogUser, setUsers } from "../state/UserReducer/slicers/UserSlice";
import { setLoggedUser } from "../api/AuthApi";

const SignupHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    const result = createUser(values);

    if (!result.ok) {
      dispatch(setErr({ error: true, message: result.message }));
      return;
    }

    dispatch(setUsers(result.users));
    const loggedUser = {
      id: result.user.id,
      name: result.user.name,
      email: result.user.email,
    };
    setLoggedUser(loggedUser);
    dispatch(setLogUser(loggedUser));
    dispatch(
      setErr({
        error: false,
        message: "Signup successful.",
      }),
    );

    reset();
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

export default SignupHook;
