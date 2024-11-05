import React from "react";
import Slider from "react-slick";
import ocean1 from "../../../assets/images/ocean1.jpg";
import shap1 from "../../../../src/assets/images/shape.png";
import shap3 from "../../../../src/assets/images/shape-2.png";

import { Link } from "react-router-dom";
function Banner() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      {/* <section
        className="elementor-section elementor-top-section elementor-element elementor-element-4edc2f7 elementor-section-full_width elementor-section-height-default elementor-section-height-default "
        data-id="4edc2f7"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2df8780"
            data-id="2df8780"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-93d8efe elementor-widget elementor-widget-paanee_banner_1"
                data-id="93d8efe"
                data-element_type="widget"
                data-widget_type="paanee_banner_1.default"
              >
                <div className="elementor-widget-container">
                  <section className="banner-section">
                    <div
                      className="swiper-container banner-slider swiper-container-fade swiper-container-initialized swiper-container-horizontal"
                      style={{ cursor: "grab" }}
                    >
                      <div
                        className="swiper-wrapper"
                        style={{ transitionDuration: "0ms" }}
                      >
                        <div
                          className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                          data-swiper-slide-index={1}
                          style={{
                            width: 1519,
                            transitionDuration: "0ms",
                            opacity: 1,
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                        >
                          <div className="content-outer">
                            <div className="content-box">
                              <div className="inner">
                                <div className="text fs_16 fw_medium lh_34 theme_color">
                                  MARKETS &amp; RESOURCES
                                </div>
                                <h1 className="fs_60 fw_sbold lh_70">
                                  Delivered Right <br /> To Your Home &amp;
                                  <br /> Office Door.
                                </h1>
                                <div className="link-box">
                                  <Link
                                    to="/contact"
                                    className="theme_btn_1 paanee_btn"
                                  >
                                    <span>Get a Quote</span>
                                  </Link>{" "}
                                  <Link
                                    to="/about"
                                    className="theme_btn_2 paanee_btn"
                                  >
                                    <span>Read More</span>
                                  </Link>{" "}
                                </div>
                              </div>
                              <div className="image">
                                <div className="image-one ">
                                  <img
                                    className="ocean-first"
                                    decoding="async"
                                    src={ocean1}
                                    alt="Awesome Image"
                                  />
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="swiper-slide swiper-slide-duplicate-active"
                          data-swiper-slide-index={0}
                          style={{
                            width: 1519,
                            transitionDuration: "0ms",
                            opacity: 1,
                            transform: "translate3d(-1519px, 0px, 0px)",
                          }}
                        >
                          <div className="content-outer">
                            <div className="content-box">
                              <div className="inner inner_resp">
                                <div className="text fs_16 fw_medium lh_34 theme_color">
                                  MARKETS &amp; RESOURCES
                                </div>
                                <h1 className="fs_60 fw_sbold lh_70">
                                Manganese <br /> Metal

                                </h1>
                                <div className="link-box">
                                  <Link
                                    to="/contact"
                                    className="theme_btn_1 paanee_btn"
                                  >
                                    <span>Get a Quote</span>
                                  </Link>{" "}
                                  <Link
                                    to="/about"
                                    className="theme_btn_2 paanee_btn"
                                  >
                                    <span>Read More</span>
                                  </Link>{" "}
                                </div>
                              </div>
                              <div className="image">
                                <div className="image-one">
                                  <img
                                    className="ocean_img"
                                    decoding="async"
                                    src={ocean1}
                                    alt="Awesome Image"
                                  />
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                          data-swiper-slide-index={1}
                          style={{
                            width: 1519,
                            transitionDuration: "0ms",
                            opacity: 1,
                            transform: "translate3d(-3038px, 0px, 0px)",
                          }}
                        >
                          <div className="content-outer">
                            <div className="content-box ">
                              <div className="inner">
                                <div className="text fs_16 fw_medium lh_34 theme_color">
                                  MARKETS &amp; RESOURCES
                                </div>
                                <h1 className="fs_60 fw_sbold lh_70">
                                  Delivered Right <br /> To Your Home &amp;
                                  <br /> Office Door.
                                </h1>
                                <div className="link-box">
                                  <Link
                                    to="/contact"
                                    className="theme_btn_1 paanee_btn"
                                  >
                                    <span>Get a Quote</span>
                                  </Link>{" "}
                                  <Link
                                    to="/about"
                                    className="theme_btn_2 paanee_btn"
                                  >
                                    <span>Read More</span>
                                  </Link>{" "}
                                </div>
                              </div>
                              <div className="image">
                                <div className="image-one">
                                  <img
                                    decoding="async"
                                    src="images/slide-v1-1-image1.png"
                                    alt="Awesome Image"
                                  />
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                          data-swiper-slide-index={0}
                          style={{
                            width: 1519,
                            transitionDuration: "0ms",
                            opacity: 1,
                            transform: "translate3d(-4557px, 0px, 0px)",
                          }}
                        >
                          <div className="content-outer">
                            <div className="content-box content-box-2 content_resp">
                              <div className="inner inner_resp">
                                <div className="text fs_16 fw_medium lh_34 theme_color">
                                  MARKETS &amp; RESOURCES
                                </div>
                                <h1 className="fs_60 fw_sbold lh_70">
                                Manganese <br /> Metal

                                </h1>
                                <div className="link-box">
                                  <Link
                                    to="/contact"
                                    className="theme_btn_1 paanee_btn"
                                  >
                                    <span>Get a Quote</span>
                                  </Link>{" "}
                                  <Link
                                    to="/about"
                                    className="theme_btn_2 paanee_btn"
                                  >
                                    <span>Read More</span>
                                  </Link>{" "}
                                </div>
                              </div>
                              <div className="image">
                                <div className="image-one">
                                  <img
                                    decoding="async"
                                    src={ocean1}
                                    alt="Awesome Image"
                                  />
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      />
                    </div>
                    <div className="shape-one">
                      <img decoding="async" src={shap1} alt="Awesome Image" />
                    </div>

                    <div className="shape-three">
                      <img decoding="async" src={shap3} alt="Awesome Image" />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bannerWrapper">
        <Slider {...settings}>
          <div className="innerItem">
            <img
              src="https://kotharimetal.com/wp-content/uploads/2022/06/nickel-banner.jpg"
              alt="Banner"
              className="img-fluid"
            />
            <div className="bannerContent">
              <h3>
                <span className="text">Nickel</span>
              </h3>

              <p>Fine fortunate trading limited </p>
            </div>
          </div>
          <div className="innerItem">
            <img
              src="https://kotharimetal.com/wp-content/uploads/2022/06/silicon-metal.jpg"
              alt="Banner"
              className="img-fluid"
            />
            <div className="bannerContent">
              <h3>
                <span className="text">Manganese Metal</span>
              </h3>

              <p>Fine fortunate trading limited </p>
            </div>
          </div>
          <div className="innerItem">
            <img
              src="
            https://kotharimetal.com/wp-content/uploads/2022/06/magnesium-ingot-v3.jpg"
              alt="Banner"
              className="img-fluid"
            />
            <div className="bannerContent">
              <h3>
                <span className="text">Copper Cathode</span>
              </h3>

              <p>Fine fortunate trading limited </p>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
export default Banner;
