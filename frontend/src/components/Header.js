import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../styles/App.scss";
import { NavLink } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/actions/userActions";

const Header = (props) => {
  const { isShowBg } = props;
  const [clicked, setClicked] = useState(false);
  const [keyword, setKeyWord] = useState();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  const handleClickBar = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {isShowBg === false && <div className="background"></div>}
      <section id="header" className="header">
        <div className="container boxShadow">
          <div className="header-main flex-center">
            <Link to="/" exact className="logo">
              <img src={logo} alt="" />
            </Link>
            <form onSubmit={handleSubmit} className="search">
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm"
                onChange={(e) => setKeyWord(e.target.value)}
              />
              <button type="submit" className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <div className="auth">
              {userInfo ? (
                <div className="dropdown">
                  <div className="dropdown-select">
                    <span className="select">Xin chào, {userInfo.name}</span>
                    <i className="fa fa-caret-down icon"></i>
                  </div>
                  <div className="dropdown-list">
                    <div className="dropdown-list__item">
                      <Link to="/profile">tài khoản</Link>
                    </div>
                    <div className="dropdown-list__item">
                      <Link to="/" onClick={handleLogOut}>
                        đăng xuất
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="register">
                    <Link to="/register">đăng ký</Link>
                  </div>
                  <div className="login">
                    <Link to="/login">đăng nhập</Link>
                  </div>
                </>
              )}

              <div className="cart">
                <Link to="/cart">
                  <i className="fas fa-dolly">
                    <span className="cart-count">{cartItems.length}</span>
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="search-mobile">
            <input
              className="input"
              type="text"
              placeholder="Nhập từ khóa tìm kiếm"
              onChange={(e) => setKeyWord(e.target.value)}
            />
            <button type="submit" className="search-mobile-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="header-content flex-center">
            <div className="categories">
              <button className="btn">
                <i className="fa-solid fa-bars"></i>
                danh mục sản phẩm
              </button>
            </div>
            <div className="bars" onClick={handleClickBar}>
              <i
                className={clicked ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
              ></i>
            </div>
            <ul className="navbar flex-center">
              <li className="navbar-item">
                <NavLink to="/" exact className="links">
                  trang chủ
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/intro" className="links">
                  giới thiệu
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/all/products" className="links">
                  sản phẩm
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/all/news" className="links">
                  tin tức
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/contact" className="links">
                  liên hệ
                </NavLink>
              </li>
            </ul>
            <ul
              className={
                clicked
                  ? "navbar-mobile flex-center"
                  : "navbar-mobile active flex-center"
              }
            >
              <li className="navbar-moblie-item">
                <NavLink to="/" exact className="links">
                  trang chủ
                </NavLink>
              </li>
              <li className="navbar-moblie-item">
                <NavLink to="/intro" className="links">
                  giới thiệu
                </NavLink>
              </li>
              <li className="navbar-moblie-item">
                <NavLink to="/all/products" className="links">
                  sản phẩm
                </NavLink>
              </li>
              <li className="navbar-moblie-item">
                <NavLink to="/all/news" className="links">
                  tin tức
                </NavLink>
              </li>
              <li className="navbar-moblie-item">
                <NavLink to="/contact" className="links">
                  liên hệ
                </NavLink>
              </li>
              <li className="navbar-moblie-item">
                <NavLink to="/register" className="links">
                  đăng ký
                </NavLink>
              </li>
              <li className="navbar-moblie-item">
                <NavLink to="/login" className="links">
                  đăng nhập
                </NavLink>
              </li>
            </ul>
            <div className="hotline">
              <i className="fa-solid fa-headphones"></i>
              <span>
                hotline:<a href="tel:0912117494">0912117494</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
