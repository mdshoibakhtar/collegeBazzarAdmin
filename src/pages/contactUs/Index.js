import React, { useEffect } from "react";
import ContactUs from "../../components/contactUs/ContactUsC";
import { Helmet } from "react-helmet";

function ContactUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Fine fortunate trading limited</title>
        <meta
          name="keywords"
          content="Online, Connecting Buyers, Suppliers, Market, Share"
        />
        <meta
          name="description"
          content="Fine fortunate trading limited is India’s largest online B2B marketplace, connecting buyers with suppliers. With 60% market share of the online B2B Classified space in India"
        />
      </Helmet>
      <ContactUs />
    </>
  );
}
export default ContactUsPage;
