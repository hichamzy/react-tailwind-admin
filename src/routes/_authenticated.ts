import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
	beforeLoad: async ({ location }) => {
		const isAuthenticated = localStorage.getItem("isAuthenticated");
		if (!isAuthenticated) {
			throw redirect({
				to: "/auth/login",
				search: {
					redirect: location.href,
				},
			});
		}
	},
	component: Outlet,
});
