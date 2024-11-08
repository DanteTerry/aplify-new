/**
 * An array of route that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/", "/new-verification"];

/**
 * An array of route that are are used for authentication.
 * These routes will redirect logged in user to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/login",
  "/register",
  "/error",
  "/reset",
  "/new-password",
];

/**
 *The prefix for API authentication routes
 *Routes that start with this prefix are used for API authentication process
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 *The default redirect path aftrer logging in successfully
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
