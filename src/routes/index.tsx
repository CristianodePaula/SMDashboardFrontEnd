// import libs
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
  } from "react-router-dom";
// import components
import Layout from "../../layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Page from "../pages/Page";
import Product from "../pages/Products";
import Services from "../pages/Services";
import Customers from "../pages/Customers";
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
          path: "/product",
          element: <Product />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/customers",
          element: <Customers />,
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