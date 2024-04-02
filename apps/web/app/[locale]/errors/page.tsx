import { unstable_noStore as noStore } from "next/cache";
import { Errors } from "@app/errors";

export default function HomePage() {
	noStore();
	return (
		<main>
			<h1 className="text-4xl font-medium">Errors</h1>
			<p>
				This is a page where we can generate errors to test our integrations with Sentry & Application Insights
			</p>
			<hr className="my-4" />
			<Errors />
		</main>
	);
}
