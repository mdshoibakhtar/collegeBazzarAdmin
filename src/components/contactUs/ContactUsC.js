
import contact_cover from "../../assets/images/cover/contact-cover.png"
import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <section
        className="page-title page-title-2"
        style={{
          backgroundImage:
          `url(${contact_cover})`,
          backgroundPosition: "bottom !important"
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="content-wrapper">
              <div className="title">
                <h1>Contact Us</h1>
              </div>
              <ul className="bread-crumb clearfix">
                <li className="breadcrumb-item">
                  <Link to="/home">Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <div className="auto-container">
          <div className="wrapper-box b_shadow_1 b_radius_5 px_50 pt_60 pb_35">
            <div className="row">
              <div className="col-lg-7">
                <div className="sec-title mb_30">
                  <h2 className="fs_45 fw_sbold">Request A Contact</h2>
                  <div className="text">
                    We will be happy to answer your questions.
                  </div>
                </div>
                <div className="contact-form">
                  <div
                    role="form"
                    className="wpcf7"
                    id="wpcf7-f498-p53-o1"
                    lang="en-US"
                    dir="ltr"
                  >
                    <div className="screen-reader-response">
                      <p role="status" aria-live="polite" aria-atomic="true" />
                      <ul />
                    </div>
                    <form
                      action="/newwp/paanee/contact/#wpcf7-f498-p53-o1"
                      method="post"
                      className="wpcf7-form init"
                      noValidate="novalidate"
                      data-status="init"
                    >
                      <div style={{ display: "none" }}>
                        <input type="hidden" name="_wpcf7" defaultValue={498} />
                        <input
                          type="hidden"
                          name="_wpcf7_version"
                          defaultValue="5.5.2"
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_locale"
                          defaultValue="en_US"
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_unit_tag"
                          defaultValue="wpcf7-f498-p53-o1"
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_container_post"
                          defaultValue={53}
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_posted_data_hash"
                          defaultValue
                        />
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <span className="wpcf7-form-control-wrap text-343">
                            <input
                              type="text"
                              name="text-343"
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              
                              aria-invalid="false"
                              placeholder="Your Name *"
                              fdprocessedid="5y77ok"
                            />
                          </span>
                        </div>
                        <div className="form-group col-md-6">
                          <span className="wpcf7-form-control-wrap email-947">
                            <input
                              type="email"
                              name="email-947"
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                              
                              aria-invalid="false"
                              placeholder="Your email"
                              fdprocessedid="hsqebr"
                            />
                          </span>
                        </div>
                        <div className="form-group col-md-6">
                          <span className="wpcf7-form-control-wrap text-344">
                            <input
                              type="text"
                              name="text-344"
                              size={40}
                              className="wpcf7-form-control wpcf7-text"
                              aria-invalid="false"
                              placeholder="Phone"
                              fdprocessedid="4vq3nq"
                            />
                          </span>
                        </div>
                        <div className="form-group col-md-6">
                          <span className="wpcf7-form-control-wrap text-345">
                            <input
                              type="text"
                              name="text-345"
                              size={40}
                              className="wpcf7-form-control wpcf7-text"
                              aria-invalid="false"
                              placeholder="Subject"
                              fdprocessedid="87ioq"
                            />
                          </span>
                        </div>
                        <div className="form-group col-md-12">
                          <span className="wpcf7-form-control-wrap textarea-987">
                            <textarea
                              name="textarea-987"
                              cols={40}
                              rows={10}
                              className="wpcf7-form-control wpcf7-textarea"
                              aria-invalid="false"
                              placeholder="Massage"
                            />
                          </span>
                        </div>
                        <div className="form-group col-md-12">
                          <button
                            className="theme_btn_1 paanee_btn"
                            type="button"
                            data-loading-text="Please wait..."
                          >
                            <span>
                              Send Message <i className="flaticon-next" />
                            </span>
                          </button>
                        </div>
                      </div>
                      <div
                        className="wpcf7-response-output"
                        aria-hidden="true"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contact-info theme_bg px_30 pt_40 pb_1">
                  <h3 className="title fs_30 fw_bold color_white mb_30">
                    Contact Us
                  </h3>
                  <div className="contact-info">
                    <ul className="list color_white">
                      
                      <li className="mb_45 flexbox_1">
                        <div className="icon w_55 h_55 lh_60 text-center mr_20 bg_white theme_color fs_30 b_radius_5">
                          <i className="icon-phone" />
                        </div>
                        <div>
                          <h4 className="fs_16 fw_bold color_white mb_10">
                            Our Phone
                          </h4>
                          <div className="text color_white">
                            Office Telephone :
                            <a
                              className="color_white"
                              href="tel:+2124567890"
                            >
                              2124567890
                            </a>
                            <br />
                            Mobile :
                            <a
                              className="color_white"
                              href="tel:+9542058487"
                            >
                              +9542058487
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-4 flexbox_1">
                        <div className="icon w_55 h_55 lh_60 text-center mr_20 bg_white theme_color fs_30 b_radius_5">
                          <i className="icon-email" />
                        </div>
                        <div>
                          <h4 className="fs_16 fw_bold color_white mb_10">
                            Our Email
                          </h4>
                          <div className="text color_white">
                            Main Email :
                            <a
                              className="color_white"
                              href="mailto:   info@finefortunate.pro"
                            >
                              {" "}
                               info@finefortunate.pro
                            </a>
                            <br />
                            Inquiries :
                            <a
                              className="color_white"
                              href="mailto:  info@finefortunate.pro"
                            >
                               info@finefortunate.pro
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb_45 flexbox_1">
                        
                        <div>
                          <h4 className="fs_16 fw_bold color_white mb_10 mt-2">
                           OUR ADDRESS
                          </h4>
                          <div className="text color_white">
                          Kh. No. - 44/14, Ground Floor, behind Dost Dharam Kanta, Shahbad Daulatpur Village, New Delhi, Delhi 110042
                          </div>
                        </div>
                      </li>

                    </ul>
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
export default ContactUs;
