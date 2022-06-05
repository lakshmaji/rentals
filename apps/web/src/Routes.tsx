import { RouteObject, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home";
import NoMatch from "./pages/no-match";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";


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
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];
  const element = useRoutes(routes);
  return element;
};

export default Routes;
