"use client";
import React from "react";
import { format } from "date-fns";
import Image from "next/image";
const HomeBanner = () => {
  return (
    <div>
      {/* Hero Content */}
      <div className="container relative mx-auto flex flex-col gap-16 px-4 py-16 text-center lg:flex-row lg:gap-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
        <div className="lg:flex lg:w-1/2 lg:items-center">
          <div>
            <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
              Latest Guide as of {format(new Date(), "yyyy")}
            </div>
            <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
              Free
              <span className="text-primary-600 pl-1 dark:text-primary-500">
                Virtual Private Server
              </span>
            </h1>
            <h2 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
              Setup your own Virtual Private Server using Oracle. Oracle offers
              free private server that can cater small to medium website
              visitors
            </h2>
            <div className="flex flex-col justify-center gap-2 pb-16 pt-10 sm:flex-row sm:items-center lg:justify-start">
              <a
                href="/guides/how-to-make-free-website"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-700 bg-primary-700 px-8 py-4 font-semibold leading-6 text-white hover:border-primary-600 hover:bg-primary-600 hover:text-white focus:ring focus:ring-primary-400/50 active:border-primary-700 active:bg-primary-700 dark:focus:ring-primary-400/90"
              >
                <span>Start Creating</span>
                <svg
                  className="hi-mini hi-arrow-right inline-block size-5 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <div className="relative mx-5 lg:w-96">
            <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-primary-200 dark:border-primary-900 lg:size-72" />
            <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-primary-100 dark:border-primary-950 lg:size-72" />
            <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-primary-200 dark:border-primary-900 lg:size-72" />
            <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-primary-100 dark:border-primary-950 lg:size-72" />
            <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 dark:bg-gray-800" />
            <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-primary-800/75 shadow-inner dark:bg-primary-900/75" />
            <Image
              width={500}
              height={200}
              src="https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg"
              className="relative mx-auto rounded-lg shadow-lg"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      {/* END Hero Content */}
    </div>
  );
};

export default HomeBanner;
