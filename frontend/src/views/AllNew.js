import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import { listNew } from "../Redux/actions/NewAction";
import { Link } from "react-router-dom";

const AllNew = () => {
  const dispatch = useDispatch();
  const newListProduct = useSelector((state) => state.newListProduct);
  const { loading, error, news } = newListProduct;

  useEffect(() => {
    dispatch(listNew());
  }, [dispatch]);

  return (
    <>
      <Header />
      <section id="all-news" className="all-news">
        <div className="container">
          <div className="all-news-main flex-column">
            <div className="heading">
              <h2 className="skew">tin tức</h2>
            </div>
            <div className="news-main-content">
              {news &&
                news.map((item, index) => (
                  <Link
                    to={`/news/${item._id}`}
                    className="item flex-column"
                    key={index}
                  >
                    <div className="image">
                      <img src={item.image} className="img" alt="img" />
                      <div className="infomation">
                        <span className="date">
                          <i className="fa-solid fa-calendar-check"></i>
                          {""} {item.date}
                        </span>
                        <span className="user">
                          đăng bởi: <h4>Long Nguyen</h4>
                        </span>
                      </div>
                    </div>
                    <a href="/#" className="caption">
                      {item.name}
                    </a>
                    <p className="description">{item.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default AllNew;
