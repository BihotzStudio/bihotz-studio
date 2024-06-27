import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  locales: ["en", "ca", "es"],

  // Default locale if no match
  defaultLocale: "es",
});

export default middleware;

export const config = {
  matcher: ["/", "/(ca|es|en)/:page*"],
};
