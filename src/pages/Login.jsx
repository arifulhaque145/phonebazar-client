import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../components/shared/GoogleLogin";
import { loginUser } from "../hooks/useFirebaseAuth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");

  const onSubmit = async ({ email, password }) => {
    try {
      const userCredential = await loginUser(email, password);
      console.log("User logged in:", userCredential?.user);
      setFirebaseError("");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      setFirebaseError("Invalid email or password");
    }
  };

  return (
    <div className="lg:py-32 py-12 flex items-center justify-center">
      <div className="card lg:w-1/3 bg-slate-900 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-thin uppercase text-center mb-4">
            Login Your Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-error">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control mt-4">
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-error">{errors.password.message}</p>
              )}
            </div>

            <div className="form-control mt-4">
              <button
                type="submit"
                className="btn bg-slate-600 hover:bg-slate-700 hover:text-slate-300 w-full"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
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
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
