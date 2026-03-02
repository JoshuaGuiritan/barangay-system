import { createBrowserRouter } from "react-router-dom";
import Login from "../features/login/Login";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <DashboardLayout /> },
]);
