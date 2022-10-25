import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img from "../assets/images/intro.jpg";
import logoBrand from "../assets/images/NguyenDucLong.jpg";

const Intro = () => {
  return (
    <>
      <Header />
      <section className="intro" id="intro">
        <div className="container">
          <div className="intro-image">
            <img
              src="https://noithatluongson.vn/wp-content/uploads/2021/07/furniture1.jpg"
              alt=""
            />
          </div>
          <div className="intro-grid">
            <div className="intro-grid-box">
              <h2>Về chúng tôi?</h2>
              <p>
                Seafurniture là đứa con tinh thần mà Brodev tâm huyết nhất . Sở
                dĩ việc đặt tên thương hiệu là Seafurniture bởi vì đây vốn là
                một website được Brodev đầu tư chất xám và rèn dũa mỗi ngày. Nó
                được xây dựng vào dịp chuẩn bị con đường lớn nhất để Brodev bước
                ra thế giới IT bên ngoài. Là cơ hội để có thể cho các nhà tuyển
                dụng xem xét và đánh giá năng lực. Vì vậy để làm tốt nhất có thể
                thì đây chính là sản phẩm mà Brodev tâm huyết nhất trong 4 năm
                tại trường đại học.
              </p>
            </div>
            <div className="intro-grid-box">
              <h2>Chúng tôi cần làm gì?</h2>
              <p>
                Để xây dựng Seafurniture đang thực hiện trên development, chúng
                tôi đã phân tích và thiết kế cơ sở dữ liệu. Sau đó tiến hành
                phát tiển UX, UI nhằm giúp cho khách hàng trải nghiệm một cách
                tốt nhất. Song song đó chúng tôi quản lý số lượng khách hàng
                đăng ký tin dùng Seafurniture cũng như là thực hiện thao tác các
                tính năng trên website. Chúng tôi cũng cần sự góp ý, phẩn hồi
                chân thành từ phía khách hàng để Seafurniture ngày một hoàn
                thiện hơn.
              </p>
            </div>
            <div className="intro-grid-box">
              <h2>Tại sao nên chọn?</h2>
              <p>
                Một thương hiệu thành công được xây dựng bởi lòng tin và sự hài
                lòng của khách hàng. Seafurniture được ra đời bởi điều đó : sự
                chân thành , lòng tin và hơn hết nữa chúng tôi dành rất nhiều
                thời gian , tìm hiểu để mang đến những sản phẩm chất lượng nhất
                đến người tiêu dùng.
              </p>
            </div>
          </div>
        </div>
        <div className="intro-user">
          <div className="intro-user-info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQitB_xLW-iTAIOLwgxfrkYRhhA3mlxKKC5A&usqp=CAU"
              alt=""
            />

            <h3>
              “Một thương hiệu thành công được xây dựng bởi lòng tin và sự hài
              lòng của khách hàng. Seafurniture được ra đời bởi điều đó : sự
              chân thành , lòng tin và hơn hết nữa chúng tôi dành rất nhiều thời
              gian , tìm hiểu để mang đến những sản phẩm chất lượng nhất đến
              người tiêu dùng.”
            </h3>
            <div className="user">
              <span>
                <img src={logoBrand} alt="" />
              </span>
              <span>Brodev</span>
            </div>
          </div>
          <div className="intro-user-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="about-me">
            <h3 className="heading-text">seafurniture</h3>
            <h3 className="title-text">về chúng tôi</h3>
            <p>
              Seafurniture là đứa con tinh thần mà Brodev tâm huyết nhất . Sở dĩ
              việc đặt tên thương hiệu là Seafurniture bởi vì đây vốn là một
              website được Brodev đầu tư chất xám và rèn dũa mỗi ngày. Nó được
              xây dựng vào dịp chuẩn bị con đường lớn nhất để Brodev bước ra thế
              giới IT bên ngoài. Là cơ hội để có thể cho các nhà tuyển dụng xem
              xét và đánh giá năng lực. Vì vậy để làm tốt nhất có thể thì đây
              chính là sản phẩm mà Brodev tâm huyết nhất trong 4 năm tại trường
              đại học.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Intro;
