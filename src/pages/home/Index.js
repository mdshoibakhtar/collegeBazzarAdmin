import React, { useEffect } from "react";
import Home from "../../components/home/Home";
import Spinner from "react-bootstrap/Spinner";
import { Helmet } from "react-helmet";
function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Fine fortunate trading limited</title>
        <meta
          name="keywords"
          content="Online, Connecting Buyers, Suppliers, Market, Share"
        />
        <meta
          name="description"
          content="Fine fortunate trading limited is India’s largest online B2B marketplace, connecting buyers with suppliers. With 60% market share of the online B2B Classified space in India"
        />
      </Helmet>
      <Home />
    </>
  );
}
export default HomePage;
