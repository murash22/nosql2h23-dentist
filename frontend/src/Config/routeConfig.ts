// Перечисление роутов
export enum AppRoutes {
  WELCOME = "welcome",
  // REGISTER = "register",
  LOGIN = "login",
  PATIENT = "patient",
  DOCTOR = "doctor"
  // FEED = "feed",
  // POST = "post",
  // NOT_FOUND = "notFound",
}

// Перечисление параметров предлагаю
// использовать чтобы не хардкодить шаблонную строку,
// а так же ссылаться на RoutePaths и c помощью
// метода replace менять на параметр сущности.
// Пример:
// RoutePaths.user.replace(RouteParams.USERNAME, username)
export enum RouteParams {
  POST_ID = ":id",
  USERNAME = ":username",
}

export const RoutePaths: Record<AppRoutes, string> = {
  // Будем отрисовывать профиль в зависимости от параметра.
  // Если на беке не найдётся юзер, то кинем на 404.
  [AppRoutes.WELCOME]: '/' + AppRoutes.WELCOME,
  // [AppRoutes.REGISTER]: "/register",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.PATIENT]: "/patient",
  [AppRoutes.DOCTOR]: "/doctor"
  // [AppRoutes.FEED]: "/feed",
  // [AppRoutes.POST]: "/post/" + RouteParams.POST_ID,
  // [AppRoutes.NOT_FOUND]: "*",
};