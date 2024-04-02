"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function ErrorPage({ error }: { error: Error & { digest?: string } }) {
	useEffect(() => {
		console.log("Error:", error);

		// Log the error to Sentry
		Sentry.captureException(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
		</div>
	);
}
