import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    updateUserProfile(name, photoURL)
      .then(() => {
        // Profile updated!
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  return (
    <div className=" flex items-center justify-center h-screen ">
      <div className="card bg-gray-100 w-full max-w-md mx-auto p-8 shadow-2xl border border-gray-300 rounded- ">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-gray-500">Update Your Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="your name"
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Upload Photo</span>
            </label>
            <input
              type="text"
              {...register("photoURL")}
              placeholder="photoURL"
              className="input input-bordered bg-white"
              required
            />

            {/* for uploading images (backend) */}
            {/* <input type="file" className="file-input w-full max-w-xs bg-white text-black" /> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green3 hover:bg-green2 text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
