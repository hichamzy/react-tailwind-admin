import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
	component: Dashboard,
});

function Dashboard() {
	return <DashboardLayout>hello</DashboardLayout>;
}
