import React from "react";
import Blog from "./blog/Blog";
import BlogAside from "./blog-aside/BlogAside";

const Blogs = () => {
  return (
    <>
      <section className="blogSec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Blog />
            </div>
            <div className="col-md-4">
              <BlogAside />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
