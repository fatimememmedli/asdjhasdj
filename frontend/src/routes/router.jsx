import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist/Wishlist";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "wishlist",
      element: <Wishlist/>,
    },
  ]);
  export default router