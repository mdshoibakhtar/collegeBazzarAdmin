import React, { useEffect } from "react";
import Gallery from "../../components/gallery/Gallery";
import { Helmet } from "react-helmet";

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery | Fine fortunate trading limited</title>
        <meta
          name="keywords"
          content="Online, Connecting Buyers, Suppliers, Market, Share"
        />
        <meta
          name="description"
          content="Fine fortunate trading limited is India’s largest online B2B marketplace, connecting buyers with suppliers. With 60% market share of the online B2B Classified space in India"
        />
      </Helmet>
      <Gallery />
    </>
  );
}
export default GalleryPage;
