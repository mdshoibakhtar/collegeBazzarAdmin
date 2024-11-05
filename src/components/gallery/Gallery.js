import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import g1 from "../../assets/images/gallery/g-1.jpg";
import g2 from "../../assets/images/gallery/g-2.jpg";
import g3 from "../../assets/images/gallery/g-3.jpg";
import g4 from "../../assets/images/gallery/g-3.jpg";
import g5 from "../../assets/images/gallery/g-1.jpg";
import g6 from "../../assets/images/gallery/g-2.jpg";
import gallery_cover from "../../assets/images/cover/gallery-cover.jpg"

const gallery = [
  { id: "1", url: g1, alt: "img" },
  { id: "2", url: g2, alt: "img" },
  { id: "3", url: g3, alt: "img" },
  { id: "4", url: g4, alt: "img" },
  { id: "5", url: g5, alt: "img" },
  { id: "6", url: g6, alt: "img" },
];


function Gallery() {
  return (
    <>
      <section
        className="page-title page-title-2"
        style={{
          backgroundImage:
            `url(${gallery_cover})`,
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="content-wrapper">
              <div className="title">
                <h1>Gallery</h1>
              </div>
              <ul className="bread-crumb clearfix">
                <li className="breadcrumb-item">
                  <Link to="/home">Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">Gallery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section pt_120-pt">
        <div className="auto-container">
          <div className="row">
            <SlideshowLightbox className="box-gallery">
              {gallery.slice(0, 6).map((item) => {
                console.log(item);

                return <img className="w-full rounded" src={item.url} />;
              })}
            </SlideshowLightbox>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
