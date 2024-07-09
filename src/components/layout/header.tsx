import { useState } from 'react';
import { Menu,MenuButton,Transition, MenuItems, MenuItem } from "@headlessui/react";
import { Bars3Icon, BellIcon, SignalSlashIcon, SunIcon, ChevronDownIcon, MagnifyingGlassIcon, MoonIcon } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { useSidebarStore } from "@/hooks/useSidebarStore";

const userNavigation = [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
];

export default function Header() {
    const sidebarStore = useSidebarStore();
    const [themeOpen, setThemeOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [niveau2Open, setNiveau2Open] = useState(false);
    const [niveau3Open, setNiveau3Open] = useState(false);

    const closeAllDropdowns = () => {
        setThemeOpen(false);
        setSearchOpen(false);
        setProfileOpen(false);
        setNiveau2Open(false);
        setNiveau3Open(false);
    };

    const toggleThemeMenu = () => {
        closeAllDropdowns();
        setThemeOpen(!themeOpen);
    };

    const toggleSearchBar = () => {
        closeAllDropdowns();
        setSearchOpen(!searchOpen);
    };

    const toggleProfileMenu = () => {
        closeAllDropdowns();
        setProfileOpen(!profileOpen);
    };

    return (
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={sidebarStore.open}
            >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <div className="relative flex-1 flex justify-start items-center flex-row">
                    {/* Niveau 2 Dropdown */}
                    <Menu as="div" className="relative">
                        <div
                            className="p-3 text-gray-600 hover:text-blue-700 cursor-pointer"
                            onMouseEnter={() => setNiveau2Open(true)}
                            onMouseLeave={() => setNiveau2Open(false)}
                        >
                            <span>niveau 2</span>
                        </div>
                        <Transition
                            show={niveau2Open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Your Link 1
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Your Link 2
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Transition>
                    </Menu>

                    {/* Niveau 3 Dropdown */}
                    <Menu as="div" className="relative">
                        <div
                            className="p-3 text-gray-600 hover:text-blue-700 cursor-pointer"
                            onMouseEnter={() => setNiveau3Open(true)}
                            onMouseLeave={() => setNiveau3Open(false)}
                        >
                            <span>niveau 3</span>
                        </div>
                        <Transition
                            show={niveau3Open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Your Link 1
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Your Link 2
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">You are offline</span>
                        <SignalSlashIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="relative inline-block text-left">
                        <button
                            type="button"
                            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                            onClick={toggleSearchBar}
                        >
                            <span className="sr-only">Search</span>
                            <MagnifyingGlassIcon className="h-6 w-6 pt-5px" aria-hidden="true" />
                        </button>
                        <Transition
                            show={searchOpen}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none flex justify-center items-center flex-row">
                                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 py-2 text-sm text-gray-900 bg-white  rounded-md  "
                                />
                            </div>
                        </Transition>
                    </div>
                    <div className="relative inline-block text-left">
                        <Menu>
                            {({ open }) => (
                                <>
                                    <MenuButton
                                        className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                                        onClick={toggleThemeMenu}
                                    >
                                        <span className="sr-only">Light mode</span>
                                        <SunIcon className="h-6 w-6" aria-hidden="true" />
                                    </MenuButton>

                                    <Transition
                                        show={themeOpen}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <MenuItems className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                            <MenuItem>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={`${
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                                        } group flex items-center px-4 py-2 text-sm`}
                                                    >
                                                        <SunIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                                        Light
                                                    </a>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={`${
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                                        } group flex items-center px-4 py-2 text-sm`}
                                                    >
                                                        <MoonIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                                        Dark
                                                    </a>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={`${
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                                        } group flex items-center px-4 py-2 text-sm`}
                                                    >
                                                        <AdjustmentsHorizontalIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                                        System
                                                    </a>
                                                )}
                                            </MenuItem>
                                        </MenuItems>
                                    </Transition>
                                </>
                            )}
                        </Menu>
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative">
                        <MenuButton
                            className="-m-1.5 flex items-center p-1.5"
                            onClick={toggleProfileMenu}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-8 w-8 rounded-full bg-gray-50"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <span className="hidden lg:flex lg:items-center">
                                <span
                                    className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                                    aria-hidden="true"
                                >
                                    Tom Cook
                                </span>
                                <ChevronDownIcon
                                    className="ml-2 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </MenuButton>
                        <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                {userNavigation.map((item) => (
                                    <MenuItem key={item.name}>
                                        {({ active }) => (
                                            <a
                                                href={item.href}
                                                className={`${
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                                } block px-3 py-1 text-sm leading-6`}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    );
}
