import { Link, useNavigate } from 'react-router';
import Brand from '../components/Brand';
import HeroPanel from '../components/HeroPanel';
import InputField from '../components/InputField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { load, save } from '../lib/LocalStorage';
import { showErrorToast, showSuccessToast } from '../lib/toastUtil';
import { useUserData } from '../context/AuthContext';

function Login() {

  const [passState, setPassState] = useState("password");

  const { register, handleSubmit, reset } = useForm();

  let navigate = useNavigate();

  const { setUser } = useUserData();

  const submitHandler = (data) => {

    let users = load("users");
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == data.email && users[i].password == data.password) {
        showSuccessToast("user logged in SuccessFully");
        save("logUser", users[i]);
        setUser(users[i]);
        navigate("/");
        return;
      }
    }

    showErrorToast('Email or Password incorrect');
    reset();
  }

  const changeFunc = () => {
    setPassState(prev => prev == "password" ? "text" : "password");
  }

  return (
    <div className="min-h-screen bg-ink flex">
      <div className="hidden lg:flex flex-col w-1/2 bg-[#111] border-r border-white/80 p-12 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-volt-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-volt-05 rounded-full blur-3xl pointer-events-none"></div>
        <Brand />
        <HeroPanel />
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md animate-scale-in">
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="scale-90 origin-center">
              <Brand />
            </div>
          </div>

          <div className="auth-card">
            <h2 className="font-heading font-bold text-2xl mb-1">Sign in</h2>
            <p className="text-white/40 text-sm font-body mb-8">
              Enter your credentials to continue
            </p>

            <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
              <InputField type="email" name="email" placeholder="Email address" {...register("email")} />
              <InputField
                type={passState}
                name="password"
                placeholder="Password"
                trailingIcon
                changeFunc={changeFunc}
                {...register("password")}
              />

              <button
                type="submit"
                className="btn-volt w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-heading font-bold"
              >
                Sign in <i className="ri-arrow-right-line text-lg"></i>
              </button>
            </form>

            <p className="text-center text-white/30 text-sm font-body mt-6">
              Don't have an account?{' '}
              <Link
                className="text-volt hover:text-volt-light font-semibold transition-colors"
                to="/register"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login