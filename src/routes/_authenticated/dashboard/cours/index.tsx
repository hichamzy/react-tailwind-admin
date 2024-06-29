import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard/cours/")({
	component: Cours,
});

function Cours() {
	return (
		<DashboardLayout title="Classes">
			<h1>Hello /_authenticated/dashboard/cours/!</h1>
		</DashboardLayout>
	);
}
