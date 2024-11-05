import React from "react";
function TopHeader() {
  return (
    <>
      <div className="header-top">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="left-column">
              <ul className="info-list">
                <li>
                  <i className="icon-pin" />Resources you can Trust
                </li>{" "}
                <li>
                  <i className="icon-envelope" />{" "}
                  <a href="mailto:  info@finefortunate.pro"> info@finefortunate.pro</a>
                </li>{" "}
              </ul>
            </div>
            <div className="right-column">
              <ul className="social-links">
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.skype.com/">
                    <i className="fab fa-skype" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopHeader;
