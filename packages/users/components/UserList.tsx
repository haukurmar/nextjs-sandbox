import { fetchUsers } from "../data-layer";
import { UserCard } from "./UserCard";

type UserListProps = {};

const UserList = async (props: UserListProps) => {
	const users = await fetchUsers();
	console.log("users", users);

	return (
		<>
			<h2>Users</h2>
			<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</ul>
		</>
	);
};

export { UserList };
export type { UserListProps };
