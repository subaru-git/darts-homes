import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./config";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: "ja",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
