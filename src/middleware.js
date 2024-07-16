import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  locales: ["en", "ca", "es"],
  defaultLocale: "es",
});

export default middleware;

export const config = {
  matcher: ["/", "/(ca|es|en)/:page*"],
};
