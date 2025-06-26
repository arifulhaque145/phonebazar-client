import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function MainLayout() {
  return (
    <div className="bg-slate-800">
      <Navbar />
      <div className="md:w-2/3 md:mx-auto bg-slate-700 p-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
