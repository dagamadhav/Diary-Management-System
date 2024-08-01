import React, { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, login } = useContext(AuthContext);

  // redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        // signed up
        const user = result.user;
        alert("Your account has been created successfully.");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="bg-gradient-to-r from-green3 to-teal-100 py-24 ">
      <div className="max-w-md bg-white shadow mx-auto flex items-center justify-center my-20 border border-gray-300 rounded-lg">
        <div
          className="modal-action flex flex-col justify-center bg-gray-200 border border-gray-300 rounded-lg mt-0"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body rounded"
            method="dialog"
          >
            <h3 className="font-bold text-lg text-black">Create A Account!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white"
                {...register("email")}
              />
            </div>

            {/* passwords */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white"
                {...register("password")}
              />
              <label className="label mt-1">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-black"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            {/* error */}

            {/* login btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Signup"
                className="btn bg-green3 hover:bg-green2 text-white"
              />
            </div>

            <p className="text-center my-2 text-black">
              Have an account?{" "}
              <button
                className="underline text-red ml-1"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Login
              </button>{" "}
            </p>

            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-gray-200"
            >
              ✕
            </Link>
          </form>

          {/* social signin */}
          {/* <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle bg-white hover:bg-green text-black hover:text-white">
              <FaGoogle />
            </button>
            <button className="btn btn-circle bg-white hover:bg-green text-black hover:text-white">
              <FaFacebookF />
            </button>
          </div> */}
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Signup;
