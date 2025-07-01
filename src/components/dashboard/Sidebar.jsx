import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
        <li>
          <Link to="/">🏠 Main Page</Link>
        </li>
        <li className="divider" />
        <li>
          <Link to="/dashboard">📊 Home</Link>
        </li>
        <li>
          <Link to="/dashboard/users">👥 Users</Link>
        </li>
        <li>
          <Link to="/dashboard/products">📦 Products</Link>
        </li>
        <li>
          <Link to="/dashboard/add-product">➕ Add Product</Link>
        </li>
      </ul>
    </div>
  );
}
