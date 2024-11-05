import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import video_cover from "../../assets/images/cover/video-cover.jpg"


function VideoComp() {
  return (
    <>
      <section
        className="page-title page-title-2"
        style={{
          backgroundImage:
            `url(${video_cover})`,
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="content-wrapper">
              <div className="title">
                <h1>Video</h1>
              </div>
              <ul className="bread-crumb clearfix">
                <li className="breadcrumb-item">
                  <Link to="/home">Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">Video</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt_120-pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="video-section">
                <ReactPlayer
                  url="https://youtu.be/kCqXqb14v1A"
                  className="nafl_video img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="video-section">
                <ReactPlayer
                  url="https://youtu.be/Ip37M6OeTew"
                  className="nafl_video img-fluid "
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="video-section">
                <ReactPlayer
                  url="https://youtube.com/shorts/2rffL1jMiZM?feature=share"
                  className="nafl_video img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default VideoComp;
