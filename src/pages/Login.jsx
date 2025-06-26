import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Send to server via fetch/axios here
  };

  return (
    <div className="lg:py-32 py-12 flex items-center justify-center">
      <div className="card lg:w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-thin uppercase text-center mb-4">
            Login Your Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control mt-4">
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control mt-4">
              <button type="submit" className="btn btn-warning w-full">
                Login
              </button>
            </div>
          </form>
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
