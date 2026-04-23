import React from "react";
import styles from "../css/Button.module.css";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  leftIcon = null,
  className = "",
  ...props
}) => {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button
      type={type}
      className={`${styles.button} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {leftIcon ? <span className={styles.icon}>{leftIcon}</span> : null}
      <span className={styles.label}>{children}</span>
    </button>
  );
};

export default Button;
