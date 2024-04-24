import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./util/http.js";
import RootLayout from "./pages/Root.jsx";
import Protected from "./pages/Protected.jsx";
import HomePage from "./pages/HomePage.jsx";
import MyClueLog from "./pages/MyClueLog.jsx";
import EditCommonsPage from "./pages/EditCommonsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Authentication from "./pages/AuthenticationPage.jsx";

import { logout } from "./util/auth.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "mylog",
        element: (
          <Protected>
            <MyClueLog />
          </Protected>
        ),
      },
      {
        path: "commons/:tier/edit",
        element: (
          <Protected>
            <EditCommonsPage />
          </Protected>
        ),
      },
      // { path: "broadcast", children: [{ path: "add" }, { path: "edit" }] },
      { path: "auth", element: <Authentication /> },
      { path: "logout" },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
