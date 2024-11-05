import React from "react";
import nickel_banner from "../../../assets/images/coppper-cathode-v2.jpg";
import workerImgshap from "../../../../src/assets/images/shape-6.png";
function ExprienceWorker() {
  return (
    <>
      <section className="fullwidth-section">
        <div className="auto-container w-100 p-0">
          <div className="row no-gutters">
            <div
              className="col-lg-6 image-column z_9"
              style={{ backgroundImage: `url(${nickel_banner})` }}
            >
              <div className="image">
                <img
                  decoding="async"
                  src="images/image-4-1.png"
                  alt="Awesome Image"
                />
              </div>
              <div
                className="iconbox p_absolute l_0 b_0 theme_bg p_30 flexbox_1 align-items-center pr_50 b_radius_5 wow animated fadeInUp animated"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon w_80 h_80 lh_80 text-center mr_20 color_white fs_25 b_radius_5">
                  <i className="icon icon-users" />
                </div>
                <div>
                  <h5 className="fs_30 fw_bold color_white">160+</h5>{" "}
                  <p className="fs_18 mb_0">Million Buyers</p>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-6 content-column">
              <div
                className="outer-box theme_bg py_120 p_relative wow animated fadeInUp animated"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="shape-bg shape-bg-2">
                  <img
                    decoding="async"
                    src={workerImgshap}
                    alt="Awesome Image"
                  />
                </div>{" "}
                <div className="inner-container p_relative">
                  <h2 className="fs_45 fw_sbold color_white mb_30">About Us</h2>
                  <div className="text color_white mb_30">
                    Fine fortunate trading limited is India’s largest online B2B marketplace,
                    connecting buyers with suppliers. With 60% market share of
                    the online B2B Classified space in India, the channel
                    focuses on providing a platform to Small & Medium
                    Enterprises (SMEs), Large Enterprises as well as
                    individuals. Founded in 1999, the company’s mission is ‘to
                    make doing business easy’.
                  </div>
                 
                  <div className="link-btn mt_25">
                    <a
                      href="#"
                      className="theme_btn_2 paanee_btn small_btn_light"
                    >
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ExprienceWorker;
