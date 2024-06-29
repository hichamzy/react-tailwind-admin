import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/auth";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { SignUpSchema, SignUpSchemaType } from "@/schemas/auth";
import AlertError from "@/components/common/alert-error";

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpSchemaType>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: { email: "", password: "" },
	});

	const search: Record<string, string> = useSearch({ from: "/_guest/auth/login" });
	const navigate = useNavigate();

	const { mutate, isPending, error } = useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			localStorage.setItem("isAuthenticated", "true");
			console.log(data);

			if (search.redirect) {
				navigate({ to: search.redirect });
			}
			navigate({ to: "/dashboard" });
		},
	});

	const onSubmit = (data: SignUpSchemaType) => {
		mutate(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} method="POST" className="space-y-6">
			{error && error.message && <AlertError message={error.message} />}
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Email address
				</label>
				<div className="mt-2">
					<input
						id="email"
						type="email"
						autoComplete="email"
						required
						{...register("email")}
						className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					{errors.email && (
						<span className="text-sm text-red-500">{errors.email.message}</span>
					)}
				</div>
			</div>

			<div>
				<label
					htmlFor="password"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Password
				</label>
				<div className="mt-2">
					<input
						id="password"
						type="password"
						autoComplete="current-password"
						required
						{...register("password")}
						className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					{errors.password && (
						<span className="text-sm text-red-500 mt-2">
							{errors.password.message}
						</span>
					)}
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<input
						id="remember-me"
						name="remember-me"
						type="checkbox"
						className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
					<label
						htmlFor="remember-me"
						className="ml-3 block text-sm leading-6 text-gray-700"
					>
						Remember me
					</label>
				</div>

				<div className="text-sm leading-6">
					<a
						href="#"
						className="font-semibold text-indigo-600 hover:text-indigo-500"
					>
						Forgot password?
					</a>
				</div>
			</div>

			<div>
				<button
					disabled={isPending}
					type="submit"
					className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Sign in
				</button>
			</div>
		</form>
	);
}
