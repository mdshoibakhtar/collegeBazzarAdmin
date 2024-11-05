import React from "react";
import g1 from "../../../../assets/images/gallery/g-1.jpg";

const SingleBlog = () => {
  return (
    <>
      <div className="blogDetailInfo">
        <div className="blogDetailContent">
          <figure className="currentBlogImg">
            <img src={g1} alt="Blog" className="img-fluid" />
          </figure>
          <h4>Copper Cathode</h4>
          <p>
            Fine fortunate trading limited is India’s largest online B2B
            marketplace, connecting buyers with suppliers. With 60% market share
            of the online B2B Classified space in India, the channel focuses on
            providing a platform to Small & Medium Enterprises (SMEs), Large
            Enterprises as well as individuals. Founded in 1999, the company’s
            mission is ‘to make doing business easy’.
          </p>
          <strong className="mb-3 d-block">
            “ Many desktop publishing packages and web page editors now use
            Lorem Ipsum as their default model search for evolved over sometimes
            by accident, sometimes on purpose ”
          </strong>
          <p>
            Aenean lorem diam, venenatis nec venenatis id, adipiscing ac massa.
            Nam vel dui eget justo dictum pretium a rhoncus ipsum. Donec
            venenatis erat tincidunt nunc suscipit, sit amet bibendum lacus
            posuere. Sed scelerisque, dolor a pharetra sodales, mi augue
            consequat sapien, et interdum tellus leo et nunc. Nunc imperdiet eu
            libero ut imperdiet.
          </p>
        </div>
        {/* <div className="blogComment p-30">
          <div className="comment-option">
            <h4>2 Comments</h4>
            <div className="single-comment-item first-comment">
              <div className="sc-author">
                <img
                  src="/static/media/fertilizer-application1.2be1a1eb4a41c14b70b7.jpg"
                  alt="Blog"
                  className="img-fluid"
                />
              </div>
              <div className="sc-text">
                <span>27 AUG 2019</span>
                <h5>Brandon Kelley</h5>
                <p>
                  Neque porro qui squam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora. incidunt ut labore et dolore magnam.
                </p>
                <a className="comment-btn" href="/">
                  Like
                </a>
                <a className="comment-btn" href="/">
                  Reply
                </a>
              </div>
            </div>
            <div className="single-comment-item first-comment false">
              <div className="sc-author">
                <img
                  src="/static/media/fertilizer-application-bg1.db33140d714abb0e6766.jpg"
                  alt="Blog"
                  className="img-fluid"
                />
              </div>
              <div className="sc-text">
                <span>27 AUG 2019</span>
                <h5>Brandon Kelley</h5>
                <p>
                  Neque porro qui squam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora. incidunt ut labore et dolore magnam. Neque porro
                  qui squam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora. incidunt ut labore et dolore magnam.
                </p>
                <a className="comment-btn" href="/">
                  Like
                </a>
                <a className="comment-btn" href="/">
                  Reply
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="blogFormSec">
          <h4>Leave a Reply</h4>
          <div className="blogFormInfo">
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="mb-3">
              <div className="form-group mb-3">
                <label htmlFor="comment">Comment</label>
                <textarea
                  type="text"
                  placeholder="Enter Your Name"
                  className="form-control"
                  rows={4}
                  defaultValue={""}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="website">Website</label>
                <input
                  type="url"
                  name="website"
                  placeholder="Enter Website URL"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3 d-flex align-items-center">
                <input type="checkbox" />
                <label htmlFor="website" className="ms-3 mb-0">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <div className="form-group mb-3">
                <button className="btn secondaryBtn">post comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
