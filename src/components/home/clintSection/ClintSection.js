import React from "react";
import clint1 from "../../../../src/assets/images/clients-logo-2.png";
import clint2 from "../../../../src/assets/images/clients-logo-3.png";
import clint3 from "../../../../src/assets/images/clients-logo-4.png";
function ClintSection() {
  return (
    <>
      {/* <div className="theme_carousel owl-theme owl-carousel owl-loaded owl-drag" data-options="{" loop": true, "center": false, "margin": 40, "autoheight":true, "lazyload":true, "nav": "dots": "autoplay": "autoplaytimeout": 6000, "smartspeed": 1000, "responsive":{ "0" :{ "items": "1" }, "480" "items" : "600" "2" "768" "3" } , "992":{ "4" "1200":{ "5" }}}"></> */}
      <section className="clients-logo-section py_70">
        <div className="auto-container">
          <div className="theme_carousel owl-theme owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 1950,
                }}
              >
                <div className="owl-item active" style={{ width: 390 }}>
                  <div className="single-client-logo">
                    <a href="#">
                      <img decoding="async" src={clint1} alt="Awesome Image" />
                    </a>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: 390 }}>
                  <div className="single-client-logo">
                    <a href="#">
                      <img decoding="async" src={clint2} alt="Awesome Image" />
                    </a>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: 390 }}>
                  <div className="single-client-logo">
                    <a href="#">
                      <img decoding="async" src={clint3} alt="Awesome Image" />
                    </a>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 390 }}>
                  <div className="single-client-logo">
                    <a href="#">
                      <img
                        decoding="async"
                        src="images/clients-logo-1.png"
                        alt="Awesome Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 390 }}>
                  <div className="single-client-logo">
                    <a href="#">
                      <img
                        decoding="async"
                        src="images/clients-logo-4.png"
                        alt="Awesome Image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots">
              <button role="button" className="owl-dot active">
                <span />
              </button>
              <button role="button" className="owl-dot">
                <span />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ClintSection;
