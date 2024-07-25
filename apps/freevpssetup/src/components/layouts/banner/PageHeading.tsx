import React from "react";

const PageHeading = ({
  highlight,
  title,
  description,
}: {
  highlight?: string;
  title: string;
  description?: string;
}) => {
  return (
    <div>
      {/* Page Header Section: Simple with Cover */}
      <div
        className="bg-cover bg-bottom"
        style={{
          backgroundImage:
            'url("https://cdn.tailkit.com/media/placeholders/photo-Nyvq2juw4_o-1280x400.jpg")',
        }}
      >
        <div className="bg-white/90 dark:bg-gray-900/90 dark:text-gray-100">
          <div className="container mx-auto space-y-8 px-4 py-12 lg:px-8 lg:py-12 xl:max-w-7xl">
            <div className="text-center">
              {highlight && (
                <div className="mb-1 text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-500">
                  {highlight}
                </div>
              )}

              <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
                {title}
              </h2>
              {description && (
                <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 lg:w-2/3">
                  {description}
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* END Page Header Section: Simple with Cover */}
    </div>
  );
};

export default PageHeading;
