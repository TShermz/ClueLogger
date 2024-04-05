import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";

import ClueLog from "./components/Log/ClueLog.jsx";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/Home.jsx";
import ErrorPage from "./pages/Error.jsx";
import Authentication, {action as authAction} from "./pages/Authentication.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { index: true, element: <HomePage />},
      { path: '/mylog', element: <ClueLog />},
      {path: '/authenticate', element: <Authentication/>, action: authAction}
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
