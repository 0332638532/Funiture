import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/LoadingError/Loading.js";
import Message from "../components/LoadingError/Error.js";
import { register } from "../Redux/actions/userActions";

const Register = ({ history, location }) => {
  window.scrollTo(0, 100);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, phone));
  };

  return (
    <>
      <Header />
      {loading && <Loading />}
      <section id="register" className="register">
        <div className="container">
          <div className="box">
            <h2>đăng ký tài khoản</h2>
            <div className="box-user">
              <h5>họ tên</h5>
              <input
                type="text"
                placeholder="Họ tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="box-email">
              <h5>email</h5>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="box-phone">
              <h5>số điện thoại</h5>
              <input
                type="text"
                placeholder="Số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="box-pass">
              <h5>mật khẩu</h5>
              <input
                type="password"
                placeholder="Mật Khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <Message variant="alert-danger">{error}</Message>}
            <button
              className="btn"
              type="submit"
              onClick={(e) => handleSubmitRegister(e)}
            >
              đăng ký
            </button>
            <div className="notify">
              <span>
                Nếu đã có tài khoản trở về: <Link to="/login">đăng nhập</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Register;
