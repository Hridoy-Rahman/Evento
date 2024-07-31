import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleLogin from "./GoogleLogin";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      setError("Email already exists");
      return;
    }

    // Register user
    registerUser(email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userObject = { email, name };
        users.push(userObject);
        localStorage.setItem("users", JSON.stringify(users));

        if (location.state && location.state.from) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="mb-12">
      <div className="p-6 lg:p-12 flex flex-col items-center">
        <div className="bg-banner-gradient card flex-shrink-0 w-full max-w-sm shadow-2xl p-10 rounded-2xl">
          <div className="card-body">
            <h1 className="text-5xl text-purple-800 font-bold mb-8 text-center">
              Sign Up
            </h1>
            <form onSubmit={handleSignup}>
              <div className="flex flex-col items-center">
                <div className="form-control mb-4">
                  <label className="label pe-4">
                    <span className="label-text">Name</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border-none rounded ps-2"
                    required
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label pe-4">
                    <span className="label-text">Email</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="border-none rounded ps-2"
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
                      className="input input-bordered rounded ps-2"
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
                <div className="form-control mb-4 ps-6">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="input input-bordered rounded ps-2"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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

                <a href="" className="text-purple-800">
                  Forgot Password?
                </a>
                <div className="form-control mt-6">
                  <button
                    className="bg-purple-700 px-8 py-2 text-xl text-white font-semibold rounded-lg"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center my-4">
              Already Have An Account?{" "}
              <Link className="text-purple-800 font-bold" to="/login">
                Login
              </Link>
            </p>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
