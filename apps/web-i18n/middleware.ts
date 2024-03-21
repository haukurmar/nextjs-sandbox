import { i18nRouter } from "next-i18n-router";
import { i18nConfig } from "@app/locale";

export function middleware(request) {
	return i18nRouter(request, i18nConfig);
}

// only applies this middleware to files in the app directory (skipping api, favicon, robots.txt, etc.)
export const config = {
	matcher: "/((?!api|static|.*\\..*|_next).*)",
};
