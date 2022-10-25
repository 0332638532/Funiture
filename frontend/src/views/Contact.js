import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Contact = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <Header />
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-main">
            <div className="contact-main-feedback">
              <h2 className="text">
                <i className="fa-solid fa-location-dot"></i>10/80C Xa lộ Hà Nội,
                Phường Tân Phú, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
              </h2>
              <h2 className="text">
                <i className="fa-solid fa-mobile-screen-button"></i>Hotline:
                0345638420
              </h2>
              <h2 className="text">
                <i className="fa-solid fa-envelope"></i>longnguyen2431@gmail.com
              </h2>
              <h3>liên hệ</h3>
              {userInfo ? (
                <>
                  <input type="text" value={userInfo.name} placeholder="Name" />
                  <input
                    type="text"
                    value={userInfo.email}
                    placeholder="Email"
                  />
                </>
              ) : (
                <>
                  <input type="text" value="" placeholder="Name" />
                  <input type="text" value="" placeholder="Email" />
                </>
              )}
              <textarea rows="5" cols="50" placeholder="Nội dung..." />
              <button className="btn btn-contact">gửi liên hệ</button>
            </div>
            <div className="contact-main-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4206639905988!2d106.78291401518062!3d10.855574792267852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e7ea103df%3A0xb6cf10bb7d719327!2zxJDhuqFpIGjhu41jIEh1dGVjaCBLaHUgQ8O0bmcgbmdo4buHIGNhbw!5e0!3m2!1svi!2s!4v1648661014605!5m2!1svi!2s"
                width="100%"
                height="100%"
                title="myFrame"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Contact;
