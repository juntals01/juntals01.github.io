"use client";

import * as React from "react";
import { SearchCommand } from "./SearchCommand";
import { usePathname } from "next/navigation";

export default function PageHeader() {
  const pathname = usePathname();
  const links = [
    { label: "Guides", link: "/guides" },
    { label: "About", link: "/about" },
  ];

  const isActiveClass = (isActive: boolean) => {
    if (isActive) {
      return "group flex items-center gap-2 rounded-lg border border-primary-100 bg-primary-50 px-3 py-2 text-sm font-medium text-primary-600 dark:border-transparent dark:bg-gray-700 dark:text-white";
    } else {
      return "group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-primary-50 hover:text-primary-600 active:border-primary-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600";
    }
  };
  return (
    <div className="">
      {/* Page Header */}
      <header
        id="page-header"
        className="z-1 flex flex-none items-center bg-white shadow-sm dark:bg-gray-800"
      >
        <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
          <div className="flex justify-between py-4">
            {/* Left Section */}
            <div className="flex items-center gap-2 lg:gap-6">
              {/* Logo */}

              <a
                href="/"
                className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50"
                  height="50"
                >
                  <g transform="translate(5, 2)">
                    <polygon
                      points="10,0 30,0 40,10 20,10"
                      fill="#4CAF50"
                      stroke="#388E3C"
                      strokeWidth="1"
                    />
                    <polygon
                      points="20,10 40,10 40,30 20,40"
                      fill="#81C784"
                      stroke="#388E3C"
                      strokeWidth="1"
                    />
                    <polygon
                      points="10,0 20,10 20,30 10,20"
                      fill="#66BB6A"
                      stroke="#388E3C"
                      strokeWidth="1"
                    />
                    <path
                      d="M24 14 L30 24 L36 14"
                      stroke="#ffffff"
                      strokeWidth="3"
                      fill="none"
                    />
                  </g>
                </svg>
                <span>FreeVPSsetup</span>
              </a>
              {/* END Logo */}

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-2 lg:flex">
                {links.map((link) => {
                  return (
                    <a
                      key={link.link}
                      href={link.link}
                      className={isActiveClass(pathname === link.link)}
                    >
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </nav>
              {/* END Desktop Navigation */}
            </div>
            {/* END Left Section */}

            {/* Right Section */}
            <div className="flex items-center gap-2">
              <SearchCommand />
            </div>
          </div>
        </div>
      </header>
      {/* END Page Header */}
    </div>
  );
}
