import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/dashboard/AddProduct";
import ProductsTab from "../components/dashboard/ProductsTab";
import Users from "../components/dashboard/Users";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Register from "../pages/Register";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl font-thin">404 Not Found</h1>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "phones",
        element: <Products />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl font-thin">404 Not Found</h1>
      </div>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "products",
        element: <ProductsTab />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
