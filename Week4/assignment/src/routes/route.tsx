import { Navigate } from "react-router-dom";

import routePath from "@/routes/routePath";
import Layout from "@/components/layout";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import InfoPage from "@/pages/InfoPage";
import SearchPage from "@/pages/SearchPage";

const route = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: routePath.HOME.slice(1),
        element: <Navigate to={routePath.LOGIN} replace />,
      },
      { path: routePath.LOGIN.slice(1), element: <LoginPage /> },
      { path: routePath.SIGNUP.slice(1), element: <SignupPage /> },
      { path: routePath.MYPAGE_INFO.slice(1), element: <InfoPage /> },
      { path: routePath.MYPAGE_SEARCH.slice(1), element: <SearchPage /> },
    ],
  },
];

export default route;
