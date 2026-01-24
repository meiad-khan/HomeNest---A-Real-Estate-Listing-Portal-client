import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AllProperties from "../Pages/AllProperties";
import AddProperties from "../Pages/AddProperties";
import MyProperties from "../Pages/MyProperties";
import MyRatings from "../Pages/MyRatings";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: 'all-properties',
        element: <AllProperties></AllProperties>
      },
      {
        path: 'add-properties',
        element: <AddProperties></AddProperties>
      },
      {
        path: 'my-properties',
        element: <MyProperties></MyProperties>
      },
      {
        path: 'my-ratings',
        element: <MyRatings></MyRatings>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  }
])
export default router;