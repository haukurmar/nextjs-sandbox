import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "sv", "is"];

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	return {
		// Not sure why it doesn't work to add my own "common" object that I would import from assets package
		// and not use messages = needs more research.
		messages: (await import(`./locales/${locale}/messages.json`)).default,
	};
});
