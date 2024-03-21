import { Greetings } from "../../components";
import * as React from "react";
import { LanguageChanger, useTranslations } from "@app/locale-next-intl";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations({ locale });

	return {
		title: t("dashboard"),
	};
}

export default function HomePage({ params: { locale } }) {
	// If we want to use static rendering, a limitation right now with next-intl
	// The locale that you pass to unstable_setRequestLocale should be validated (e.g. in i18n.ts).
	//
	// You need to call this function in every page and every layout that you intend to enable static rendering for since Next.js can render layouts and pages independently.
	//
	// E.g. when you navigate from /settings/profile to /settings/privacy,
	// the /settings segment might not re-render as part of the request.
	// Due to this, it's important that unstable_setRequestLocale is called not only in the parent settings/layout.tsx,
	// but also in the individual pages profile/page.tsx and privacy/page.tsx.
	setRequestLocale(locale);
	const t = useTranslations();
	return (
		<main>
			<Greetings />
			<nav>
				<ul>
					<li>
						<Link href={"/"} locale={locale}>
							{t("dashboard")}
						</Link>
					</li>
					<li>
						<Link href={"/users"} locale={locale}>
							{t("users")}
						</Link>
					</li>
				</ul>
			</nav>
			<LanguageChanger />
		</main>
	);
}
