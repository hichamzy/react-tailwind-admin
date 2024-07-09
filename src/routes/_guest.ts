import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_guest")({
	/*beforeLoad: async () => {
		const isAuthenticated = localStorage.getItem("isAuthenticated");
		if (isAuthenticated) {
			throw redirect({
				to: "/dashboard",
			});
		}
	},*/
	component: Outlet,
});
