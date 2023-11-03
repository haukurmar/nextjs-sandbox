import { fetchUsers } from "../data-layer";

type UserListProps = {};

const UserList = async (props: UserListProps) => {
	const users = await fetchUsers();
	return (
		<div>
			<h2>Users</h2>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.firstName}</li>
				))}
			</ul>
		</div>
	);
};

export { UserList };
export type { UserListProps };
