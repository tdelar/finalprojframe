import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon, HomeIcon } from "@heroicons/react/outline";
import DropDown from "/components/DropDown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const people = [
//   { id: 1, name: "Price To Rent" },
//   { id: 2, name: "Median home Value" },
//   { id: 3, name: "Median Rent Value" },
//   { id: 4, name: "Population" },
//   { id: 5, name: "Cap Rate" },
// ];

export default function Example({
  selected,
  setSelected,
  chloroOptions,
  toggleBoundarie,
  selectedBoundarie,
  setSelectedBoundarie,
  boundarieoptions,
}) {
  //   const [selectedChloro, setSelectedChloro] = useState(people[0]);

  return (
    <Disclosure as="nav" className="bg-indigo-600">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  /> */}
                  {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                    {/* <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Button text
                    </button> */}
                    <DropDown
                      selected={selectedBoundarie}
                      setSelected={setSelectedBoundarie}
                      selectedOptions={boundarieoptions}
                    ></DropDown>

                    <DropDown
                      selected={selected}
                      setSelected={setSelected}
                      selectedOptions={chloroOptions}
                    ></DropDown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
