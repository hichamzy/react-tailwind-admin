import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard/absences/")({
	component: Absences,
});

function Absences() {
	return (
		<DashboardLayout title="Classes">
			<h1>Hello /_authenticated/dashboard/absences/!</h1>
		</DashboardLayout>
	);
}
