import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Profile from "./Profile";
import NeedHelp from "./Needhelp";
import LoginSignup from "./LoginSignup";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const [userA, setUserA] = useState(false);

  const appRoute = createBrowserRouter([
    {
      path: '/',
      element: userA ? <Browse /> : <LoginSignup />,
    },

    {
      path: '/browse',
      element: userA ? <Browse /> : <LoginSignup />,
    },

    {
      path: '/profile',
      element: userA ? <Profile /> : <LoginSignup />,
    },

    {
      path: "*",
      element: <NeedHelp />
    },

  ]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        setUserA(true);
      }
      else {
        dispatch(removeUser());
        setUserA(false);
      }
    });

    return() => {
      unsubscribe();
  };

  }, [dispatch]);



  return (
    <RouterProvider router={appRoute} />
  );
};

export default Body;