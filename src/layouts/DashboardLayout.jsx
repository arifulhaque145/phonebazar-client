import { Outlet } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <div className="drawer-side">
        <Sidebar />
      </div>
    </div>
  );
}
