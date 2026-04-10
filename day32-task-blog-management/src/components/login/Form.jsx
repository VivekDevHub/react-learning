import React, { useEffect } from "react";
import FormHead from "../ui/FormHead";
import styles from "../../css/login/Form.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { save } from "../../utils/localStorage";
import InputField from "../ui/InputField";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { users, user, setUser } = useAuth();

  useEffect(() => {
    if (JSON.stringify(user) !== "[]") navigate("/");
  }, []);

  const submiHandler = (data) => {
    let existUser = users.find((elem) => elem.email == data.email);

    if (existUser == undefined) {
      toast.error("Email Does not exits");
      return;
    }

    if (existUser.password !== data.password) {
      toast.error("Incorrect Password");
      return;
    }

    toast.success("Login successfull");
    setUser(existUser);
    save("logUser", existUser);
    existUser.type == "reader" ? navigate("/") : navigate("/dashboard");
  };

  return (
    <div className={styles.box}>
      <FormHead
        head={"Welcome Back"}
        subHead={"Sign in to your account to continue"}
      />
      <form onSubmit={handleSubmit(submiHandler)} className={styles.form}>
        <InputField
          label={"email"}
          type={"email"}
          placeHolder={"you@gmail.com"}
          error={errors?.email?.message}
          {...register("email", { required: "email is required" })}
        />
        <InputField
          label={"password"}
          type={"password"}
          placeHolder={"Enter Your password"}
          error={errors?.password?.message}
          {...register("password", { required: "password is required" })}
        />
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
      <p className={styles.minTxt}>
        Don't have a Account?{" "}
        <span
          className={styles.highlight}
          onClick={() => navigate("/register")}
        >
          Sign up
        </span>{" "}
      </p>
      <ToastContainer />
    </div>
  );
};

export default Form;
