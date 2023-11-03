import Link from "next/link";

export default async function HomePage(): Promise<JSX.Element> {
	return (
		<main>
			<h1>Main</h1>

			<Link href={"/users"}>Users</Link>
		</main>
	);
}
