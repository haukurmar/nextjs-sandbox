import Link from "next/link";
import { initTranslations, TranslationsProvider } from "@app/locale";
import { Greetings } from "../../components";

const i18nNamespaces = ["common", "home"];

export default async function HomePage({ params: { locale } }): Promise<JSX.Element> {
	const { t, resources } = await initTranslations(locale, i18nNamespaces, null, null);
	return (
		<TranslationsProvider locale={locale} namespaces={i18nNamespaces} resources={resources}>
			<main>
				<Greetings />
				<nav>
					<ul>
						<li>
							<Link href={"/"}>{t("dashboard")}</Link>
						</li>
						<li>
							<Link href={"/users"}>{t("users")}</Link>
						</li>
					</ul>
				</nav>
			</main>
		</TranslationsProvider>
	);
}
