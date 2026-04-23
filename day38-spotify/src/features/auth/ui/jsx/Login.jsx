import React from "react";
import { Link } from "react-router";
import Button from "../../../../shared/ui/jsx/Button";
import Input from "../../../../shared/ui/jsx/Input";
import Logo from "../../../../shared/ui/jsx/Logo";
import styles from "../css/Login.module.css";
import LoginHook from "../../hooks/LoginHook";

const Login = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    LoginHook();

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Logo color="white" className={styles.logo} />
        <h1 className={styles.title}>Welcome back</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
            autoComplete="current-password"
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
            Continue
          </Button>
        </form>

        <div className={styles.signup}>
          <p className={styles.signupCopy}>Don't have an account?</p>
          <Link to="/signup" className={styles.signupLink}>
            Sign up
          </Link>
        </div>

        <p className={styles.legal}>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className={styles.legalLink}>
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className={styles.legalLink}>
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </section>
    </main>
  );
};

export default Login;
