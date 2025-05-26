import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router";
import NavBar from "../Navbar/NavBar";
import DashboardOverview from "../Dashboard/DashboardOverview";
import History from "../../Components/Pages/History";
import Calendar from "../../Components/Pages/Calendar";
import Appointments from "../../Components/Pages/Appointments";
import Statitcs from "../../Components/Pages/Statitcs";
import Chat from "../../Components/Pages/Chat";
import Support from "../../Components/Pages/Support";
const AppRouter = () => {
  const appRouter = createHashRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { path: "/", index: true, element: <DashboardOverview /> },
        { path: "/history", element: <History /> },
        { path: "/calendar", element: <Calendar /> },
        { path: "/appointments", element: <Appointments /> },
        { path: "/statics", element: <Statitcs /> },
        { path: "/chat", element: <Chat /> },
        { path: "/support", element: <Support /> },
      ],
    },
    {
      path: "*",
      element: <Error code={404} msg={"Unexpected Application error!"} />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default AppRouter;
