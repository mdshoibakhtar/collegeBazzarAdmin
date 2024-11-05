import React from "react";
import g1 from "../../../assets/images/gallery/g-1.jpg";
import g2 from "../../../assets/images/gallery/g-2.jpg";
import g3 from "../../../assets/images/gallery/g-3.jpg";
import g4 from "../../../assets/images/gallery/g-4.jpg";

import {BiUserCircle, BiPhoneCall} from "react-icons/bi";

const Blog = () => {
  return (
    <>
      <div className="blogItemSec">
        <div className="row">
          <div className="col-lg-6">
            <div className="blogItemInfo">
              <div className="blogItemFigure">
                <img src={g1} alt="Blog" />
                <div className="postDate">
                  <span className="date">25</span>
                  <span className="month">feb</span>
                </div>
              </div>
              <div className="blogItemContent">
                <div className="author">
                  <ul>
                    <li>
                      <a href="/">
                        <BiUserCircle />
                        By Ismail
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BiPhoneCall/>
                        Consulting
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="title">
                  <h4>
                    <a href="/blog-detail">Nickel</a>
                  </h4>
                  <p>
                  Fine fortunate trading limited is India’s largest online B2B marketplace, connecting buyers with suppliers. 
                  </p>
                </div>
                <div className="readMore">
                  <a href="/blog-detail">
                    Read More
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blogItemInfo">
              <div className="blogItemFigure">
                <img src={g2} alt="Blog" />
                <div className="postDate">
                  <span className="date">17</span>
                  <span className="month">jan</span>
                </div>
              </div>
              <div className="blogItemContent">
                <div className="author">
                  <ul>
                    <li>
                      <a href="/">
                        <BiUserCircle />
                        By John
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BiPhoneCall/>
                        Consulting
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="title">
                  <h4>
                    <a href="/blog-detail">Copper Cathode</a>
                  </h4>
                  <p>
                    Fine fortunate trading limited is India’s largest online B2B marketplace, connecting buyers with suppliers. 
                  </p>
                </div>
                <div className="readMore">
                  <a href="/">
                    Read More
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blogItemInfo">
              <div className="blogItemFigure">
                <img
                  src={g4}
                  alt="Blog"
                />
                <div className="postDate">
                  <span className="date">17</span>
                  <span className="month">jan</span>
                </div>
              </div>
              <div className="blogItemContent">
                <div className="author">
                  <ul>
                    <li>
                      <a href="/">
                        <BiUserCircle />
                        By John
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BiPhoneCall/>
                        Consulting
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="title">
                  <h4>
                    <a href="/blog-detail">Manganese Metal</a>
                  </h4>
                  <p>
                    Fine fortunate trading limited is India’s largest online B2B marketplace, connecting buyers with suppliers. 
                  </p>
                </div>
                <div className="readMore">
                  <a href="/blog-detail">
                    Read More
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blogItemInfo">
              <div className="blogItemFigure">
                <img src={g3} alt="Blog" />
                <div className="postDate">
                  <span className="date">25</span>
                  <span className="month">feb</span>
                </div>
              </div>
              <div className="blogItemContent">
                <div className="author">
                  <ul>
                    <li>
                      <a href="/">
                        <BiUserCircle />
                        By Ismail
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BiPhoneCall/>
                        Consulting
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="title">
                  <h4>
                    <a href="/blog-detail">Manganese</a>
                  </h4>
                  <p>
                    Fine fortunate trading limited is India’s largest online B2B marketplace, connecting buyers with suppliers. 
                  </p>
                </div>
                <div className="readMore">
                  <a href="/blog-detail">
                    Read More
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
