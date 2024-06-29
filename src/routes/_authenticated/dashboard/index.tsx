import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/utils";
import { fetchUsers } from "@/services/users";

export const Route = createFileRoute("/_authenticated/dashboard/")({
	component: Dashboard,
	loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(fetchUsers()),
	errorComponent: () => <div>Error</div>,
	pendingComponent: () => <div>Loading...</div>,
});

const stats = [
	{
		id: 1,
		name: "Total Subscribers",
		stat: "71,897",
		icon: UsersIcon,
		change: "122",
		changeType: "increase",
	},
	{
		id: 2,
		name: "Avg. Open Rate",
		stat: "58.16%",
		icon: EnvelopeOpenIcon,
		change: "5.4%",
		changeType: "increase",
	},
	{
		id: 3,
		name: "Avg. Click Rate",
		stat: "24.57%",
		icon: CursorArrowRaysIcon,
		change: "3.2%",
		changeType: "decrease",
	},
];

function StatCards() {
	return (
		<div>
			<h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>

			<dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{stats.map((item) => (
					<div
						key={item.id}
						className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
					>
						<dt>
							<div className="absolute rounded-md bg-indigo-500 p-3">
								<item.icon
									className="h-6 w-6 text-white"
									aria-hidden="true"
								/>
							</div>
							<p className="ml-16 truncate text-sm font-medium text-gray-500">
								{item.name}
							</p>
						</dt>
						<dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
							<p className="text-2xl font-semibold text-gray-900">
								{item.stat}
							</p>
							<p
								className={classNames(
									item.changeType === "increase"
										? "text-green-600"
										: "text-red-600",
									"ml-2 flex items-baseline text-sm font-semibold"
								)}
							>
								{item.changeType === "increase" ? (
									<ArrowUpIcon
										className="h-5 w-5 flex-shrink-0 self-center text-green-500"
										aria-hidden="true"
									/>
								) : (
									<ArrowDownIcon
										className="h-5 w-5 flex-shrink-0 self-center text-red-500"
										aria-hidden="true"
									/>
								)}

								<span className="sr-only">
									{" "}
									{item.changeType === "increase"
										? "Increased"
										: "Decreased"}{" "}
									by{" "}
								</span>
								{item.change}
							</p>
							<div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
								<div className="text-sm">
									<a
										href="#"
										className="font-medium text-indigo-600 hover:text-indigo-500"
									>
										View all
										<span className="sr-only">
											{" "}
											{item.name} stats
										</span>
									</a>
								</div>
							</div>
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
}

function DataTable() {
	const people = Route.useLoaderData();
	return (
		<div className="mt-8">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
					<p className="mt-2 text-sm text-gray-700">
						A list of all the users in your account including their name, title,
						email and role.
					</p>
				</div>
				<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						type="button"
						className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Add user
					</button>
				</div>
			</div>
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-300">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
										>
											ID
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											Name
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											User Name
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											Email
										</th>
										<th
											scope="col"
											className="relative py-3.5 pl-3 pr-4 sm:pr-6"
										>
											<span className="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									{people.map((person) => (
										<tr key={person.id}>
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
												{person.id}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{person.name}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{person.username}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{person.email}
											</td>
											<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
												<a
													href="#"
													className="text-indigo-600 hover:text-indigo-900"
												>
													Edit
													<span className="sr-only">
														, {person.name}
													</span>
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Dashboard() {
	return (
		<DashboardLayout title="Dashboard">
			<StatCards />
			<DataTable />
		</DashboardLayout>
	);
}
