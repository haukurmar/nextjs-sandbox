"use client";

import { useTranslation } from "@app/locale-i18n";

type GreetingsProps = {};

const Greetings = (props: GreetingsProps) => {
	const { t } = useTranslation(["home"]);
	return (
		<div>
			<h1>{t("home:welcomeUser", { user: "Haukur" })}</h1>
		</div>
	);
};

export { Greetings };
export type { GreetingsProps };
