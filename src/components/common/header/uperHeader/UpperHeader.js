import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../../src/assets/images/new-img/logo/logo.png";
import togleButton from "../../../../../src/assets/images/icon-bar.png";

import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import "./UperHeader.css";
function UperHeader() {
  // const openModal = (event) => {
  //   document.body.classList.add("mobile-menu-visible");
  //   this.setState({ showModal: true });
  // };
  // hideModal = (event) => {
  //   document.body.classList.remove('modal-open');
  //   this.setState({ showModal: false });
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            {/*Logo*/}
            <div className="logo-box">
              <div className="logo logo-logo">
                <Link to="/home" title="Paanee">
                  <img src={logo} alt="logo" className="img-fluid" />
                </Link>
              </div>
            </div>
            <div className="right-column">
              {/*Nav Box*/}
              <div className="nav-outer">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  {/* onClick={handleSidebar} */}
                  <img
                    src={togleButton}
                    alt="Awesome Images"
                    onClick={handleShow}
                  />
                </div>
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
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

                        <div className="dropdown-btn">
                          <span className="fa fa-angle-right" />
                        </div>
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
                          title="Products"
                          to="/products"
                          className="hvr-underline-from-left1"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          Products
                        </Link>
                      </li>
                      <li
                        id="menu-item-58"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58"
                      >
                        <Link
                          title="Gallery"
                          to="/gallery"
                          className="hvr-underline-from-left1"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          Gallery
                        </Link>
                      </li>

                      <li
                        id="menu-item-63"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"
                      >
                        <Link
                          title="Video"
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
                          title="Blogs"
                          to="/blogs"
                          className="hvr-underline-from-left1"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li
                        id="menu-item-63"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"
                      >
                        <Link
                          title="Legals"
                          to="/legals"
                          className="hvr-underline-from-left1"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          Legals
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
                </nav>
              </div>
              {/* <div className="navbar-right-info">
                <div className="link-btn">
                  <NavLink href="#" className="theme_btn_1 paanee_btn">
                    Get a Quote
                  </NavLink>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} className="ofcanvas_our">
        <Offcanvas.Header closeButton className="btn-close-btn">
          <Offcanvas.Title>
            <img src={logo} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mobile-aside-link">
            <ul className="mobile-aside-link-list">
              <li className="mobile-aside-link-item">
                <NavLink to="/home" className="mobile-aside-link-link">
                  home
                </NavLink>
              </li>
              <li className="mobile-aside-link-item">
                <NavLink to="/about" className="mobile-aside-link-link">
                  about us
                </NavLink>
              </li>
              <li className="mobile-aside-link-item">
                <NavLink href="" className="mobile-aside-link-link">
                  water for health
                </NavLink>
              </li>
              <li className="mobile-aside-link-item">
                <NavLink to="/gallery" className="mobile-aside-link-link">
                  Gallery
                </NavLink>
              </li>
              <li className="mobile-aside-link-item">
                <NavLink to="/video" className="mobile-aside-link-link">
                  video
                </NavLink>
              </li>
              <li className="mobile-aside-link-item">
                <NavLink to="/contact" className="mobile-aside-link-link">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>

        <div className="social-links social-link-aside">
          <ul className="clearfix">
            <li>
              <NavLink href="https://www.facebook.com/">
                <span className="fab fa-facebook" />
              </NavLink>
            </li>
            <li>
              <NavLink href="https://www.linkedin.com/">
                <span className="fab fa-linkedin" />
              </NavLink>
            </li>
            <li>
              <NavLink href="https://www.skype.com/">
                <span className="fab fa-skype" />
              </NavLink>
            </li>
            <li>
              <NavLink href="https://www.twitter.com/">
                <span className="fab fa-twitter" />
              </NavLink>
            </li>
          </ul>
        </div>
      </Offcanvas>
    </>
  );
}
export default UperHeader;
