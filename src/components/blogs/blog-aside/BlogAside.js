import React from "react";
import g1 from "../../../assets/images/gallery/g-1.jpg";
import g2 from "../../../assets/images/gallery/g-2.jpg";
import g3 from "../../../assets/images/gallery/g-3.jpg";
import g4 from "../../../assets/images/gallery/g-4.jpg";
import { RiArrowRightSLine } from "react-icons/ri";

const BlogAside = () => {
  return (
    <>
      <div className="blogAsideSec">
        <div className="blogCategory  ">
          <h4 className="asideTitle">blog category</h4>
          <hr />
          <ul>
            <li>
              <a href="/">
                <RiArrowRightSLine/>
                Enhanced business visibility
              </a>
            </li>
            <li>
              <a href="/">
                <RiArrowRightSLine/>
                Increased credibility for your brand

              </a>
            </li>
            <li>
              <a href="/">
                <RiArrowRightSLine/>
                Lead Management System
              </a>
            </li>
          </ul>
        </div>
        <div className="recentPosts  ">
          <h4 className="asideTitle">recent posts</h4>
          <hr />
          <div className="recentItemInfo">
            <div className="recentImg">
              <img
                src={g1}
                alt="Latest Blog"
              />
            </div>
            <div className="recentContent">
              <h6>
                <a href="/blog-detail">Nickel</a>
              </h6>
              <p className="date">February 26, 2018</p>
            </div>
          </div>
          <div className="recentItemInfo  ">
            <div className="recentImg">
              <img
                src={g2}
                alt="Latest Blog"
              />
            </div>
            <div className="recentContent">
              <h6>
                <a href="/blog-detail">Copper Cathode</a>
              </h6>
              <p className="date">July 09, 2015</p>
            </div>
          </div>
        </div>
        <div className="asideTags">
          <h4 className="asideTitle">tags</h4>
          <hr />
          <ul>
            <li>
              <a href="/">articles</a>
            </li>
            <li>
              <a href="/">chat</a>
            </li>
            <li>
              <a href="/">chat</a>
            </li>
            <li>
              <a href="/">chat</a>
            </li>
            <li>
              <a href="/">chat</a>
            </li>
            <li>
              <a href="/">chat</a>
            </li>
            <li>
              <a href="/">chat</a>
            </li>
            <li>
              <a href="/">chat</a>
            </li>
            <li>
              <a href="/">chat</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogAside;
