import React from "react";
import bannerStyles from "../styles/Banner.module.css";

const FeatureBanner = (props: any) => {
  return (
    <div className={bannerStyles.bannerContainer}>
      <div className={bannerStyles.bannerMain}>
        <div className={bannerStyles.bannerLeft}>
          <h6>FOCUS ON</h6>
          <h1>JNET Ada</h1>
          <h6>Proprietary AI-Powered Platform</h6>
          <div className={bannerStyles.discoverButton}>DISCOVER ADA</div>
        </div>
        <div className={bannerStyles.bannerRight}>
          <h5>
            Artificial Intelligence as a tool. <br /> From conversational agents
            to semantic doc <br /> management: JNET condenses the future into
            ready-to-use applications.
          </h5>
          <div className={bannerStyles.discoverButton}>DISCOVER ADA</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
