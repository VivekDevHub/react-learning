
const InputField = ({
  type,
  name,
  placeholder,
  changeFunc = () => {},
  trailingIcon = false,
  ...rest
}) => {
  const iconClassNames = {
    name: "ri-user-3-line",
    email: "ri-mail-line",
    password: "ri-lock-2-line",
    confirm: "ri-lock-2-line",
  };
  const leadingIconClass = iconClassNames[name];

  return (
    <div className="relative">
      <i
        className={`${leadingIconClass} pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px] text-white/25`}
      ></i>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="field border-solid border border-transparent focus:border-volt"
        autoComplete={type === "email" ? "email" : "current-password"}
        style={{
          paddingLeft: "2.75rem",
          paddingRight: trailingIcon ? "2.75rem" : "1rem",
        }}
        {...rest}
      />

      {trailingIcon ? (
        <button
          type="button"
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
          onClick={changeFunc}
        >
          {type == "password" ? (
            <i className="ri-eye-line text-[15px]"></i>
          ) : (
            <i className="ri-eye-off-line text-[15px]"></i>
          )}
        </button>
      ) : null}
    </div>
  );
};

export default InputField;
