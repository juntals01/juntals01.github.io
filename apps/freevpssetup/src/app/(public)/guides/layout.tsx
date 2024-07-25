import PageFooter from "@/components/layouts/footer/PageFooter";
import PageHeader from "@/components/layouts/header/PageHeader";
import React from "react";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-black-50">
      <div className="container mx-auto px-4 py-8 lg:px-8 xl:max-w-7xl ">
        <div className="lg:w-9/12">{children}</div>
        <div className="lg:w-3/12"></div>
      </div>
    </div>
  );
};

export default PublicLayout;
