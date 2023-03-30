// import libs
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
  } from "react-router-dom";

// import components
import LayoutBase from "../design/LayoutBase";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Charts from "../pages/Charts";
import Products from "../pages/Products";
import Customers from "../pages/Customers";
import Followers from "../pages/Followers";
import Services from "../pages/Services";
import PurchaseOrder from "../pages/PurchaseOrder";
import Messages from "../pages/Messages";

import CompanyPage from "../pages/SMPage/CompanyPage";
import ProductPage from "../pages/SMPage/ProductPage";
import SchedulingPage from "../pages/SMPage/SchedulingPage";
import ViewProduct from "../pages/Product/ViewProduct";
import NewProduct from "../pages/Product/NewProduct";
import EditProduct from "../pages/Product/EditProduct";


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
      element: <PrivateRoute><LayoutBase /></PrivateRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/charts",
          element: <Charts />,
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
        // { // bug de renderização
        //   path: "/companyPage",
        //   element: <CompanyPage />,
        // },
        {
          path: "/productPage",
          element: <ProductPage />,
        },
        {
          path: "/schedulingPage",
          element: <SchedulingPage />,
        },
        {
          path: "/viewProduct",
          element: <ViewProduct />,
        },
        {
          path: "/newProduct",
          element: <NewProduct />,
        },{
          path: "/editProduct",
          element: <EditProduct />,
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