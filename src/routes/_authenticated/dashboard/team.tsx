import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard/team")({
	component: Team,
});

function Team() {
	return (
		<DashboardLayout title="Team">
			<h1>Team</h1>
		</DashboardLayout>
	);
}
