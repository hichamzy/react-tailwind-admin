import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard/sondages/")({
	component: Sondages,
});

function Sondages() {
	return (
		<DashboardLayout title="Classes">
			<h1>Hello /_authenticated/dashboard/sondages/!</h1>
		</DashboardLayout>
	);
}
