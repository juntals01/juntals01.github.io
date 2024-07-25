import React from "react";

const PageFooter = () => {
  return (
    <div>
      {/* Footer Section: Simple with Social Brand */}
      <div className="dark">
        <footer
          id="page-footer"
          className="bg-white dark:bg-primary-900 dark:text-gray-100"
        >
          <div className="container mx-auto flex flex-col gap-6 px-4 py-16 text-center text-sm lg:flex-row-reverse lg:gap-0 lg:px-8 lg:py-32 xl:max-w-7xl">
            <nav className="space-x-4 lg:w-1/3 lg:text-right">
              <a
                href="https://www.facebook.com/profile.php?id=61560872241085"
                className="text-gray-400 hover:text-[#1877f2] dark:text-white/80 dark:hover:text-[#1877f2]"
              >
                <svg
                  className="icon-facebook inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </nav>
            <nav className="space-x-2 sm:space-x-4 lg:w-1/3 lg:text-center">
              <a
                href="/about"
                className="font-medium text-gray-700 hover:text-gray-950 dark:text-white/80 dark:hover:text-white"
              >
                About
              </a>
              <a
                href="/terms-of-service"
                className="font-medium text-gray-700 hover:text-gray-950 dark:text-white/80 dark:hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="/privacy-policy"
                className="font-medium text-gray-700 hover:text-gray-950 dark:text-white/80 dark:hover:text-white"
              >
                Privacy Policy
              </a>
            </nav>
            <div className="text-gray-500 dark:text-white/70 lg:w-1/3 lg:text-left">
              <span className="font-medium">FreeVPSsetup</span> ©
            </div>
          </div>
        </footer>
      </div>
      {/* END Footer Section: Simple with Social Brand */}
    </div>
  );
};

export default PageFooter;
