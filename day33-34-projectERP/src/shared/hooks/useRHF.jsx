import { useForm } from "react-hook-form";

export let useRHF = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  return {
    register,
    handleSubmit,
    reset,
    errors,
  };
};
