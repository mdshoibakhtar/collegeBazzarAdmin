import React from "react";
import img1 from "../../../../src/assets/images/image-5.png";
function WhoAreSection() {
  return (
    <>
      <section className="who-we-are pt_120-pt p_relative theme_bg">
        <div className="auto-container">
          <div className="sec-title mb_50 text-center">
            <h5 className="mb_20 fs_16 fw_medium text-uppercase theme_color ff_rubik">
              Who We are
            </h5>{" "}
            <h2 className="fs_45 fw_sbold">
            Fine fortunate trading limited </h2>{" "}
          </div>
          <div className="video-box p_relative mb_40">
            <img decoding="async" src={img1} alt="Awesome Image" />{" "}
            <div className="video-btn">
              <a
                href="https://www.youtube.com/watch?v=hv8rs4zAl5Q"
                className="h_140 w_140 lh_140 text-center fs_40 theme_color d_iblock p_relative bg_white b_radius_50 tran_3 overlay-link play-now ripple"
                data-fancybox="gallery"
                data-caption
              >
                <i className="fas fa-play p_relative z_1" />
              </a>
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-lg-4 feature-icon-block style-one">
              <div
                className="inner-box mb_30 bg_white b_radius_5 p_30 pt_40 pb_40 wow animated fadeInUp animated"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="upper-box flexbox_3 align-items-center mb_30">
                  <div className="icon w_80 h_80 lh_85 text-center mr_20 theme_color fs_40 b_radius_5 mr_30">
                    <i className="fa icon-setting" />
                  </div>
                  <h4 className="fs_22 fw_bold">Maximum Purity</h4>
                </div>
                <div className="text">
                  Nulla a luctus nulla, eget lobortis sem. Suspendisse gravida,
                  velit at mollis auctor.
                </div>
              </div>
            </div>
            <div className="col-lg-4 feature-icon-block style-one">
              <div
                className="inner-box mb_30 bg_white b_radius_5 p_30 pt_40 pb_40 wow animated fadeInUp animated"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="upper-box flexbox_3 align-items-center mb_30">
                  <div className="icon w_80 h_80 lh_85 text-center mr_20 theme_color fs_40 b_radius_5 mr_30">
                    <i className="fa icon-drink-water" />
                  </div>
                  <h4 className="fs_22 fw_bold">5 Steps Filtration</h4>
                </div>
                <div className="text">
                  Aliquam dapibus ultricies tempor. Sed euismod sollicitudin
                  molestie consectetur.{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4 feature-icon-block style-one">
              <div
                className="inner-box mb_30 bg_white b_radius_5 p_30 pt_40 pb_40 wow animated fadeInUp animated"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="upper-box flexbox_3 align-items-center mb_30">
                  <div className="icon w_80 h_80 lh_85 text-center mr_20 theme_color fs_40 b_radius_5 mr_30">
                    <i className="fa icon-recycle-water" />
                  </div>
                  <h4 className="fs_22 fw_bold">Cholorine Free</h4>
                </div>
                <div className="text">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog MTV quiz graced
                </div>
              </div>
            </div>
          </div>
          <div className="funfacts pt_90">
            <div className="title text-center p_relative mb_65">
              <h2 className="fs_37 fw_sbold color_white d_iblock p_relative z_1">
                Our Achievements
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 funfact-block">
                <div className="inner-box mb_30">
                  <div className="flexbox_3 align-items-center">
                    <div className="icon w_75 h_75 lh_80 text-center mr_15 color_white fs_40 b_radius_50 mr_20">
                      <i className="fa icon-user" />
                    </div>
                    <div>
                      <div className="count-outer count-box fs_34 fw_sbold color_white ff_jost counted">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={35000}
                        >
                          35000
                        </span>
                      </div>
                      <div className="text color_white fs_18">
                        Happy Customers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 funfact-block">
                <div className="inner-box mb_30">
                  <div className="flexbox_3 align-items-center">
                    <div className="icon w_75 h_75 lh_80 text-center mr_15 color_white fs_40 b_radius_50 mr_20">
                      <i className="fa icon-document" />
                    </div>
                    <div>
                      <div className="count-outer count-box fs_34 fw_sbold color_white ff_jost counted">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={541}
                        >
                          541
                        </span>
                      </div>
                      <div className="text color_white fs_18">
                        Projects Done
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 funfact-block">
                <div className="inner-box mb_30">
                  <div className="flexbox_3 align-items-center">
                    <div className="icon w_75 h_75 lh_80 text-center mr_15 color_white fs_40 b_radius_50 mr_20">
                      <i className="fa icon-daimond" />
                    </div>
                    <div>
                      <div className="count-outer count-box fs_34 fw_sbold color_white ff_jost counted">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={40}
                        >
                          40
                        </span>
                      </div>
                      <div className="text color_white fs_18">Awards Win</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 funfact-block">
                <div className="inner-box mb_30">
                  <div className="flexbox_3 align-items-center">
                    <div className="icon w_75 h_75 lh_80 text-center mr_15 color_white fs_40 b_radius_50 mr_20">
                      <i className="fa icon-diagram" />
                    </div>
                    <div>
                      <div className="count-outer count-box fs_34 fw_sbold color_white ff_jost counted">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={678}
                        >
                          678
                        </span>
                      </div>
                      <div className="text color_white fs_18">Client Works</div>
                    </div>
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
export default WhoAreSection;
