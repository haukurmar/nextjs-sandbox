import Link from "next/link";
import { i18nNamespaces, initTranslations } from "@app/locale-i18n";
import { Greetings } from "../../components";
import * as React from "react";

export default async function HomePage({ params: { locale } }): Promise<JSX.Element> {
	const { t } = await initTranslations(locale, i18nNamespaces, null, null);
	return (
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
	);
}
