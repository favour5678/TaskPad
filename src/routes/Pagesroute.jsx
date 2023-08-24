import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const route = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      }
    ]
  }
])


export default route;