import React from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import BankBook from "../../../../components/kingsonreports/AccountBook/bankBook/BankBook";

function BankBookPage() {
  const breadCrumbsTitle = {
    title_1: "Bank Book",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <BankBook />
    </>
  );
}

export default BankBookPage;
