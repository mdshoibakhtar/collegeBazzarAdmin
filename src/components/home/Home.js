import React from "react";
import Banner from "./banner/Banner";
import ClintSection from "./clintSection/ClintSection";
import ExprienceWorker from "./exprienceWorker/ExprienceWorker";
import OurProducts from "./ourProduct/OurProducts";
import Testimonials from "./testimonials/Testimonials";
import WhoAreSection from "./whoAreSection/WhoAreSection";
import CreateValue from "./create-value/CreateValue";
import SocialResp from "./social-resp/SocialResp";

function Home() {
  return (
    <>
      <Banner />
      {/* <ClintSection /> */}

      <ExprienceWorker />

      <OurProducts />
      <CreateValue />
      <SocialResp />
      {/* <WhoAreSection /> */}
      <Testimonials />
    </>
  );
}
export default Home;
