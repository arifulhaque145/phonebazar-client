import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../components/shared/GoogleLogin";
import { registerUser, usePostSingleUserData } from "../hooks/useFirebaseAuth";

export default function Register() {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const { mutate: postUser } = usePostSingleUserData();

  const onSubmit = async ({ name, email, password }) => {
    try {
      await registerUser(name, email, password);
      postUser({ name, email, password });
      setFirebaseError("");
      navigate("/"); // redirect after registration
    } catch (err) {
      setFirebaseError(err.message);
    }
  };

  return (
    <div className="lg:py-32 py-12 flex items-center justify-center">
      <div className="card lg:w-1/3 bg-slate-900 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-thin uppercase text-center mb-4">
            Register Now
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="text"
                name="name"
                className="input input-bordered"
                placeholder="your name"
                {...register("name", { required: "Name is required" })}
                // required
              />
              {errors.name && (
                <p className="text-error">{errors.name.message}</p>
              )}
            </div>

            <div className="form-control mt-4">
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="you@example.com"
                {...register("email", { required: "Email is required" })}
                // required
              />
              {errors.email && (
                <p className="text-error">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control mt-4">
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="••••••••"
                {...register("password", { required: "Password is required" })}
                // required
              />
              {errors.password && (
                <p className="text-error">{errors.password.message}</p>
              )}
            </div>

            <div className="form-control mt-4">
              <button type="submit" className="btn btn-warning w-full">
                {isLoading ? "Loading..." : "Register"}
              </button>
            </div>

            {firebaseError && (
              <p className="text-error mt-2">{firebaseError}</p>
            )}
          </form>
          <div className="divider">OR</div>

          {/* Google Button */}
          <GoogleLogin />

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-warning hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
