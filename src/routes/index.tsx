// import libs
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
  } from "react-router-dom";
// import components
import Layout from "../design/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Page from "../pages/Page";
import Products from "../pages/Products";
import Customers from "../pages/Customers";
import Followers from "../pages/Followers";
import Services from "../pages/Services";
import PurchaseOrder from "../pages/PurchaseOrder";
import Messages from "../pages/Messages";
import LayoutPage from "../design/LayoutPage";
import HomePage from "../pages/Page/CompanyPage";
import ProductPage from "../pages/Page/ProductPage";
import SchedulingPage from "../pages/Page/SchedulingPage";

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

    
    // {
    //   path: "/",
    //   element: <PrivateRoute><LayoutPage /> </PrivateRoute>,
    //   children: [
    //     {
    //       path: "/",
    //       element: <HomePage />,
    //     },
    //     {
    //       path: "/",
    //       element: <ProductPage />,
    //     },
    //     {
    //       path: "/",
    //       element: <SchedulingPage />,
    //     },
    //   ],
    // },


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