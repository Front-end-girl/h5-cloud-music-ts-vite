import Login from "../containers/User/Login";
import BlankLayout from "../layouts/BlankLayout";

import { RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";

const routes: RouteConfig[] = [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/user",
        component: BlankLayout, //userLayout
        routes: [
          {
            path: "/user/login",
            exact: true, //精确匹配
            key: "login",
            component: Login,
          },
        ],
      },
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={'/user/login'} />
      },
    ],
  },
];

export default routes;
