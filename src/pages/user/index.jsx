import { createBrowserRouter } from "react-router-dom";
import UserPortalLayout from "./layout";
import Dashboard from "./dashboard";
import Policies from "./add/Policies";
import Claims from "./Claims";

import Payments from "./Paymentsayments";
import Profile from "./Profile";
import Support from "./Supportupport";
import Notifications from "./Notifications";
import Add from "./add";

export const userPortalRoutes = createBrowserRouter([
  {
    path: "/",
    element: <UserPortalLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "policies", element: <Policies /> },
      { path: "policies/all", element: <Policies /> },
      { path: "add", element: <Add /> },
      { path: "claims", element: <Claims /> },
      { path: "claims/new", element: <Claims /> },
      { path: "claim/status", element: <Claims /> },
      { path: "payments", element: <Payments /> },
      { path: "profile", element: <Profile /> },
      { path: "support", element: <Support /> },
      { path: "notifications", element: <Notifications /> },
    ]
  }
]);