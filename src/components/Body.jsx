import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Profile from "./Profile";
import NeedHelp from "./Needhelp";
import LoginSignup from "./LoginSignup";

const Body = () => {

  const appRoute = createBrowserRouter([
    {
      path: '/',
      element: <LoginSignup />,
    },

    {
      path: '/browse',
      element: <Browse />
    },

    {
      path: '/profile',
      element: <Profile />,
    },

    {
      path: "*",
      element: <NeedHelp />
    },

  ]);


  return (
    <RouterProvider router={appRoute}/>
  );
};

export default Body;