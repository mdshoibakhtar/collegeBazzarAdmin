import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/frontend.min.css";
import "./assets/css/style_1.css";
import "./assets/css/style.css";
import "./assets/css/styles.css";
import "./assets/css/style.min.css";
import "./assets/css/responsive.css";
// import './assets/css/style_1.css'
import "./assets/css/animate.css";
import "./assets/css/animations.min.css";

import "./assets/css/classic-themes.min.css";
import "./assets/css/color.css";
import "./assets/css/custom-animate.css";
import "./assets/css/custom.css";
import "./assets/css/elementor-icons.min.css";
import "./assets/css/elpath.css";
import "./assets/css/fontawesome-all.css";
// import './assets/css/frontend.min.css'
import "./assets/css/global.css";
import "./assets/css/hover.css";
import "./assets/css/icomoon.css";
import "./assets/css/jquery-ui-1.9.2.custom.min.css";
import "./assets/css/jquery.fancybox.min.css";
import "./assets/css/jquery.touchspin.css";
import "./assets/css/nice-select.css";
import "./assets/css/owl.css";
import "./assets/css/post-9.css";
import "./assets/css/rtl.css";
// import './assets/css/scrollbar.css'
import "./assets/css/swiper.min.css";
import "./assets/css/wc-blocks-style.css";
import "./assets/css/wc-blocks-vendors-style.css";
import "./assets/css/woocommerce_1.css";
import "./assets/css/woocommerce-layout.css";
import "./assets/css/woocommerce-smallscreen.css";
import "./assets/css/woocommerce.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import ClipLoader from "react-spinners/ClipLoader";

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Index";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import AboutUsPage from "./pages/aboutUs/Index";
import ContactUsPage from "./pages/contactUs/Index";
import { useEffect, useState } from "react";
import WaterForHealthPage from "./pages/waterForHealth/Index";
import { Button, Modal } from "react-bootstrap";
import GalleryPage from "./pages/gallery/Index";
import VideoPage from "./pages/video/Index";
import LegalsPage from "./pages/legals";
import ProductsPage from "./pages/products";
import BlogsPage from "./pages/blogs";
import BlogDetailPage from "./pages/blog-detail";

function App() {
  const [showSideBar, setShowSideBar] = useState(true);
  const handleSidebar = () => {
    alert("lkjkl");
    setShowSideBar(!showSideBar);
  };
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setModalShow(true);
    });
  }, [5000]);

  const onHide = () => {
    setModalShow(false);
  };

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <div className="App">
        <Header handleSidebar={handleSidebar} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/water-for-health" element={<WaterForHealthPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/legals" element={<LegalsPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog-detail" element={<BlogDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
