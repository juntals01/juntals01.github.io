import PageFooter from "@/components/layouts/footer/PageFooter";
import PageHeader from "@/components/layouts/header/PageHeader";
import React from "react";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <PageHeader></PageHeader>
      <div className="bg-black-50">{children}</div>
      <PageFooter></PageFooter>
    </>
  );
};

export default PublicLayout;
