import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import SalesChallanBook from "../../../../components/kingsonreports/challanBook/salesChallanBook/SalesChallanBook";

function SalesChallanBookPage() {
  const breadCrumbsTitle = {
    title_1: "Challan Register",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <SalesChallanBook />
    </>
  );
}

export default SalesChallanBookPage;
