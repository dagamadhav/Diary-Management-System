import React, { useContext, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  // redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password)
    login(email, password)
      .then((result) => {
        alert("Login successfull.");
        document.getElementById("my_modal_5").close()
        navigate(from, {replace: true})
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(
          "There was a problem logging in. Check your email and password or create an account."
        );
      });
  };

  // google signin
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        alert("Login successfull.");
        navigate(from, {replace: true})
      })
      .catch((error) => console.log(error));
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle ">
      <div className="modal-box bg-gray-100">
        <div className="modal-action flex flex-col justify-center bg-gray-200 rounded mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
            method="dialog"
          >
            <h3 className="font-bold text-lg text-black">Please Login!</h3>

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
            {errorMessage ? (
              <p className="text-red text-xs ">{errorMessage}</p>
            ) : (
              ""
            )}

            {/* login btn */}
            <div className="form-control mt-4">
              <input
                type="submit"
                value="Login"
                className="btn bg-green3 hover:bg-green2 text-white"
              />
            </div>

            <p className="text-center my-2 text-black">
              Don't have an account?{" "}
              <Link to="/signup" className="underline text-red ml-1">
                Signup Now
              </Link>{" "}
            </p>

            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0  hover:bg-gray-200 text-black"
            >
              ✕
            </button>
          </form>

          {/* social signin */}
          <div className="text-center space-x-3 mb-5">
            <button
              className="btn btn-circle bg-white hover:bg-green text-black hover:text-white"
              onClick={handleLogin}
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle bg-white hover:bg-green text-black hover:text-white">
              <FaFacebookF />
            </button>
            {/* <button className="btn btn-circle bg-white hover:bg-green text-black hover:text-white">
              <FaXTwitter />
            </button> */}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
