import React from "react";
import fine_gst from "../../assets/legals/fine-mum-gst.pdf";
import gst_certificate from "../../assets/legals/gst-certificate.pdf";
import iso_certificate from "../../assets/legals/iso-certificate.pdf";

const Legals = () => {
  return (
    <>
      <section className="legalsWrap ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-3">
              <div className="legalInner">
                <object data={fine_gst} width="100%" height="500"></object>
                <span className="disabledDownload"></span>
              </div>
            </div>
            <div className="col-lg-12 mb-3">
              <div className="legalInner">
                <object
                  data={gst_certificate}
                  width="100%"
                  height="500"
                ></object>
                <span className="disabledDownload"></span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="legalInner">
                <object
                  data={iso_certificate}
                  width="100%"
                  height="500"
                ></object>
                <span className="disabledDownload"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Legals;
