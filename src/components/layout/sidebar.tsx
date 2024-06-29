import { Link, useLocation } from "@tanstack/react-router";
import { useSidebarStore } from "@/hooks/useSidebarStore";
import { classNames } from "@/utils";
import {
	Transition,
	Dialog,
	TransitionChild,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import {
	XMarkIcon,
	Cog6ToothIcon,
	HomeIcon,
	UsersIcon,
	AcademicCapIcon,
	BookOpenIcon,
	ChartBarIcon,
	ChartPieIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
	{ name: "Acceuil", href: "/dashboard", icon: HomeIcon },
	{ name: "Mes classes", href: "/dashboard/classes", icon: UsersIcon },
	{
		name: "Ma gestion schoolaire",
		icon: AcademicCapIcon,
		children: [
			{ name: "Absences des mes élèves", href: "/dashboard/absences" },
			{ name: "Mes notes", href: "/dashboard/notes" },
		],
	},
	{ name: "Mes cours", href: "/dashboard/cours", icon: BookOpenIcon },
	{ name: "Sondages", href: "/dashboard/sondages", icon: ChartBarIcon },
	{ name: "Tableau de bord", href: "/dashboard/tableau", icon: ChartPieIcon },
];

export default function Sidebar() {
	const store = useSidebarStore();
	const { pathname } = useLocation();

	return (
		<>
			<Transition show={store.isOpen}>
				<Dialog className="relative z-50 lg:hidden" onClose={store.close}>
					<TransitionChild
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-900/80" />
					</TransitionChild>

					<div className="fixed inset-0 flex">
						<TransitionChild
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
								<TransitionChild
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
										<button
											type="button"
											className="-m-2.5 p-2.5"
											onClick={store.close}
										>
											<span className="sr-only">
												Close sidebar
											</span>
											<XMarkIcon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</button>
									</div>
								</TransitionChild>
								{/* Sidebar component, swap this element with another sidebar if you like */}
								<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
									<div className="flex h-16 shrink-0 items-center">
										<img
											className="h-8 w-auto"
											src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
											alt="Your Company"
										/>
									</div>
									<nav className="flex flex-1 flex-col">
										<ul
											role="list"
											className="flex flex-1 flex-col gap-y-7"
										>
											<li>
												<ul
													role="list"
													className="-mx-2 space-y-1"
												>
													{navigation.map((item) => (
														<li key={item.name}>
															{!item.children ? (
																<Link
																	to={item.href}
																	className={classNames(
																		item.href ===
																			pathname
																			? "bg-gray-800 text-white"
																			: "text-gray-400 hover:text-white hover:bg-gray-800",
																		"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
																	)}
																>
																	<item.icon
																		className="h-6 w-6 shrink-0"
																		aria-hidden="true"
																	/>
																	{item.name}
																</Link>
															) : (
																<Disclosure
																	as="div"
																	defaultOpen={item.children.some(
																		(i) =>
																			i.href ===
																			pathname
																	)}
																>
																	{({
																		open,
																	}) => (
																		<>
																			<DisclosureButton
																				className={classNames(
																					item.children.some(
																						(
																							i
																						) =>
																							i.href ===
																							pathname
																					)
																						? "bg-gray-800 text-white"
																						: "text-gray-400 hover:text-white hover:bg-gray-800",
																					"flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold"
																				)}
																			>
																				<item.icon
																					className="h-6 w-6 shrink-0"
																					aria-hidden="true"
																				/>
																				{
																					item.name
																				}
																				<ChevronRightIcon
																					className={classNames(
																						open
																							? "rotate-90 text-gray-300"
																							: "text-gray-400",
																						"ml-auto h-5 w-5 shrink-0"
																					)}
																					aria-hidden="true"
																				/>
																			</DisclosureButton>
																			<DisclosurePanel
																				as="ul"
																				transition
																				className="mt-1 px-2 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
																			>
																				{item.children.map(
																					(
																						subItem
																					) => (
																						<li
																							key={
																								subItem.name
																							}
																						>
																							<DisclosureButton
																								as={
																									Link
																								}
																								to={
																									subItem.href
																								}
																								className={classNames(
																									"text-gray-400 hover:text-white hover:bg-gray-800",
																									"block rounded-md py-2 pr-2 pl-9 text-sm leading-6"
																								)}
																								activeProps={{
																									className:
																										"bg-gray-800 text-white",
																								}}
																								activeOptions={{
																									exact: true,
																								}}
																							>
																								{
																									subItem.name
																								}
																							</DisclosureButton>
																						</li>
																					)
																				)}
																			</DisclosurePanel>
																		</>
																	)}
																</Disclosure>
															)}
														</li>
													))}
												</ul>
											</li>
											<li className="mt-auto">
												<a
													href="#"
													className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
												>
													<Cog6ToothIcon
														className="h-6 w-6 shrink-0"
														aria-hidden="true"
													/>
													Settings
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>

			{/* Static sidebar for desktop */}
			<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
					<div className="flex h-16 shrink-0 items-center">
						<img
							className="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
							alt="Your Company"
						/>
					</div>
					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" className="-mx-2 space-y-1">
									{navigation.map((item) => (
										<li key={item.name}>
											{!item.children ? (
												<Link
													to={item.href}
													className={classNames(
														item.href === pathname
															? "bg-gray-800 text-white"
															: "text-gray-400 hover:text-white hover:bg-gray-800",
														"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
													)}
												>
													<item.icon
														className="h-6 w-6 shrink-0"
														aria-hidden="true"
													/>
													{item.name}
												</Link>
											) : (
												<Disclosure
													as="div"
													defaultOpen={item.children.some(
														(i) => i.href === pathname
													)}
												>
													{({ open }) => (
														<>
															<DisclosureButton
																className={classNames(
																	item.children.some(
																		(i) =>
																			i.href ===
																			pathname
																	)
																		? "bg-gray-800 text-white"
																		: "text-gray-400 hover:text-white hover:bg-gray-800",
																	"flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold"
																)}
															>
																<item.icon
																	className="h-6 w-6 shrink-0"
																	aria-hidden="true"
																/>
																{item.name}
																<ChevronRightIcon
																	className={classNames(
																		open
																			? "rotate-90 text-gray-300"
																			: "text-gray-400",
																		"ml-auto h-5 w-5 shrink-0"
																	)}
																	aria-hidden="true"
																/>
															</DisclosureButton>
															<DisclosurePanel
																as="ul"
																transition
																className="mt-1 px-2 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
															>
																{item.children.map(
																	(subItem) => (
																		<li
																			key={
																				subItem.name
																			}
																		>
																			<DisclosureButton
																				as={
																					Link
																				}
																				to={
																					subItem.href
																				}
																				className={classNames(
																					"text-gray-400 hover:text-white hover:bg-gray-800",
																					"block rounded-md py-2 pr-2 pl-9 text-sm leading-6"
																				)}
																				activeProps={{
																					className:
																						"bg-gray-800 text-white",
																				}}
																				activeOptions={{
																					exact: true,
																				}}
																			>
																				{
																					subItem.name
																				}
																			</DisclosureButton>
																		</li>
																	)
																)}
															</DisclosurePanel>
														</>
													)}
												</Disclosure>
											)}
										</li>
									))}
								</ul>
							</li>
							<li className="mt-auto">
								<a
									href="#"
									className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
								>
									<Cog6ToothIcon
										className="h-6 w-6 shrink-0"
										aria-hidden="true"
									/>
									Settings
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}
