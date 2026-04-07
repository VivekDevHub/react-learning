import { Link, useNavigate } from 'react-router';
import Brand from '../components/Brand';
import InputField from '../components/InputField';
import PasswordStrength from '../components/PasswordStrength';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { showErrorToast } from '../lib/toastUtil';
import { load, save } from "../lib/LocalStorage";
import { useUserData } from '../context/AuthContext';

function Register() {

  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    setPasswordType((prev) => (prev === 'password' ? 'text' : 'password'));
  }

  let navigate = useNavigate();

  const { register, handleSubmit, reset, watch } = useForm({
    mode: 'onChange'
  });

  const { setUser } = useUserData();

  const sanitizeUser = ({ name, email, password }) => {
    return {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    }
  }

  const submitFunc = (data) => {
    let emptyChk = Object.keys(data).some(key => data[key].trim() === "");
    console.log(emptyChk)
    if (emptyChk) {
      showErrorToast("Fill all fields")
      return;
    }

    let CurrentUserData = sanitizeUser(data);

    if (CurrentUserData.password != data.confPass.trim()) {
      showErrorToast("Passwords do not Match")
      return;
    }

    let users = load("users");

    for (let i = 0; i < users.length; i++) {
      if (users[i].email == CurrentUserData.email) {
        showErrorToast("User Already exits");
        return;
      }
    }
    
    save("users", [...users, CurrentUserData]);
    save("logUser", CurrentUserData);
    setUser(CurrentUserData)
    navigate("/");
    reset();
  }

  const passwordValue = watch('password', '');

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center p-6">
      <div className="w-full max-w-md animate-scale-in">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="scale-90 origin-center">
            <Brand />
          </div>
        </div>

        <div className="auth-card">
          <h2 className="font-heading font-bold text-2xl mb-1">Create account</h2>
          <p className="text-white/40 text-sm font-body mb-8">
            Join SkyMart and start shopping
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(submitFunc)}>
            <InputField type="text" name="name" placeholder="Full name" {...register("name")} />
            <InputField type="email" name="email" placeholder="Email address" {...register("email")} />
            <div>
              <InputField
                type={passwordType}
                name="password"
                placeholder="Password (min 6 chars)"
                trailingIcon
                changeFunc={togglePassword}
                {...register("password")}
              />
              <PasswordStrength value={passwordValue} />
            </div>
            <InputField
              type={passwordType}
              name="confirm"
              placeholder="Confirm password"
              {...register("confPass")}
            />

            <button
              type="submit"
              className="btn-volt w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-heading font-bold"
            >
              Create Account <i className="ri-arrow-right-line text-lg"></i>
            </button>
          </form>

          <p className="text-center text-white/30 text-sm font-body mt-6">
            Already have an account?{' '}
            <Link
              className="text-volt hover:text-volt-light font-semibold transition-colors"
              to="/login"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register