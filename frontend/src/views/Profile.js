import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProfileUser from "../components/profile/ProfileUser";
import OrderProfile from "../components/profile/OrderProfile";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsProfile } from "../Redux/actions/userActions";
import moment from "moment";
import img from "../assets/images/LOGOBYLONG.png";
import { listMyOrders } from "../Redux/actions/orderActions";

const Profile = () => {
  window.scrollTo(0, 100);
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderListMyProfile = useSelector((state) => state.orderListMyProfile);
  const { loading, error, orders } = orderListMyProfile;

  useEffect(() => {
    dispatch(listMyOrders());
    dispatch(getUserDetailsProfile("profile"));
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <section id="profile" className="profile">
          <div className="infomation" hidden={index !== 0}>
            <ProfileUser />
          </div>
          <div className="infomation" hidden={index !== 1}>
            <OrderProfile orders={orders} loading={loading} error={error} />
          </div>
          <div className="card">
            <div className="card-avatar">
              <img src={img} alt="" className="card-image" />
              <span className="card-status"></span>
            </div>
            <h3 className="card-name">{userInfo.name}</h3>
            <div className="card-meta">
              <div className="card-meta-item">
                <h4 className="card-meta-number">thành viên</h4>
                <span className="card-meta-txt">
                  {moment(userInfo.createdAt)
                    .lang("vi")
                    .format("dddd, MMMM Do YYYY")}
                </span>
              </div>
            </div>
            <p className="card-desc">
              Chào mừng Cute corgi đến với seafunirture, rất vui khi được đồng
              hành cùng bạn <i className="fa-solid fa-heart"></i>
            </p>
            <div className="card-action">
              <button
                className="card-button card-button--primary"
                onClick={() => {
                  setIndex(0);
                }}
              >
                thông tin
              </button>
              <button
                className="card-button card-button--secondary"
                onClick={() => {
                  setIndex(1);
                }}
              >
                đơn đặt
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Profile;
