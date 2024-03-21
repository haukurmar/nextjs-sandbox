"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export const LanguageChanger = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const localActive = useLocale();

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = e.target.value;
		startTransition(() => {
			router.replace(`/${nextLocale}`);
		});
	};
	return (
		<label className="border-2 rounded">
			<p className="sr-only">Change language</p>
			<select
				defaultValue={localActive}
				className="bg-transparent py-2"
				onChange={onSelectChange}
				disabled={isPending}
			>
				<option value="en">English</option>
				<option value="sv">Swedish</option>
				<option value="is">Icelandic</option>
			</select>
		</label>
	);
};
