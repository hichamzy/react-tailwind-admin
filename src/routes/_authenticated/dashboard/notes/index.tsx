import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard/notes/")({
	component: Notes,
});

function Notes() {
	return (
		<DashboardLayout title="Classes">
			<h1>Hello /_authenticated/dashboard/notes/!</h1>
		</DashboardLayout>
	);
}
