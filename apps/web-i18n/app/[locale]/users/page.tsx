import { UserList } from "@app/users";
import { Suspense } from "react";

export default function HomePage() {
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
