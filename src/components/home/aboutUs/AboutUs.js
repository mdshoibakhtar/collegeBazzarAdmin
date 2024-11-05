import React from "react";
import silicon_metal_img from "../../../assets/images/img-slider/silicon-metal-img.jpg";
function AboutUs() {
  return (
    <>
      <section className="why-chooseus-three pt_120-pt">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-7 image-column z_9 mb_30">
              <div className="why-choose-image clearfix">
                <div className="shape" />
                <div
                  className="image-one wow animated fadeInUp animated animated"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <img
                    decoding="async"
                    src={silicon_metal_img}
                    alt="Awesome Image"
                  />
                </div>
                {/* <div
                  className="image-two wow animated fadeInDown animated animated"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0.1s",
                    animationName: "fadeInDown",
                  }}
                >
                  <img
                    decoding="async"
                    src="http://fastwpdemo.com/newwp/paanee/wp-content/uploads/2021/09/image-20.png"
                    alt="Awesome Image"
                  />
                </div>
                <div className="icon w_130 h_130 lh_140 text-center mr_15 theme_bg color_white fs_40 b_radius_50 mr_20">
                  <i className="icon-setting" />
                </div> */}
              </div>
            </div>
            <div className="col-lg-5 content-column mb_30">
              <div className="outer-box why-chooseus-block">
                <div
                  className="inner-container wow animated fadeInUp animated animated"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <h5 className="mb_20 fs_16 fw_medium text-uppercase ff_rubik theme_color">
                    ABOUT US
                  </h5>{" "}
                  <h2 className="fs_45 fw_sbold mb_30">
                    Fine fortunate trading limited
                  </h2>{" "}
                  <div className="text mb_30">
                    <p>
                      Fine fortunate trading limited is India’s largest online B2B marketplace,
                      connecting buyers with suppliers. With 60% market share of
                      the online B2B Classified space in India, the channel
                      focuses on providing a platform to Small & Medium
                      Enterprises (SMEs), Large Enterprises as well as
                      individuals. Founded in 1999, the company’s mission is ‘to
                      make doing business easy’.
                    </p>
                  </div>
                  <h4 className="mb-2">Fine fortunate for Buyers</h4>
                  <ul className="list">
                    <li>
                      <i className="fa fa-check mr_10 theme_bg w_25 h_25 lh_30 text-center mr_15 color_white fs_10 b_radius_50 b_shadow_1 mr_20 d_iblock va_middle" />
                      – Convenience of connecting with sellers anytime, anywhere
                    </li>
                    <li>
                      <i className="fa fa-check mr_10 theme_bg w_25 h_25 lh_30 text-center mr_15 color_white fs_10 b_radius_50 b_shadow_1 mr_20 d_iblock va_middle" />
                      – Wider marketplace with a range of products and suppliers
                    </li>
                  </ul>
                  <h4 className="mt-4 mb-2">Fine fortunate for Suppliers</h4>
                  <ul className="list">
                    <li>
                      <i className="fa fa-check mr_10 theme_bg w_25 h_25 lh_30 text-center mr_15 color_white fs_10 b_radius_50 b_shadow_1 mr_20 d_iblock va_middle" />{" "}
                      – Enhanced business visibility
                    </li>
                    <li>
                      <i className="fa fa-check mr_10 theme_bg w_25 h_25 lh_30 text-center mr_15 color_white fs_10 b_radius_50 b_shadow_1 mr_20 d_iblock va_middle" />{" "}
                      – Increased credibility for your brand
                    </li>
                    <li>
                      <i className="fa fa-check mr_10 theme_bg w_25 h_25 lh_30 text-center mr_15 color_white fs_10 b_radius_50 b_shadow_1 mr_20 d_iblock va_middle" />{" "}
                      – Lead Management System
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUs;
