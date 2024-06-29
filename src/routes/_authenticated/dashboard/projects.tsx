import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard/projects")({
	component: Projects,
});

function Projects() {
	return (
		<DashboardLayout title="Projects">
			<h1>Projects</h1>
		</DashboardLayout>
	);
}
