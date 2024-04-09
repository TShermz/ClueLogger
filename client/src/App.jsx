import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";

import ClueLog from "./components/Log/ClueLog.jsx";
import { createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http.js";
import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/Home.jsx";
import ErrorPage from "./pages/Error.jsx";
import Authentication from "./pages/Authentication.jsx";
import { logout } from "./util/auth.js";
import { tokenLoader, checkAuthLoader } from "./util/token.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "mylog", element: <ClueLog /> },
      { path: "auth", element: <Authentication /> },
      { path: "logout", action: logout },
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
