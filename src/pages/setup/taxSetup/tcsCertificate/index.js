import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import TcsCertificate from "../../../../components/setup/taxSetup/tcsCertificate/TcsCertificate";

function TcsCertificatePage() {
  const breadCrumbsTitle = {
    title_1: "TCS Certificate",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <TcsCertificate />
    </>
  );
}

export default TcsCertificatePage;
