import { UserList } from "@app/users";
import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

export default function HomePage() {
	noStore();
	return (
		<main>
			<h2>Users</h2>
			<Suspense fallback={"Loading users..."}>
				{/* @ts-expect-error Server Component */}
				<UserList />
			</Suspense>
		</main>
	);
}
