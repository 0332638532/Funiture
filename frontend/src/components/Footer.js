import React from "react";
import policy_1 from "../assets/images/policy1.png";
import policy_2 from "../assets/images/policy2.png";
import policy_3 from "../assets/images/policy3.png";
import policy_4 from "../assets/images/policy4.png";
import logo from "../assets/images/logo.png";
import icon from "../assets/images/24hours.svg";
const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="policy">
        <div className="container">
          <div className="policy-main">
            <div className="policy-main-item">
              <div className="item-icon">
                <img src={policy_1} alt="" />
              </div>
              <div className="description">
                <h3>giao hàng miễn phí</h3>
                <p>với đơn giá trên 300.000₫</p>
              </div>
            </div>
            <div className="policy-main-item">
              <div className="item-icon">
                <img src={policy_2} />
              </div>
              <div className="description">
                <h3>hỗ trợ 24/7</h3>
                <p>nhanh chóng thuận tiện</p>
              </div>
            </div>
            <div className="policy-main-item">
              <div className="item-icon">
                <img src={policy_3} />
              </div>
              <div className="description">
                <h3>đổi trả 3 ngày</h3>
                <p>hấp dẫn chưa từng có</p>
              </div>
            </div>
            <div className="policy-main-item">
              <div className="item-icon">
                <img src={policy_4} />
              </div>
              <div className="description">
                <h3>giá tiêu chuẩn</h3>
                <p>tiết kiệm 10% giá cả</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs">
        <div className="container">
          <div className="aboutUs-main">
            <div className="aboutUs-main-item">
              <img src={logo} alt="" />
              <p>siêu thị nội thất sea furniture</p>
              <p>
                trụ sở chính: 10/80C Xa lộ Hà Nội, Phường Tân Phú, Thủ Đức,
                Thành phố Hồ Chí Minh, Việt Nam
              </p>
              <p>hoteline: 0912117494</p>
              <p>email: longnguyen2431@gmail.com</p>
            </div>
            <div className="aboutUs-main-item">
              <h3>về chúng tôi</h3>
              <ul>
                <li>
                  <a href="">trang chủ</a>
                </li>
                <li>
                  <a href="">giới thiệu</a>
                </li>
                <li>
                  <a href="">sản phẩm</a>
                </li>
                <li>
                  <a href="">tin tức</a>
                </li>
                <li>
                  <a href="">liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="aboutUs-main-item">
              <h3>tin khuyến mãi</h3>
              <ul>
                <li>
                  <a href="">trang chủ</a>
                </li>
                <li>
                  <a href="">giới thiệu</a>
                </li>
                <li>
                  <a href="">sản phẩm</a>
                </li>
                <li>
                  <a href="">tin tức</a>
                </li>
                <li>
                  <a href="">liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="aboutUs-main-item">
              <h3>tổng đài hỗ trợ</h3>
              <span>
                <img src={icon} alt="" className="icon-hours" />
                0912117494
              </span>
              <h3>nhận tin khuyến mãi</h3>
              <div className="register-email">
                <input type="text" placeholder="Nhập email..." />
                <button className="button">đăng ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
