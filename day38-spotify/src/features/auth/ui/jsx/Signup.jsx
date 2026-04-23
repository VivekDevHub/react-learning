import React from "react";
import { Link } from "react-router";
import Button from "../../../../shared/ui/jsx/Button";
import Input from "../../../../shared/ui/jsx/Input";
import Logo from "../../../../shared/ui/jsx/Logo";
import styles from "../css/Signup.module.css";
import SignupHook from "../../hooks/SignupHook";

const Signup = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    SignupHook();

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Logo color="white" className={styles.logo} />
        <h1 className={styles.title}>Create your account</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="name"
            label="Name"
            type="text"
            autoComplete="name"
            error={errors.name?.message}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name should be at least 2 characters",
              },
            })}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters",
              },
            })}
          />
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            Sign up
          </Button>
        </form>

        <div className={styles.login}>
          <p className={styles.loginCopy}>Already have an account?</p>
          <Link to="/login" className={styles.loginLink}>
            Log in
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Signup;
