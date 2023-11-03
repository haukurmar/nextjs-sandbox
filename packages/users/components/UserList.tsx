import { ReactNode } from "react";

type UserListProps = {
	children?: ReactNode;
};

const UserList = (props: UserListProps) => {
	return <div>Users</div>;
};

export { UserList };
export type { UserListProps };
