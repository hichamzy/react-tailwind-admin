import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard/tableau/")({
	component: Tableau,
});

function Tableau() {
	return (
		<DashboardLayout title="Classes">
			<h1>Hello /_authenticated/dashboard/tableau/!</h1>
		</DashboardLayout>
	);
}
