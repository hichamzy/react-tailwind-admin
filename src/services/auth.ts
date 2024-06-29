import { SignUpSchemaType } from "@/schemas/auth";

export async function login(data: SignUpSchemaType) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (data.email === "admin@admin.com" && data.password === "admin") {
				resolve({
					token: "1234567890",
					user: {
						id: 1,
						name: "Admin",
						email: "admin@admin.com",
					},
				});
			} else {
				reject(new Error("Invalid email or password"));
			}
		}, 3000);
	});
}
