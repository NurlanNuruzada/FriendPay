import { MainLayout } from "../Layouts/MainLayout";
import { useRoutes } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage/PrivacyPolicyPage";
export default function Routes() {
  let routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <PrivacyPolicyPage />
        },
      ],
    },
  ];
  return useRoutes(routes);
}
