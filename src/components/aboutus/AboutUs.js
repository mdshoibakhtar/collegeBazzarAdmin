import React from "react";
import { Link } from "react-router-dom";
import InnerBanner from "../common/InnerBanner/InnerBanner";
import AboutUs from "../home/aboutUs/AboutUs";
import about_cover from "../../assets/images/cover/about-cover.png"

function AboutUsC() {
  return (
    <>
      {/* <InnerBanner/> */}
      <section
        className="page-title page-title-2 pageCover"
        style={{
          backgroundImage:
            `url(${about_cover})`,
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="content-wrapper">
              <div className="title">
                <h1>About Us</h1>
              </div>
              <ul className="bread-crumb clearfix">
                <li className="breadcrumb-item">
                  <Link to="/home">Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
    </>
  );
}
export default AboutUsC;
