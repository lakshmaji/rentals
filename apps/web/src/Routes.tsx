import { RouteObject, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home";
import NoMatch from "./pages/no-match";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ApartmentsContainer from "./components/apartment/Apartments";
import ApartmentDetail from "./pages/apartment-detail";
import Apartments from "./pages/apartments";
import RequireAuth from "./auth/RequireAuth";
import Lock from "./pages/lock";
import Accounts from "./pages/accounts";
import Profile from "./pages/profile";
import Activity from "./pages/activity";
import Account from "./components/account/Account";

const Routes = () => {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/apartments",
          element: <Apartments />,
          children: [
            { index: true, element: <ApartmentsContainer /> },
            {
              path: "/apartments/:id",
              element: (
                <RequireAuth>
                  <ApartmentDetail />
                </RequireAuth>
              ),
            },
          ],
        },
        {
          path: "/account",
          element: (
            <RequireAuth>
              <Accounts />
            </RequireAuth>
          ),
          children: [
            {
              index: true,
              element: <Account />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "activity",
              element: <Activity />,
            },
          ],
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
    {
      path: "lock",
      element: <Lock />,
    },
  ];
  const element = useRoutes(routes);
  return element;
};

export default Routes;
