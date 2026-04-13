import { useNavigate } from "react-router";
import { useAuthContext } from "../../../shared/hooks/useContextData";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { storage } from "../../../utils/localStorage";

export let useAuth = () => {
  let { registeredAdmins, setLoggedInAdmin, setRegisteredAdmins } =
    useAuthContext();

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  let handleLoginFormSubmit = (data) => {
    let admin = registeredAdmins.find(
      (elem) => elem.email === data.email && elem.password === data.password,
    );

    if (!admin) {
      alert("logIn failed");
      return;
    }

    setLoggedInAdmin(admin);
    storage.set("log admin", admin);
    alert("admin logged in");
    reset();
  };

  let handleRegisterFormSubmit = (data) => {
    let arr = [...registeredAdmins, { ...data, id: nanoid() }];
    setRegisteredAdmins(arr);
    storage.set("reg admins", arr);
    alert("Admin registered..");
    reset();
  };

  return {
    registeredAdmins,
    setLoggedInAdmin,
    register,
    errors,
    handleSubmit,
    handleRegisterFormSubmit,
    handleLoginFormSubmit,
    navigate,
  };
};
