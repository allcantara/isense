import React, { useEffect } from "react";

import FooterComponent from "./Footer";
import FormComponents from "./Form";
import ContentComponent from "./Content";
import ExplanationComponent from "./Explanation";
import HeaderComponent from "./Header";
import VideoComponent from "./Video";

export default () => {
  return (
    <>
      <HeaderComponent />
      <div className="container">
        <VideoComponent />
        <ExplanationComponent />
        <div className="col-12 p-md-5">
          <ContentComponent />
          <FormComponents />
        </div>
        <FooterComponent />
      </div>
    </>
  );
};
