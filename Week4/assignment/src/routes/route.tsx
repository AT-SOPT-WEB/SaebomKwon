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
        path: routePath.HOME,
        element: <Navigate to={routePath.LOGIN} replace />,
      },
      { path: routePath.LOGIN, element: <LoginPage /> },
      { path: routePath.SIGNUP, element: <SignupPage /> },
      { path: routePath.MYPAGE_INFO, element: <InfoPage /> },
      { path: routePath.MYPAGE_SEARCH, element: <SearchPage /> },
    ],
  },
];

export default route;
