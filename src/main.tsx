import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AssignmentsPage from "./pages/AssignmentsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AssignmentPage from "./pages/AssignmentPage";
import AppLayout from "./AppLayout";
import CreateAssignmentPage from "./pages/CreateAssignmentPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./AuthProvider";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

export interface User {
  token: string;
  username: string;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/assignments",
        element: <AssignmentsPage />,
      },
      {
        path: "/assignments/:assignmentId",
        element: <AssignmentPage />,
      },
      {
        path: "/assignments/create",
        element: <CreateAssignmentPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
