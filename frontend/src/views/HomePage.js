import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import OutstandingProducts from "../components/homepage/OutstandingProducts";
import Banner from "../components/homepage/Banner";
import ProductSpecial from "../components/homepage/ProductSpecial";
import Advertise from "../components/homepage/Advertise";
import NewProduct from "../components/homepage/NewProduct";
import News from "../components/homepage/News";
import Footer from "../components/Footer";
import LoadingPage from "../components/LoadingError/LoadingPage";

const HomePage = ({ match }) => {
  const [isShowBg, setIsShowBg] = useState(false);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);
  return (
    <>
      {isLoading === true ? (
        <LoadingPage />
      ) : (
        <div>
          <Header isShowBg={isShowBg} />
          <OutstandingProducts keyword={keyword} pagenumber={pagenumber} />
          <Banner />
          <ProductSpecial keyword={keyword} pagenumber={pagenumber} />
          <Advertise />
          <NewProduct keyword={keyword} />
          <News />
          <Footer />
        </div>
      )}
    </>
  );
};
export default HomePage;
