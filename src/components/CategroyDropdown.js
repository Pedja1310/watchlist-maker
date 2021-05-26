import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-10">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          onClick={toggleDropdown}
        >
          Category
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={`origin-top-right absolute -right-1/2 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div className="py-1" role="menu" onClick={toggleDropdown}>
            <Link
              to="/movie/popular"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Popular Movies
            </Link>
            <Link
              to="/movie/top_rated"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Top Rated Movies
            </Link>
            <Link
              to="/tv/popular"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Popular TV Shows
            </Link>
            <Link
              to="/tv/top_rated"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Top Rated TV Shows
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default CategoryDropdown;

// Dropdown panel, show/hide based on dropdown state.

// Entering: "transition ease-out duration-100"
//   From: "transform opacity-0 scale-95"
//   To: "transform opacity-100 scale-100"
// Leaving: "transition ease-in duration-75"
//   From: "transform opacity-100 scale-100"
//   To: "transform opacity-0 scale-95"
