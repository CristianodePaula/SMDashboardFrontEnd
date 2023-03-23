import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
  } from "react-router-dom";

import Layout from "../layout";
import Home from "../pages/Home";
import Login from "../pages/Login";


const Routes = () => {

    const currentUser = true;

    const PrivateRoute = ({ children } : { children: any }) => {
      if (!currentUser) {
        return <Navigate to="/login" />;
      }
  
      return children;
    };
    
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute><Layout /> </PrivateRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />
    },
])
  
    return (
      <div className="App">
        <RouterProvider router={routers} />   
      </div>
    )
  }

  
export default Routes
