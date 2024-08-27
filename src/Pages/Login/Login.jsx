import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (location.state && location.state.from) {
          navigate(from,{replace : true});
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Incorrect email or password");
      });
  };

  return (
    <div className="mb-12">
      <div className="p-6 lg:p-12 flex flex-col items-center">
        <div className="bg-gray-200 card flex-shrink-0 w-full max-w-sm shadow-2xl p-10 rounded-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold mb-8 text-center text-purple-800">
              Login
            </h1>
            <form onSubmit={handleLogIn} className="flex flex-col items-center">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text pe-4">Email</span>
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered ps-2 rounded"
                  required
                />
              </div>
              <div className="form-control mb-4 ps-6">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered ps-2 rounded"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="btn btn-circle btn-xs ml-2"
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <a href="#" className="text-purple-700 hover:bg-purple-400">
                Forgot password?
              </a>
              <div className="form-control mt-6">
                <button
                  className="bg-purple-700 px-8 py-2 text-xl text-white font-semibold rounded-lg"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center my-4">
              Don't Have Account?{" "}
              <Link
                className="text-purple-800 hover:bg-purple-300 font-bold"
                to="/signup"
              >
                Sign Up
              </Link>
            </p>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
