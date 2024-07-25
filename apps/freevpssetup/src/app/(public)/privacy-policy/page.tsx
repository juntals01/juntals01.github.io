import PrivacyPolicyContent from "@/components/content/PrivacyPolicyContent";
import PageHeading from "@/components/layouts/banner/PageHeading";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PageHeading title="Privacy Policy" />
      <div className="container mx-auto px-4 py-6 lg:px-8 xl:max-w-7xl ">
        <div className="bg-white rounded-xl py-4 px-8">
          <PrivacyPolicyContent />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
