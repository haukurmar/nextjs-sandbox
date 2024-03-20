import Link from "next/link";
import { initTranslations } from "@app/locale";

export default async function HomePage({ params: { locale } }): Promise<JSX.Element> {
	const { t } = await initTranslations(locale, ["common", "home"], null, null);
	return (
		<main>
			<h1>{t("home:welcomeUser", { user: "Haukur" })}</h1>

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
