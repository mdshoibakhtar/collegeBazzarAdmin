import React from "react";

import { Link } from "react-router-dom";

import logoMobile from "../../../assets/images/new-img/logo/logo.png";

function MobileMenu() {
  const hideModal = (event) => {
    document.body.classList.remove("mobile-menu-visible");
    this.setState({ showModal: false });
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn" onClick={hideModal}>
          <span className="fal fa-times" />
        </div>
        <nav className="menu-box mCustomScrollbar _mCS_1 mCS_no_scrollbar">
          <div
            id="mCSB_1"
            className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
            
            tabIndex={0}
          >
            <div
              id="mCSB_1_container"
              className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
              style={{ position: "relative", top: 0, left: 0 }}
              dir="ltr"
            >
              <div className="nav-logo">
                <Link to="/home" title="Paanee">
                  <img
                    src={logoMobile}
                    alt="logo"
                    width="100%"
                    className="mCS_img_loaded"
                  />
                </Link>
              </div>

              <div className="menu-outer">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation">
                    <li
                      id="menu-item-56"
                      className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-56 dropdown active current"
                    >
                      <Link
                        title="Home"
                        to="/home"
                        data-toggle="dropdown1"
                        className="hvr-underline-from-left1"
                        aria-expanded="false"
                        data-scroll
                        data-options="easing: easeOutQuart"
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      id="menu-item-58"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58"
                    >
                      <Link
                        title="About Us"
                        to="/about"
                        className="hvr-underline-from-left1"
                        data-scroll
                        data-options="easing: easeOutQuart"
                      >
                        About Us
                      </Link>
                    </li>
                    <li
                      id="menu-item-58"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58"
                    >
                      <Link
                        title="About Us"
                        to="/water-for-health"
                        className="hvr-underline-from-left1"
                        data-scroll
                        data-options="easing: easeOutQuart"
                      >
                        Water For Health
                      </Link>
                    </li>

                    <li
                      id="menu-item-58"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58"
                    >
                      <Link
                        title="About Us"
                        to="/gallery"
                        className="hvr-underline-from-left1"
                        data-scroll
                        data-options="easing: easeOutQuart"
                      >
                        Gallery
                      </Link>
                    </li>

                    <li
                      id="menu-item-58"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58"
                    >
                      <Link
                        title="About Us"
                        to="/video"
                        className="hvr-underline-from-left1"
                        data-scroll
                        data-options="easing: easeOutQuart"
                      >
                        Video
                      </Link>
                    </li>

                    <li
                      id="menu-item-63"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"
                    >
                      <Link
                        title="Contact"
                        to="/contact"
                        className="hvr-underline-from-left1"
                        data-scroll
                        data-options="easing: easeOutQuart"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="social-links">
                <ul className="clearfix">
                  <li>
                    <a href="https://www.facebook.com/">
                      <span className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <span className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.skype.com/">
                      <span className="fab fa-skype" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <span className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="mCSB_1_scrollbar_vertical"
              className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
              style={{ display: "none" }}
            >
              <div className="mCSB_draggerContainer">
                <div
                  id="mCSB_1_dragger_vertical"
                  className="mCSB_dragger"
                  style={{
                    position: "absolute",
                    minHeight: 30,
                    height: 0,
                    top: 0,
                  }}
                  onContextMenu="return false;"
                >
                  <div
                    className="mCSB_dragger_bar"
                    style={{ lineHeight: 30 }}
                  />
                  <div className="mCSB_draggerRail" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default MobileMenu;
