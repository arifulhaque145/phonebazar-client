import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { logoutUser } from "../../hooks/useFirebaseAuth";

export default function Navbar() {
  const { state } = useAuth();
  const user = state?.user;

  return (
    <div className="bg-gray-900">
      <div className="navbar md:w-2/3 md:mx-auto shadow-md p-4">
        <div className="flex-1">
          <Link to="/" className="text-white text-xl font-semibold uppercase">
            PhoneBazar
          </Link>
        </div>

        <div className="hidden lg:flex gap-2">
          <Link
            to="/"
            className="btn btn-ghost dark:hover:bg-white dark:hover:text-slate-800 text-white"
          >
            Home
          </Link>
          <Link
            to="/phones"
            className="btn btn-ghost dark:hover:bg-white dark:hover:text-slate-800 text-white hover:text-black"
          >
            Products
          </Link>
          {!user ? (
            <>
              <Link
                to="/login"
                className="btn btn-ghost dark:hover:bg-white dark:hover:text-slate-800 text-white"
              >
                Login
              </Link>
              <Link to="/register" className="btn btn-ghost">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="btn btn-ghost dark:hover:bg-white dark:hover:text-slate-800 text-white hover:text-black"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logoutUser();
                }}
                className="btn btn-ghost dark:hover:bg-white dark:hover:text-slate-800 btn-outline text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>

        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/phones">Products</Link>
              </li>
              {!user ? (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        logoutUser();
                      }}
                      className="btn btn-ghost w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
