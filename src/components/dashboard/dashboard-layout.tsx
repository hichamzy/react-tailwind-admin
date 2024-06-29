import { PropsWithChildren } from "react";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { Helmet } from "react-helmet-async";

type Props = {
	title?: string;
};

export default function DashboardLayout({
	children,
	title = "Dashboard",
}: PropsWithChildren<Props>) {
	return (
		<div className="bg-gray-100/75 min-h-screen">
			<Helmet>
				<title>React Admin | {title}</title>
			</Helmet>

			<Sidebar />

			<div className="lg:pl-72">
				<Header />
				<main className="py-10">
					<div className="px-4 sm:px-6 lg:px-8">{children}</div>
				</main>
			</div>
		</div>
	);
}
