import React from "react";
import testimonial1 from "../../../../src/assets/images/testimonial.png";
import testimonial2 from "../../../../src/assets/images/testimonial-2.png";
import testimonial3 from "../../../../src/assets/images/testimonial-3.png";

import testimonialData from "./TestimonialData";

function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // option al, default to 1.
    },
  };
  return (
    <>
      <section className="testimonials-section pt_120-pt ">
        <div className="auto-container">
          <div className="sec-title mb_50 text-center">
            <h5 className="mb_20 fs_16 fw_medium text-uppercase theme_color ff_rubik">
              Client Testimonials
            </h5>
            <h2 className="fs_45 fw_sbold">What our clients say</h2>
          </div>
          {/* <div className="theme_carousel owl-theme owl-carousel owl-loaded owl-drag" data-options="{" loop": true, "center": false, "margin": 30, "autoheight":true, "lazyload":true, "nav": "dots": "autoplay": "autoplaytimeout": 6000, "smartspeed": 1000, "responsive":{ "0" :{ "items": "1" }, "480" "items" : "600" "768" "2" } , "992":{ "3" "1200":{ }}}"> */}
          <div className="theme_carousel owl-theme owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0.25s ease 0s",
                }}
              >
                <div className="owl-item active col-lg-4">
                  <div className="testimonial-block mb_60">
                    <div className="inner-box b_shadow_1 bg_white text-center px_25 b_radius_5">
                      <div className="thumbnail">
                        <img
                          width={98}
                          height={98}
                          src={testimonial1}
                          className="attachment-paanee_98x98 size-paanee_98x98 wp-post-image"
                          alt
                          decoding="async"
                          loading="lazy"
                          srcSet={{ testimonial1 }}
                          sizes="(max-width: 98px) 100vw, 98px"
                        />
                      </div>
                      <div className="text mb_25">
                        Aliquam erat volutpat. Proin pretium lobortis massa, eu
                        maximus neque iaculis nec, massa eget suscipit
                        imperdiet.
                      </div>
                      <div className="client">
                        <h4 className="fs_16 fw_bold mb_5">Eugene freeman</h4>
                        <div className="designation">Tincidunt</div>
                      </div>
                      <div className="quote-icon bg_white w_70 h_70 lh_80 text-center mr_15 theme_color fs_30 b_radius_50 b_shadow_1 mr_20 d_iblock">
                        <i className="icon-quote-left" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item active col-lg-4">
                  <div className="testimonial-block mb_60">
                    <div className="inner-box b_shadow_1 bg_white text-center px_25 b_radius_5">
                      <div className="thumbnail">
                        <img
                          width={98}
                          height={98}
                          src={{ testimonial2 }}
                          className="attachment-paanee_98x98 size-paanee_98x98 wp-post-image"
                          alt
                          decoding="async"
                          loading="lazy"
                          srcSet={testimonial2}
                          sizes="(max-width: 98px) 100vw, 98px"
                        />
                      </div>
                      <div className="text mb_25">
                        Donec vel arcu ac felis ultrices viverra non eget nulla.
                        Proin sed viverra magna. Donec dapibus lorem.
                      </div>
                      <div className="client">
                        <h4 className="fs_16 fw_bold mb_5">Kelly coleman</h4>
                        <div className="designation">Nulla nec</div>
                      </div>
                      <div className="quote-icon bg_white w_70 h_70 lh_80 text-center mr_15 theme_color fs_30 b_radius_50 b_shadow_1 mr_20 d_iblock">
                        <i className="icon-quote-left" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item active col-lg-4">
                  <div className="testimonial-block mb_60">
                    <div className="inner-box b_shadow_1 bg_white text-center px_25 b_radius_5">
                      <div className="thumbnail">
                        <img
                          width={98}
                          height={98}
                          src={testimonial3}
                          className="attachment-paanee_98x98 size-paanee_98x98 wp-post-image"
                          alt
                          decoding="async"
                          loading="lazy"
                          srcSet={testimonial3}
                          sizes="(max-width: 98px) 100vw, 98px"
                        />
                      </div>
                      <div className="text mb_25">
                        Vestibulum convallis dui a dui molestie sodales. Aliquam
                        viverra nisl ligula, ac dictum erat tincidunt vel.
                      </div>
                      <div className="client">
                        <h4 className="fs_16 fw_bold mb_5">Philip mendez</h4>
                        <div className="designation">Consectetur</div>
                      </div>
                      <div className="quote-icon bg_white w_70 h_70 lh_80 text-center mr_15 theme_color fs_30 b_radius_50 b_shadow_1 mr_20 d_iblock">
                        <i className="icon-quote-left" />
                      </div>
                    </div>
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
            <div className="owl-dots disabled">
              <button role="button" className="owl-dot active">
                <span />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Testimonials;
