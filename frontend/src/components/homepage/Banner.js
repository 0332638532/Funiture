import React from "react";
import banner_1 from "../../assets/images/banner_1.jpg";
import banner_2 from "../../assets/images/banner_2.jpg";
const Banner = () => {
  return (
    <section id="banner" className="banner">
      <div className="container">
        <div className="banner-main">
          <div className="banner-main-kitchen">
            <img src={banner_1} />
          </div>
          <div className="banner-main-livingroom">
            <img src={banner_2} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
