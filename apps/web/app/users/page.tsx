import { UserList } from "@noba/users";
import { Suspense } from "react";

export default function HomePage() {
	return (
		<main>
			<h2>Users</h2>
			<Suspense fallback={"Loading users..."}>
				<UserList />
			</Suspense>
		</main>
	);
}
