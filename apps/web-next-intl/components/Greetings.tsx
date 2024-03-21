"use client";

import { useTranslations } from "@app/locale-next-intl";

type GreetingsProps = {};

const Greetings = (props: GreetingsProps) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("welcomeUser", { user: "Haukur" })}</h1>
		</div>
	);
};

export { Greetings };
export type { GreetingsProps };
