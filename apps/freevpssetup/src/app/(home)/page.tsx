import HomeContent from "@/components/content/HomeContent";
import HomeBanner from "@/components/layouts/banner/HomeBanner";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      {/* Features Section: Bento Grid Alternate */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Features */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {/* Feature: Hero */}
            <div className="col-span-12 flex flex-col gap-8 overflow-hidden rounded-3xl bg-gray-50 p-4 dark:border-gray-700/25 dark:bg-gray-700/25 sm:p-6 lg:col-span-6 lg:row-span-3 lg:p-16">
              <div className="flex-none">
                <div className="inline-block rounded-lg bg-gray-200 px-2 py-1.5 text-sm font-semibold dark:bg-gray-700/75">
                  v1.0
                </div>
              </div>
              <div className="flex grow flex-col justify-center">
                <div>
                  <div className="mb-1 font-bold text-primary-600 dark:text-primary-500">
                    Build your idea
                  </div>
                  <h2 className="mb-4 text-2xl font-black text-black dark:text-white sm:text-4xl">
                    Unlock your full potential and build amazing web projects
                  </h2>
                  <h3 className="mx-auto text-base/relaxed font-medium text-gray-600 dark:text-gray-400 sm:text-lg/relaxed">
                    Build your website using the Oracle Free Virtual Private
                    Server. You will be able to serve at max to 100, 000 web
                    visitors. It is the best server when you start your own
                    business. Follow the guide and set up your own server.
                  </h3>
                  <div className="mt-6 flex flex-row flex-wrap items-center gap-3">
                    <a
                      href="/guides/how-to-make-free-website"
                      className="group inline-flex items-center justify-center gap-2 rounded-lg border border-primary-700 bg-primary-700 px-7 py-3.5 text-sm font-semibold text-white hover:border-primary-600 hover:bg-primary-600 hover:text-white focus:ring focus:ring-primary-400/50 active:border-primary-700 active:bg-primary-700 dark:focus:ring-primary-400/90"
                    >
                      <span>Read the Guide</span>
                      <svg
                        className="hi-mini hi-arrow-right inline-block size-5 opacity-50 transition group-hover:translate-x-1"
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
              <div className="flex-none">
                <div className="flex items-center gap-2 leading-4 lg:justify-start">
                  <div className="flex-none">
                    <Image
                      width={500}
                      height={200}
                      src="https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg"
                      alt="User Avatar"
                      className="inline-block size-10 rounded-full border-2 border-white dark:border-gray-900"
                    />
                    <Image
                      width={500}
                      height={200}
                      src="https://cdn.tailkit.com/media/placeholders/avatar-bY4GXQKfZrA-160x160.jpg"
                      alt="User Avatar"
                      className="-ml-6 inline-block size-10 rounded-full border-2 border-white dark:border-gray-900"
                    />
                    <Image
                      width={500}
                      height={200}
                      src="https://cdn.tailkit.com/media/placeholders/avatar-8PMvB4VyVXA-160x160.jpg"
                      alt="User Avatar"
                      className="-ml-6 inline-block size-10 rounded-full border-2 border-white dark:border-gray-900"
                    />
                    <Image
                      width={500}
                      height={200}
                      src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg"
                      alt="User Avatar"
                      className="-ml-6 inline-block size-10 rounded-full border-2 border-white dark:border-gray-900"
                    />
                    <Image
                      width={500}
                      height={200}
                      src="https://cdn.tailkit.com/media/placeholders/avatar-euZ2n8dGUcQ-160x160.jpg"
                      alt="User Avatar"
                      className="-ml-6 inline-block size-10 rounded-full border-2 border-white dark:border-gray-900"
                    />
                  </div>
                  <div className="text-left">
                    <div className="inline-flex items-center text-amber-500">
                      <svg
                        className="hi-mini hi-star inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="hi-mini hi-star inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="hi-mini hi-star inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="hi-mini hi-star inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="hi-mini hi-star inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="ml-2 font-bold text-gray-950 dark:text-gray-50">
                        5.0
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Join 5,000+ founders
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END Feature: Hero */}

            {/* Feature: Optimized SEO */}
            <div className="col-span-12 flex flex-col gap-8 rounded-3xl bg-amber-50 p-4 dark:bg-amber-950/75 sm:p-6 md:flex-row md:items-center md:gap-0 lg:col-span-6 lg:p-8">
              <div className="flex-none md:w-1/2">
                <h4 className="text-3xl font-extrabold text-amber-950 dark:text-amber-50">
                  Optimized SEO
                </h4>
                <h5 className="mt-2 text-sm/relaxed font-medium text-amber-900 dark:text-amber-100">
                  Elevate your online presence with fast server and dominate
                  search engine rankings effortlessly.
                </h5>
              </div>
              {/* Promo Image */}
              <div className="flex grow flex-col items-center justify-center">
                <div className="mx-auto aspect-1">
                  <Image
                    width={500}
                    height={200}
                    src="https://cdn.tailkit.com/media/placeholders/photo-seo-package-1024x1024.png"
                    className="size-64 origin-center md:size-auto md:scale-125 lg:scale-150"
                    alt="Seo package illustration"
                  />
                </div>
              </div>
              {/* END Promo Image */}
            </div>
            {/* END Feature: Optimized SEO */}

            {/* Feature: Users */}
            <div className="col-span-4 flex flex-col gap-8 overflow-hidden rounded-3xl bg-green-50 p-4 dark:bg-green-950/75 sm:p-6 lg:col-span-2 lg:p-8">
              <div className="flex-none text-center">
                <h4 className="text-2xl font-extrabold text-lime-600 dark:text-lime-400 sm:text-5xl">
                  <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent dark:from-lime-400 dark:to-emerald-400">
                    7k
                  </span>
                </h4>
                <h5 className="text-sm font-medium text-green-900 dark:text-green-100 sm:text-base">
                  users
                </h5>
              </div>
            </div>
            {/* END Feature: Users */}

            {/* Feature: Faster */}
            <div className="col-span-4 flex flex-col gap-8 overflow-hidden rounded-3xl bg-rose-50 p-4 dark:bg-rose-950/75 sm:p-6 lg:col-span-2 lg:p-8">
              <div className="flex-none text-center">
                <h4 className="text-2xl font-extrabold text-orange-600 dark:text-orange-400 sm:text-5xl">
                  <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent dark:from-orange-400 dark:to-rose-400">
                    5x
                  </span>
                </h4>
                <h5 className="text-sm font-medium text-rose-900 dark:text-rose-100 sm:text-base">
                  faster
                </h5>
              </div>
            </div>
            {/* END Feature: Faster */}

            {/* Feature: Projects */}
            <div className="col-span-4 flex flex-col gap-8 overflow-hidden rounded-3xl bg-indigo-50 p-4 dark:bg-indigo-950/75 sm:p-6 lg:col-span-2 lg:p-8">
              <div className="flex-none text-center">
                <h4 className="text-2xl font-extrabold text-sky-600 dark:text-sky-400 sm:text-5xl">
                  <span className="bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-purple-400">
                    3k
                  </span>
                </h4>
                <h5 className="text-sm font-medium text-indigo-900 dark:text-indigo-100 sm:text-base">
                  projects
                </h5>
              </div>
            </div>
            {/* END Feature: Projects */}

            {/* Feature: Security Features */}
            <div className="col-span-12 flex flex-col gap-8 overflow-hidden rounded-3xl bg-lime-50 p-4 dark:bg-lime-950/75 sm:col-span-6 sm:p-6 lg:col-span-3 lg:p-8">
              <div className="flex-none">
                <h4 className="text-xl font-extrabold text-lime-950 dark:text-lime-50">
                  Security Features
                </h4>
                <h5 className="text-sm/relaxed font-medium text-lime-900 dark:text-lime-100">
                  Protect your websites.
                </h5>
              </div>
              {/* Promo Code */}
              <div className="-mx-2 flex grow flex-col justify-center lg:-mx-4">
                <div className="relative">
                  <div
                    className="mx-9 -mb-5 flex items-center justify-between rounded-lg bg-lime-100 p-4 dark:bg-lime-950"
                    aria-hidden="true"
                  />
                  <div
                    className="mx-6 -mb-5 flex items-center justify-between rounded-lg bg-lime-200 p-4 dark:bg-lime-900"
                    aria-hidden="true"
                  />
                  <div
                    className="mx-3 -mb-5 flex items-center justify-between rounded-lg bg-lime-400 p-4 dark:bg-lime-800"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between rounded-lg bg-lime-600 p-4">
                    <div className="flex grow items-center gap-2 text-lime-50 sm:text-lg">
                      <svg
                        className="hi-solid hi-check-circle inline-block size-5 flex-none text-lime-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm font-medium">
                        DDos attack resolved!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END Promo Code */}
            </div>
            {/* END Feature: Security Features */}

            {/* Feature: Performance Analytics */}
            <div className="col-span-12 flex flex-col gap-8 overflow-hidden rounded-3xl bg-fuchsia-50 p-4 dark:bg-fuchsia-950/75 sm:col-span-6 sm:p-6 lg:col-span-3 lg:p-8">
              <div className="flex-none">
                <h4 className="text-xl font-extrabold text-fuchsia-950 dark:text-fuchsia-50">
                  Performance Analytics
                </h4>
                <h5 className="text-sm/relaxed font-medium text-fuchsia-900 dark:text-fuchsia-100">
                  Optimize website speed.
                </h5>
              </div>
              {/* Promo Chart */}
              <div className="relative -mx-8 -mb-4 flex grow flex-col items-center justify-end sm:-mb-5 lg:-mb-8">
                <svg
                  viewBox="0 0 1000 500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-0 -scale-x-100 text-fuchsia-100 dark:text-fuchsia-950"
                >
                  <path
                    d="M 0 495.01443789956 C 14.199999999999998 490.8291637927556 42.6 480.6248312053363 71 474.0880673655379 C 99.4 467.55130352573946 113.6 470.3498713081252 142 462.33061870056787 C 170.4 454.3113660930105 184.6 448.34097658442397 213 433.9918043277511 C 241.4 419.64263207107825 255.6 408.0392375091671 284 390.5847574172036 C 312.4 373.1302773252402 326.6 347.57436530774606 355 346.7194038679338 C 383.4 345.86444242812155 397.6 388.10689141982334 426 386.30995021814226 C 454.4 384.5130090164612 468.6 351.23637877699565 497 337.7346978595284 C 525.4 324.23301694206117 539.6 350.8881026454411 568 318.8015456308061 C 596.4 286.7149886161711 610.6 192.13889660503196 639 177.30191278635345 C 667.4 162.46492896767495 681.6 233.96915498419335 710 244.61662653741365 C 738.4 255.26409809063395 752.6 234.8754831280235 781 230.53927055245492 C 809.4 226.20305797688636 823.6 248.13926238288883 852 222.9355636595708 C 880.4 197.73186493625275 894.6 109.83549866599051 923 104.52077693586472 C 951.4 99.20605520573892 979.8 177.9937193943264 994 196.36195500894183 L 1000 500 L 0 500Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  viewBox="0 0 1000 500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-full text-fuchsia-300 dark:text-fuchsia-700"
                >
                  <path
                    d="M 0 495.01443789956 C 14.199999999999998 490.8291637927556 42.6 480.6248312053363 71 474.0880673655379 C 99.4 467.55130352573946 113.6 470.3498713081252 142 462.33061870056787 C 170.4 454.3113660930105 184.6 448.34097658442397 213 433.9918043277511 C 241.4 419.64263207107825 255.6 408.0392375091671 284 390.5847574172036 C 312.4 373.1302773252402 326.6 347.57436530774606 355 346.7194038679338 C 383.4 345.86444242812155 397.6 388.10689141982334 426 386.30995021814226 C 454.4 384.5130090164612 468.6 351.23637877699565 497 337.7346978595284 C 525.4 324.23301694206117 539.6 350.8881026454411 568 318.8015456308061 C 596.4 286.7149886161711 610.6 192.13889660503196 639 177.30191278635345 C 667.4 162.46492896767495 681.6 233.96915498419335 710 244.61662653741365 C 738.4 255.26409809063395 752.6 234.8754831280235 781 230.53927055245492 C 809.4 226.20305797688636 823.6 248.13926238288883 852 222.9355636595708 C 880.4 197.73186493625275 894.6 109.83549866599051 923 104.52077693586472 C 951.4 99.20605520573892 979.8 177.9937193943264 994 196.36195500894183 L 1000 500 L 0 500Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              {/* END Promo Chart */}
            </div>
            {/* END Feature: Performance Analytics */}
          </div>
          {/* END Features */}
        </div>
      </div>
      {/* END Features Section: Bento Grid Alternate */}

      {/* Features Section: Key Features With Icons */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Heading */}
          <div className="text-center">
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-500">
              Save Time &amp; Money
            </div>
            <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
              What you can build
            </h2>
            <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 lg:w-2/3">
              You can build any framework on your own Private Virtual Server.
              These are examples of frameworks you can install on your own
              private server.
            </h3>
          </div>
          {/* END Heading */}

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-5 md:gap-12">
            <div className="py-5">
              <div className="group relative mb-8 ml-3 inline-flex size-12 items-center justify-center">
                <div className="absolute inset-0 -m-3 -rotate-6 rounded-xl bg-orange-500 transition duration-150 ease-out group-hover:rotate-6 group-hover:scale-110" />
                <div className="absolute inset-0 -m-3 rotate-2 rounded-xl bg-orange-500/50 shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110" />
                <svg
                  viewBox="0 0 384 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-html5 relative inline-block size-8 text-white transition duration-150 ease-out group-hover:scale-125"
                >
                  <path
                    fill="currentColor"
                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-bold">Plain HTML</h4>
            </div>
            <div className="py-5">
              <div className="group relative mb-8 ml-3 inline-flex size-12 items-center justify-center">
                <div className="absolute inset-0 -m-3 -rotate-6 rounded-xl bg-[#F72C1F] transition duration-150 ease-out group-hover:rotate-6 group-hover:scale-110" />
                <div className="absolute inset-0 -m-3 rotate-2 rounded-xl bg-[#F72C1F]/50 shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110" />
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-laravel relative inline-block size-8 text-white transition duration-150 ease-out group-hover:scale-125"
                >
                  <path
                    fill="currentColor"
                    d="M504.4 115.83a5.72 5.72 0 00-.28-.68 8.52 8.52 0 00-.53-1.25 6 6 0 00-.54-.71 9.36 9.36 0 00-.72-.94c-.23-.22-.52-.4-.77-.6a8.84 8.84 0 00-.9-.68L404.4 55.55a8 8 0 00-8 0L300.12 111a8.07 8.07 0 00-.88.69 7.68 7.68 0 00-.78.6 8.23 8.23 0 00-.72.93c-.17.24-.39.45-.54.71a9.7 9.7 0 00-.52 1.25c-.08.23-.21.44-.28.68a8.08 8.08 0 00-.28 2.08v105.24l-80.22 46.19V63.44a7.8 7.8 0 00-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35 8.35 0 00-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36 9.36 0 00-.72-.94 9.46 9.46 0 00-.78-.6 9.8 9.8 0 00-.88-.68L115.61 1.07a8 8 0 00-8 0L11.34 56.49a6.52 6.52 0 00-.88.69 7.81 7.81 0 00-.79.6 8.15 8.15 0 00-.71.93c-.18.25-.4.46-.55.72a7.88 7.88 0 00-.51 1.24 6.46 6.46 0 00-.29.67 8.18 8.18 0 00-.28 2.1v329.7a8 8 0 004 6.95l192.5 110.84a8.83 8.83 0 001.33.54c.21.08.41.2.63.26a7.92 7.92 0 004.1 0c.2-.05.37-.16.55-.22a8.6 8.6 0 001.4-.58L404.4 400.09a8 8 0 004-6.95V287.88l92.24-53.11a8 8 0 004-7V117.92a8.63 8.63 0 00-.24-2.09zM111.6 17.28l80.19 46.15-80.2 46.18-80.18-46.17zm88.25 60V278.6l-46.53 26.79-33.69 19.4V123.5l46.53-26.79zm0 412.78L23.37 388.5V77.32L57.06 96.7l46.52 26.8v215.18a6.94 6.94 0 00.12.9 8 8 0 00.16 1.18 5.92 5.92 0 00.38.9 6.38 6.38 0 00.42 1 8.54 8.54 0 00.6.78 7.62 7.62 0 00.66.84c.23.22.52.38.77.58a8.93 8.93 0 00.86.66l92.19 52.18zm8-106.17l-80.06-45.32 84.09-48.41 92.26-53.11 80.13 46.13-58.8 33.56zm184.52 4.57L215.88 490.11V397.8l130.72-74.6 45.77-26.15zm0-119.13L358.68 250l-46.53-26.79v-91.42l33.69 19.4L392.37 178zm8-105.28l-80.2-46.17 80.2-46.16 80.18 46.15zm8 105.28V178L455 151.19l33.68-19.4v91.39z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-bold">Laravel</h4>
            </div>
            <div className="py-5">
              <div className="group relative mb-8 ml-3 inline-flex size-12 items-center justify-center">
                <div className="absolute inset-0 -m-3 -rotate-6 rounded-xl bg-[#5ED3F3] transition duration-150 ease-out group-hover:rotate-6 group-hover:scale-110" />
                <div className="absolute inset-0 -m-3 rotate-2 rounded-xl bg-[#5ED3F3]/50 shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110" />
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-react relative inline-block size-8 text-white transition duration-150 ease-out group-hover:scale-125"
                >
                  <path
                    fill="currentColor"
                    d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-bold">React</h4>
            </div>
            <div className="py-5">
              <div className="group relative mb-8 ml-3 inline-flex size-12 items-center justify-center">
                <div className="absolute inset-0 -m-3 -rotate-6 rounded-xl bg-[#3FB27F] transition duration-150 ease-out group-hover:rotate-6 group-hover:scale-110" />
                <div className="absolute inset-0 -m-3 rotate-2 rounded-xl bg-[#3FB27F]/50 shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110" />
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-vue relative inline-block size-8 text-white transition duration-150 ease-out group-hover:scale-125"
                >
                  <path
                    fill="currentColor"
                    d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-bold">Vue.js</h4>
            </div>
            <div className="py-5">
              <div className="group relative mb-8 ml-3 inline-flex size-12 items-center justify-center">
                <div className="absolute inset-0 -m-3 -rotate-6 rounded-xl bg-[#D6002F] transition duration-150 ease-out group-hover:rotate-6 group-hover:scale-110" />
                <div className="absolute inset-0 -m-3 rotate-2 rounded-xl bg-[#D6002F]/50 shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110" />
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-angular relative inline-block size-8 text-white transition duration-150 ease-out group-hover:scale-125"
                >
                  <path
                    fill="currentColor"
                    d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-bold">Angular</h4>
            </div>
          </div>
          {/* END Features */}

          {/* Extra Info */}
          <p className="mb-10 text-center text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:mx-36 xl:mx-80">
            <span className="font-semibold">Oracle Private Server</span> comes
            with a fast processor, huge memory, and a big space block volume.
            It’s really an opportunity that you can’t miss. You will be able to
            save up huge money if you just follow this guide.
          </p>
          {/* END Extra Info */}
        </div>
      </div>
      {/* END Features Section: Key Features With Icons */}

      <div className="container mx-auto px-4 py-4 lg:px-8 xl:max-w-7xl">
        <div className="flex lg:flex-row-reverse"></div>
      </div>
    </>
  );
};

export default HomePage;
