import Link from "next/link";
import { initTranslations } from "@app/locale";
import { Greetings } from "../../components";
import * as React from "react";

const i18nNamespaces = ["common", "home"];

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
