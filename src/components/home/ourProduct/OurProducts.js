import React, { Component } from "react";
import Slider from "react-slick";
import { RxCross2 } from "react-icons/rx";
import { FaMapMarkerAlt } from "react-icons/fa";

import basicplan from "../../../assets/images/basic-plan.jpg";
import product2 from "../../../assets/images/shop-9.jpg";
import product3 from "../../../assets/images/shop-8.jpg";

import twoHuML from "../../../assets/images/img-slider/purenickel.jpg";
import productsize2 from "../../../assets/images/img-slider/magnesium-ingot-v1.jpg";

import carton200 from "../../../assets/images/img-slider/purenickel.jpg";
import container from "../../../assets/images/img-slider/silicon-metal-img.jpg";
import carton330 from "../../../assets/images/img-slider/magnesium-ingot-v1.jpg";
import cartondetails from "../../../assets/images/img-slider/tin-ingot.jpg";

function OurProducts() {
  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="product-section pt_120-pt">
        <div className="auto-container">
          <div className="sec-title mb_50 text-center">
            <h5 className="mb_20 fs_16 fw_medium text-uppercase theme_color ff_rubik">
              our products
            </h5>{" "}
            <h2 className="fs_45 fw_sbold">Recommended Products</h2>{" "}
          </div>
          <div className="row">
            <div className="col-lg-4 product-block">
              <div
                className="inner-box text-center mb_30 b_radius_5 pt_50 pb_35 wow animated fadeInUp animated"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="image p_relative z_1 mb_50">
                  <img
                    width={123}
                    height={129}
                    src={carton200}
                    className="attachment-paanee_123x220 size-paanee_123x220 wp-post-image"
                    alt
                    decoding="async"
                    loading="lazy"
                    srcSet={carton200}
                    sizes="(max-width: 123px) 100vw, 123px"
                  />
                </div>
                <div className="lower-content p_relative">
                  <h4 className="fs_20 fw_sbold mb_4">
                  Tin Ingot
                  </h4>
                  <p className="productPrice">₹ 2,155 / Kg</p>

                  <div className="size bg_white d_iblock py_3 px_20 b_radius_25 fs_14 ff_rubik mb_2">
                  <FaMapMarkerAlt /> MUMBAI
                  </div>
                  <div className="text mb_30">
                    <p>Shree Rajendra Metal Distributors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 product-block">
              <div
                className="inner-box text-center mb_30 b_radius_5 pt_50 pb_35 wow animated fadeInUp animated"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="image p_relative z_1 mb_50">
                  <img
                    width={123}
                    height={129}
                    src={carton330}
                    className="attachment-paanee_123x220 size-paanee_123x220 wp-post-image"
                    alt
                    decoding="async"
                    loading="lazy"
                    srcSet={carton330}
                    sizes="(max-width: 123px) 100vw, 123px"
                  />
                </div>
                <div className="lower-content p_relative">
                  <h4 className="fs_20 fw_sbold mb_4">Tin Metal Ingots</h4>
                  <p className="productPrice">₹ 3,000 / Kg</p>

                  <div className="size bg_white d_iblock py_3 px_20 b_radius_25 fs_14 ff_rubik mb_2">
                  <FaMapMarkerAlt /> MUMBAI
                    
                  </div>
                  <div className="text mb_30">
                    <p>Phoolchand Bhagatsingh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 product-block">
              <div
                className="inner-box text-center mb_30 b_radius_5 pt_50 pb_35 wow animated fadeInUp animated"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="image p_relative z_1 mb_50">
                  <img
                    width={123}
                    height={129}
                    src={cartondetails}
                    className="attachment-paanee_123x220 size-paanee_123x220 wp-post-image "
                    alt
                    decoding="async"
                    loading="lazy"
                    srcSet={cartondetails}
                    sizes="(max-width: 123px) 100vw, 123px"
                  />
                </div>
                <div className="lower-content p_relative">
                  <h4 className="fs_20 fw_sbold mb_4">Tin Ingots</h4>
                  <p className="productPrice">₹ 1,455 / Kg</p>
                  <div className="size bg_white d_iblock py_3 px_20 b_radius_25 fs_14 ff_rubik mb_2">
                  <FaMapMarkerAlt /> DELHI
                  </div>
                  <div className="text mb_30">
                    <p>Scramet Trading Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ownSlider">
        <div className="container">
          <div className="our_slider ">
            <Slider {...settings}>
              <div className="slid_box">
                <img src={productsize2} />
              </div>

              <div className="slid_box">
                <img src={container} className="img-fluid" />
              </div>

              <div className="slid_box">
                <img src={twoHuML} className="img-fluid" />
              </div>

              <div className="slid_box">
                <img src={cartondetails} className="img-fluid" />
              </div>

              <div className="slid_box">
                <img src={carton200} className="img-fluid" />
              </div>

              <div className="slid_box">
                <div className="per-carton-container">
                  <RxCross2 className="iconss-cross" />
                  <h4 className="bottle_pr_carton">40</h4>
                </div>
                <img src={carton330} />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
export default OurProducts;
