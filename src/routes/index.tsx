// import libs
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
  } from "react-router-dom";
// import components
import Layout from "../design/layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Page from "../pages/Page";
import Products from "../pages/Products";
import Customers from "../pages/Customers";
import Followers from "../pages/Followers";
import Services from "../pages/Services";
import PurchaseOrder from "../pages/PurchaseOrder";
import Messages from "../pages/Messages";

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
        {
          path: "/page",
          element: <Page />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/customers",
          element: <Customers />,
        },
        {
          path: "/followers",
          element: <Followers />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/purchaseOrder",
          element: <PurchaseOrder/>,
        },
        {
          path: "/messages",
          element: <Messages />,
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