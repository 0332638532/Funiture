import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const PayMentSuccess = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <section className="payment-success">
        <div className="container">
          <div className="payment-success-box">
            <h2 className="icon-success">
              <i className="fa-solid fa-circle-check"></i>
            </h2>
            <h2 className="text">
              Thanh toán thành công. Vui lòng kiểm tra đơn hàng trong tài khoản
              của bạn !
            </h2>
            <p className="sub-text">
              Cảm ơn quý khách đã ủng hộ Seafurniture, đơn hàng sẽ được giao
              trong thời gian sớm nhất !
            </p>
            <Link to="/">
              <i class="fa-solid fa-circle-arrow-left"></i>trang chủ
              seafurniture
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayMentSuccess;
