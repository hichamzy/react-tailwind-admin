import { PropsWithChildren } from "react";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

export default function DashboardLayout({ children }: PropsWithChildren) {
	return (
		<div>
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
