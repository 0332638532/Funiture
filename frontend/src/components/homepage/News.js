import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listNew } from "../../Redux/actions/NewAction";
import { Link } from "react-router-dom";

const News = () => {
  const dispatch = useDispatch();

  const newListProduct = useSelector((state) => state.newListProduct);
  const { loading, error, news } = newListProduct;
  const sliceNew = news.slice(0, 3);

  useEffect(() => {
    dispatch(listNew());
  }, [dispatch]);

  return (
    <section id="news" className="news">
      <div className="container">
        <div className="news-main flex-column">
          <div className="heading">
            <h2 className="skew">tin tức</h2>
          </div>
          <div className="news-main-content">
            {sliceNew &&
              sliceNew.map((item, index) => (
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
  );
};
export default News;
