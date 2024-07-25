import GuideLinks from "@/lib/guideLinks";
import Image from "next/image";
import React from "react";

const GuidePage = () => {
  return (
    <div>
      {GuideLinks.map((card) => (
        <>
          {/* Cards: Story */}
          <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
            {/* Card Cover */}
            <div>
              <Image
                width={500}
                height={200}
                className="object-cover w-full h-80"
                src={card.image}
                alt={card.label}
              />
            </div>
            {/* END Card Cover */}

            {/* Card Body */}
            <div className="grow p-5">
              <h3 className="text-xl font-semibold my-1">
                <a
                  className="hover:text-secondary text-primary"
                  href={card.slug}
                >
                  {card.label}
                </a>
              </h3>
              <p className="mb-0 bt-10 space-y-2">{card.description}</p>
            </div>
            {/* END Card Body */}
          </div>
          {/* END Cards: Story */}
        </>
      ))}
    </div>
  );
};

export default GuidePage;
