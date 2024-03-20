import { Config } from "next-i18n-router/dist/types";

export const i18nConfig: Config = {
	locales: ["en", "sv", "is"],
	defaultLocale: "en",
	prefixDefault: false, // if you want the root also to be prefixed with the default locale
	localeDetector: false,
};
