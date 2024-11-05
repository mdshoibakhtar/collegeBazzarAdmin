import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../../../src/assets/images/new-img/logo/logo.png";
function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="upper-box">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="top-info">
                  <div className="row">
                    <div className="col-md-6 column">
                      <div className="info-block">
                        <div className="icon">
                          <i className="icon-email" />
                        </div>
                        <div className="text">
                          <p>
                            Main Email :{" "}
                            <a href="mailto:  info@finefortunate.pro">  info@finefortunate.pro</a>
                          </p>{" "}
                          <p>
                            Inquiries :{" "}
                            <a href="mailto:  info@finefortunate.pro"> info@finefortunate.pro</a>
                          </p>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 column">
                      <div className="info-block">
                        <div className="icon">
                          <i className="icon-phone" />
                        </div>
                        <div className="text">
                          <p>
                            Office Telephone :{" "}
                            <a href="tel:21245678900">21245678900</a>
                          </p>{" "}
                          <p>
                            Mobile :{" "}
                            <a href="tel:9542058487">+9542058487</a>
                          </p>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Widgets Section*/}
            <div className="widgets-section">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div
                    id="paanee_about_company-2"
                    className="footer-widget widget_paanee_about_company"
                  >
                    {/*Footer Column*/}
                    <div className="about-widget">
                      <h3 className="widget-title">About Us</h3>
                      <div className="text">
                      Fine fortunate trading limited is India’s largest online B2B marketplace, connecting buyers with suppliers. With 60% market share of the online B2B Classified space in India,
                        <br></br>
                        <Link to="/about" style={{ color: "white" }}>
                          Read More
                        </Link>
                      </div>
                      {/* <div class="location">
              <div class="icon"><i class="icon-address"></i></div>
              <div class="text">2416 Mapleview Drive <br> Tampa, FL 33634</div>
          </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div id="pages-2" className="footer-widget widget_pages">
                    <h3 className="widget-title">Useful Links</h3>
                    <ul>
                      <li className="page_item page-item-26">
                        <Link to="/home">Home</Link>
                      </li>
                      <li className="page_item page-item-823">
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="page_item page-item-43">
                        <Link to="/water-for-health">Products</Link>
                      </li>
                      <li className="page_item page-item-43">
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li className="page_item page-item-43">
                        <Link to="/blogs">Blogs</Link>
                      </li>
                      <li className="page_item page-item-43">
                        <Link to="/video">Video</Link>
                      </li>
                      <li className="page_item page-item-53">
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      {/* <li className="page_item page-item-27">
                      <Link href="#">Home</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div
                    id="nav_menu-3"
                    className="footer-widget widget_nav_menu"
                  >
                    <h3 className="widget-title">Contact</h3>
                    <div className="menu-service-sidebar-menu-container">
                      
                      <ul className="list color_white">
                        <li className="mb_45 flexbox_1">
                          {/* <div className="icon w_55 h_55 lh_60 text-center mr_20 bg_white theme_color fs_30 b_radius_5">
                            <i className="icon-address" />
                          </div> */}
                          <div>
                            <h4 className="fs_16 fw_bold color_white mb_10">
                              Our Address
                            </h4>
                            <div className="text color_white">
                            Kh. No. - 44/14, Ground Floor, behind Dost Dharam Kanta, Shahbad Daulatpur Village, New Delhi, Delhi 110042
                            </div>
                          </div>
                        </li>
                        
                        <li className="mb_45 flexbox_1">
                          
                          <div>
                            <h4 className="fs_16 fw_bold color_white mb_10">
                              Our Email
                            </h4>
                            <div className="text color_white">
                              Main Email :
                              <a
                                className="footer_mail"
                                href="mailto:   info@finefortunate.pro"
                              >
                                {" "}
                                 info@finefortunate.pro
                              </a>
                              <br />
                              Inquiries :
                              <a
                                className="footer_mail"
                                href="mailto:  info@finefortunate.pro"
                              >
                                 info@finefortunate.pro
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div
                    id="paanee_subscribe_form-2"
                    className="footer-widget widget_paanee_subscribe_form"
                  >
                    {/* Newsletter Widget */}
                    <div className="newsletter-widget">
                      <h3 className="widget-title">Search</h3>{" "}
                      <div className="searchBox">
                        <input type="text" name="name" placeholder="Search" className="form-control mb-3" autoComplete="off" />
                        <button className="w-100 btn btn-warning fw-bold footerSearch">SEARCH</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="wrapper-box">
              <div className="copyright-text text-center">
                Copyright ©2023 Fine fortunate trading limited All Rights Reserved, Powered
                By
                <a target="_blank" href="https://www.abarissoftech.com/" className="ps-1 text-decoration-underline">
                  Abaris Softech
                </a>
              </div>
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
