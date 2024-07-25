import TermsOfServiceContent from "@/components/content/TermsOfServiceContent";
import PageHeading from "@/components/layouts/banner/PageHeading";
import React from "react";

const TermsOfServicePage = () => {
  return (
    <div>
      <PageHeading title="Terms of Service" />
      <div className="container mx-auto px-4 py-6 lg:px-8 xl:max-w-7xl ">
        <div className="bg-white rounded-xl py-4 px-8">
          <TermsOfServiceContent />
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
