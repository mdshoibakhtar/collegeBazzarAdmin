import React from "react";
import logo from "../../../../assets/images/new-img/logo/logo.png";
function StickyHeader() {
  return (
    <>
      <div className="sticky-header">
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              {/*Logo*/}
              <div className="logo-box">
                <div className="logo">
                  <a href="index.html" title="Paanee">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="right-column">
                {/*Nav Box*/}
                <div className="nav-outer">
                  {/*Mobile Navigation Toggler*/}
                  <div className="mobile-nav-toggler">
                    <img src="images/icon-bar.png" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent1"
                    ></div>
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li
                          id="menu-item-56"
                          className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-56 dropdown active current"
                        >
                          <a
                            title="Home"
                            href="index.html"
                            data-toggle="dropdown1"
                            className="hvr-underline-from-left1"
                            aria-expanded="false"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Home
                          </a>
                          {/* <ul role="menu" class="submenu">
	<li id="menu-item-66" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item menu-item-66 active"><a title="Home One" href="http://fastwpdemo.com/newwp/paanee/">Home One</a></li>
	<li id="menu-item-67" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"><a title="Home Two" href="http://fastwpdemo.com/newwp/paanee/home-two/">Home Two</a></li>
</ul> */}
                          <div className="dropdown-btn">
                            <span className="fa fa-angle-right" />
                          </div>
                        </li>
                        <li
                          id="menu-item-58"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58"
                        >
                          <a
                            title="About Us"
                            href="about.html"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            About Us
                          </a>
                        </li>
                        <li
                          id="menu-item-73"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-73 dropdown"
                        >
                          <a
                            title="Cations"
                            href="#"
                            data-toggle="dropdown1"
                            className="hvr-underline-from-left1"
                            aria-expanded="false"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Cations
                          </a>
                          <ul role="menu" className="submenu">
                            <li
                              id="menu-item-69"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-69"
                            >
                              <a title="Sodium" href="#">
                                Sodium
                              </a>
                            </li>
                            <li
                              id="menu-item-68"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68"
                            >
                              <a title="Calcium" href="#">
                                Calcium
                              </a>
                            </li>
                            <li
                              id="menu-item-762"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-762"
                            >
                              <a title="Magnesium" href="#">
                                Magnesium
                              </a>
                            </li>
                            <li
                              id="menu-item-763"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-763"
                            >
                              <a title="Potassium" href="#">
                                Potassium
                              </a>
                            </li>
                            <li
                              id="menu-item-765"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-765"
                            >
                              <a title="Iron" href="#">
                                Iron
                              </a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fa fa-angle-right" />
                          </div>
                        </li>

                        <li
                          id="menu-item-74"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74 dropdown"
                        >
                          <a
                            title="Anions"
                            href="#"
                            data-toggle="dropdown1"
                            className="hvr-underline-from-left1"
                            aria-expanded="false"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Anions
                          </a>
                          <ul role="menu" className="submenu">
                            <li
                              id="menu-item-826"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-826"
                            >
                              <a title="Bicarbonates" href="#">
                                Bicarbonates
                              </a>
                            </li>
                            <li
                              id="menu-item-847"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-847"
                            >
                              <a title="Chlorides" href="#">
                                Chlorides
                              </a>
                            </li>
                            <li
                              id="menu-item-826"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-826"
                            >
                              <a title="Sulphates" href="#">
                                Sulphates
                              </a>
                            </li>
                            <li
                              id="menu-item-847"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-847"
                            >
                              <a title="Fluorides" href="#">
                                Fluorides
                              </a>
                            </li>
                            <li
                              id="menu-item-826"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-826"
                            >
                              <a title="Nitrates" href="#">
                                Nitrates
                              </a>
                            </li>
                            <li
                              id="menu-item-847"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-847"
                            >
                              <a title="Carbonates" href="#">
                                Carbonates
                              </a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fa fa-angle-right" />
                          </div>
                        </li>

                        <li
                          id="menu-item-63"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"
                        >
                          <a
                            title="Contact"
                            href="contact.html"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="navbar-right-info">
                  <div className="link-btn">
                    <a href="#" className="theme_btn_1 paanee_btn">
                      Get a Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StickyHeader;
