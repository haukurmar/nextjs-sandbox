// fetch users
import { User } from "../models";

export const fetchUsers = async (): Promise<User[]> => {
	const response = await fetch("https://6544eae55a0b4b04436d346e.mockapi.io/users");
	// set timeout to simulate network latency
	await new Promise((resolve) => setTimeout(resolve, 3000));

	return (await response.json()) as User[];
};
