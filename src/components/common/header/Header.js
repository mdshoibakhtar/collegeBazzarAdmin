import React from "react";
import MobileMenu from "../mobile-Menu/Mobile-Menu";
import StickyHeader from "./sticky-header/StickyHeader";
import TopHeader from "./topHeader/TopHeader";
import UperHeader from "./uperHeader/UpperHeader";

function Header({ handleSidebar }) {
  return (
    <div className="main-header header-style-one">
      <TopHeader />
      <UperHeader handleSidebar={handleSidebar} />
      <StickyHeader />
      {/* <MobileMenu /> */}
    </div>
  );
}
export default Header;
