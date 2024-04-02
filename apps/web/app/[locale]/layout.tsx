import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { NavigationItem, Scaffold } from "@app/layout";
import "../globals.css";
import { ExclamationCircleIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import { dir, i18nConfig, i18nNamespaces, initTranslations, TranslationsProvider } from "@app/locale-i18n";

export const metadata: Metadata = {
	title: "Next.Js Sandbox",
	description: "",
};

const navigation: NavigationItem[] = [
	{ name: "Dashboard", href: "/", icon: <HomeIcon /> },
	{ name: "Users", href: "/users", icon: <UsersIcon /> },
	{ name: "Errors", href: "/errors", icon: <ExclamationCircleIcon /> },
];

export function generateStaticParams() {
	return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }): Promise<JSX.Element> {
	const { t, resources } = await initTranslations(locale, i18nNamespaces, null, null);
	return (
		<html lang={locale} dir={dir(locale)} className="h-full bg-white">
			<body className={`${GeistSans.className} h-full`}>
				<TranslationsProvider locale={locale} namespaces={i18nNamespaces} resources={resources}>
					<Scaffold navigationItems={navigation}>{children}</Scaffold>
				</TranslationsProvider>
			</body>
		</html>
	);
}
