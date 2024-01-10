/**
 * An array of routes that are accessible to public
 * these routes do not req auth
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
];


/**
 * An array of routes that are used for authentication
 * these routes redirect users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register"
];

/**
 * the prefix for Api auth routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * the default redirect path after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
