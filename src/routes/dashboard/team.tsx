import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/team")({
	component: Team,
});

function Team() {
	return (
		<DashboardLayout>
			<h1>Team</h1>
		</DashboardLayout>
	);
}
