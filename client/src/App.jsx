import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./util/http.js";
import RootLayout from "./pages/Root.jsx";
import Protected from "./pages/Protected.jsx";
import HomePage from "./pages/HomePage.jsx";
import MyLogs from "./pages/MyLogsPage.jsx";
import MyBroadcastsPage from "./pages/MyBroadcastsPage.jsx";
import EditCommonsPage from "./pages/EditCommonsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Authentication from "./pages/AuthenticationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "mylogs",
        element: (
          <Protected>
            <MyLogs />
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
      {
        path: 'mybroadcasts', 
        children:[
        {
          index: true, 
          element: <Protected><MyBroadcastsPage /></Protected>
        },

      ]},
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
