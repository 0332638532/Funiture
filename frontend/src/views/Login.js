import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/LoadingError/Loading.js";
import Message from "../components/LoadingError/Error.js";
import { login } from "../Redux/actions/userActions";

const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log(redirect);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <Header />
      {loading && <Loading />}
      <section id="login" className="login">
        <div className="container">
          <div className="box">
            <h2>tài khoản</h2>
            <p>nếu chưa có tài khoản vui lòng đăng ký trước khi đăng nhập</p>
            <div className="box-email">
              <h5>email</h5>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              onClick={(e) => handleSubmitLogin(e)}
            >
              đăng nhập
            </button>
            <div className="notify">
              <span>
                Chưa có tài khoản: <Link to="/register">đăng ký</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Login;
