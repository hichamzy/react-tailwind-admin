import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";
import { FunnelIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export const Route = createFileRoute("/_authenticated/dashboard/classes/")({
	component: Classes,
});

function PageHeading() {
	return (
		<div className="md:flex md:items-center md:justify-between">
			<div className="min-w-0 flex-1">
				<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
					Bonjour <span className="text-indigo-600">Sanne Mrabet</span>
				</h2>
			</div>
		</div>
	);
}

function SearchFilterCard() {
	return (
		<Disclosure defaultOpen>
			<div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
				<DisclosureButton
					as="div"
					className="px-4 py-5 sm:px-6 flex items-center justify-between cursor-pointer group"
				>
					<h3 className="text-base font-semibold leading-6 text-gray-900 flex items-center gap-2">
						<FunnelIcon className="h-6 w-6" aria-hidden="true" />
						Recherche
					</h3>
					<span className="text-gray-400">
						<ChevronUpIcon
							className="h-5 w-5 group-data-[open]:rotate-180 transition-transform"
							aria-hidden="true"
						/>
					</span>
				</DisclosureButton>
				<DisclosurePanel className="px-4 py-5 sm:p-6">
					{/* Content goes here */}
				</DisclosurePanel>
			</div>
		</Disclosure>
	);
}

function Classes() {
	return (
		<DashboardLayout title="Classes">
			<div className="space-y-8">
				<PageHeading />
				<SearchFilterCard />
			</div>
		</DashboardLayout>
	);
}
