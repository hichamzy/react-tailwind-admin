import axios from "axios";
import { queryOptions } from "@tanstack/react-query";

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
};

export function fetchUsers() {
	return queryOptions({
		queryKey: ["users"],
		queryFn: async () => {
			const response = await axios.get<User[]>(
				"https://jsonplaceholder.typicode.com/users"
			);
			return response.data;
		},
	});
}
