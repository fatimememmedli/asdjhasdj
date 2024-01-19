import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AddPage from "../pages/addPage/AddPage";
import Detail from "../pages/detail/Detail";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist/Wishlist";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/add",
    element: <AddPage />,
  },
  {
    path: "/products/:id",
    element: <Detail />,
  },
]);
export default router;
