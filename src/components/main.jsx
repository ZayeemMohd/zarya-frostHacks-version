import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store.js";
import Login from "../pages/Login";
import Protected from "./AuthLayout";
import Signup from "../pages/Signup";
import AllProfiles from "../pages/AllProfiles";
import AddProfile from "../pages/AddProfile";
import EditProfile from "../pages/EditProfile";
import Profile from "../pages/Profile";
import Home from "../pages/Home.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import WhyZarya from "../pages/WhyZarya.jsx";
import completedProfiles from "../pages/completedProfiles.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/aboutus",
      //   element: (
      //     <Protected authentication={false}>
      //       <AboutUs />
      //     </Protected>
      //   ),
      // },
      // {
      //   path: "/whyzarya",
      //   element: (
      //     <Protected authentication={false}>
      //       <WhyZarya />
      //     </Protected>
      //   ),
      // },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },
      {
        path: "/completedProfiles",
        element: (
          <Protected authentication={true}>
            <completedProfiles />
          </Protected>
        ),
      },
      {
        path: "/all-profiles",
        element: (
          <Protected authentication={true}>
            <AllProfiles />
          </Protected>
        ),
      },
      {
        path: "/add-profile",
        element: (
          <Protected authentication={true}>
            <AddProfile />
          </Protected>
        ),
      },
      {
        path: "/edit-profile/:slug",
        element: (
          <Protected authentication={true}>
            <EditProfile />
          </Protected>
        ),
      },
      {
        path: "/profile/:slug",
        element: (
          <Protected authentication={true}>
            <Profile />
          </Protected>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
