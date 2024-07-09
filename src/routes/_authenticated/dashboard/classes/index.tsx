import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { createFileRoute } from "@tanstack/react-router";
import { FunnelIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export const Route = createFileRoute("/_authenticated/dashboard/classes/")({
  component: Classes,
});

const people = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "/media/cours/svt/img1.png",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "/media/cours/svt/img2.png",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "/media/cours/svt/img3.png",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "/media/cours/svt/img4.png",
  },
];

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
          className="group flex cursor-pointer items-center justify-between px-4 py-5 sm:px-6"
        >
          <h3 className="flex items-center gap-2 text-base font-semibold leading-6 text-gray-900">
            <FunnelIcon className="h-6 w-6" aria-hidden="true" />
            Recherche
          </h3>
          <span className="text-gray-400">
            <ChevronUpIcon
              className="h-5 w-5 transition-transform group-data-[open]:rotate-180"
              aria-hidden="true"
            />
          </span>
        </DisclosureButton>
        <DisclosurePanel className="grid grid-cols-1 items-end gap-6 px-4 py-5 sm:p-6 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <label
              htmlFor="domaines"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Domaines
            </label>
            <select
              id="domaines"
              name="domaines"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue=""
            >
              <option value=""></option>
              <option value="1">Domaine 1</option>
              <option value="2">Domaine 2</option>
              <option value="3">Domaine 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="modules"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Modules
            </label>
            <select
              id="modules"
              name="modules"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue=""
            >
              <option value=""></option>
              <option value="1">Module 1</option>
              <option value="2">Module 2</option>
              <option value="3">Module 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="unites"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Unités
            </label>
            <select
              id="unites"
              name="unites"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue=""
            >
              <option value=""></option>
              <option value="1">Unité 1</option>
              <option value="2">Unité 2</option>
              <option value="3">Unité 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="chapitres"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Chapitres
            </label>
            <select
              id="chapitres"
              name="chapitres"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue=""
            >
              <option value=""></option>
              <option value="1">Chapitre 1</option>
              <option value="2">Chapitre 2</option>
              <option value="3">Chapitre 3</option>
            </select>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FunnelIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
              Filtrer
            </button>
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  );
}

function CoursesCards() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-6 text-start">
            <img
              className="mx-auto aspect-video w-full flex-shrink-0"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              La digestion des aliments dans le tube digestif
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Sciences de la vie et de la terre
            </p>
            <div className="mt-2">
              <div className="my-2 flex items-center justify-between">
                <p className="text-sm text-gray-400">Termine</p>
                <p className="text-sm text-gray-400">20%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-blue-200">
                <div className="h-full w-2/3 rounded-full bg-blue-600 text-center text-xs text-white"></div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Classes() {
  return (
    <DashboardLayout title="Classes">
      <div className="space-y-8">
        <PageHeading />
        <SearchFilterCard />
        <CoursesCards />
        <CoursesCards />
      </div>
    </DashboardLayout>
  );
}
