import WelcomePage from "../Pages/WelcomePage/WelcomePage.tsx";
import {AppRoutes, RoutePaths} from "../Config/routeConfig.ts";
import { Route, Routes, RouteProps } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage.tsx";
import PatientPage from "../Pages/PatientPage/PatientPage.tsx";
import DoctorPage from "../Pages/DoctorPage/DoctorPage.tsx";

const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <WelcomePage/>
  },
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
  [AppRoutes.PATIENT]: {
    path: RoutePaths.patient,
    element: <PatientPage />,
  },
  [AppRoutes.DOCTOR]: {
    path: RoutePaths.doctor,
    element: <DoctorPage />
  }
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