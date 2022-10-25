import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <Header />
      <div className="notFound">
        <h3>404</h3>
        <span>
          Đường dẫn không tồn tại vui lòng quay lại{" "}
          <Link to="/">trang chủ</Link>
        </span>
      </div>
      <Footer />
    </>
  );
};
export default NotFound;
