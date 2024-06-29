import { z } from "zod";

export const SignUpSchema = z.object({
	email: z.string().email(),
	password: z.string().min(3, { message: "Password must contain at least 3 character" }).max(20),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
