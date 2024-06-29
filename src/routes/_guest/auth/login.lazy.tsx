import AuthLayout from "@/components/auth/auth-layout";
import LoginForm from "@/components/auth/login-form";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_guest/auth/login")({
	component: Login,
});

function Login() {
	return (
		<AuthLayout title="Login">
			<div className="mx-auto w-full max-w-sm lg:w-96">
				<div>
					<img
						className="h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
					<p className="mt-2 text-sm leading-6 text-gray-500">
						Not a member?{" "}
						<Link
							to="/auth/register"
							className="font-semibold text-indigo-600 hover:text-indigo-500"
						>
							create account
						</Link>
					</p>
				</div>

				<div className="mt-10">
					<div>
						<LoginForm />
					</div>
				</div>
			</div>
		</AuthLayout>
	);
}
