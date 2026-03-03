import { createBrowserRouter } from "react-router-dom";
import Login from "../features/login/LoginPage";
import DashboardLayout from "../layout/DashboardLayout";
import HomePage from "../features/home/HomePage";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
