import { Outlet } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button lg:hidden m-4"
        >
          Open Menu
        </label>
        <Navbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
