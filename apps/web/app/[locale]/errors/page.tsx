import { unstable_noStore as noStore } from "next/cache";

export default function HomePage() {
	noStore();
	return (
		<main>
			<h2>Errors</h2>
		</main>
	);
}
