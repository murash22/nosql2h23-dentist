import WelcomePage from "../Pages/WelcomePage/WelcomePage.tsx";
import {AppRoutes, RoutePaths} from "../Config/routeConfig.ts";
import { Route, Routes, RouteProps } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage.tsx";

const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.WELCOME]: {
    path: RoutePaths.welcome,
    element: <WelcomePage />,
  },
  // [AppRoutes.REGISTER]: {
  //   path: RoutePaths.register,
  //   element: <>Register page</>,
  // },
  [AppRoutes.LOGIN]: {
    path: RoutePaths.login,
    element: <LoginPage />,
  },
  // [AppRoutes.FEED]: {
  //   path: RoutePaths.feed,
  //   element: <>Feed</>,
  // },
  // [AppRoutes.POST]: {
  //   path: RoutePaths.post,
  //   element: <>Post page</>,
  // },
  // [AppRoutes.NOT_FOUND]: {
  //   path: RoutePaths.notFound,
  //   element: <>404 not found</>,
  // },
};

export default function AppRouter() {
  return (
    <Routes>
      {Object.values(routes).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}