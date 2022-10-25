import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/actions/ProductActions";
import Loading from "../LoadingError/Loading.js";
import Message from "../LoadingError/Error.js";

const OutstandingProducts = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const singleProduct = products.slice(0, 1);
  const sliceProduct = products.slice(0, 8);

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  return (
    <section id="outstanding_products" className="outstanding_products">
      <div className="container">
        <div className="outstanding_products-main">
          <div className="product-large">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <>
                {singleProduct &&
                  singleProduct.length > 0 &&
                  singleProduct.map((item) => (
                    <>
                      <Link
                        to={`/products/${item._id}`}
                        className="image"
                        key={item._id}
                      >
                        <img src={item.image} className="img" alt="img" />
                        <div className="info">
                          <Link
                            to={`/products/${item._id}`}
                            className="iconProduct"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </Link>
                          <Link
                            to={`/cart/${item._id}`}
                            className="iconProduct"
                          >
                            <i className="fas fa-dolly"></i>
                          </Link>
                        </div>
                      </Link>
                      <div className="name">
                        <a href="/#" alt="">
                          {item.name}
                        </a>
                      </div>
                      <div className="price">
                        <h2>
                          {new Intl.NumberFormat("vi-VN").format(
                            `${item.price}`
                          )}
                          ₫
                        </h2>
                      </div>
                    </>
                  ))}
              </>
            )}
          </div>
          <div className="product-medium flex-column">
            <div className="heading">
              <h2 className="skew">nổi bật nhất</h2>
            </div>
            <div className="content">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : (
                <>
                  {sliceProduct &&
                    sliceProduct.length > 0 &&
                    sliceProduct.map((product) => (
                      <Link
                        to={`/products/${product._id}`}
                        className="item"
                        key={product._id}
                      >
                        <div className="image">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="img"
                          />
                          <div className="info">
                            <Link
                              to={`/products/${product._id}`}
                              className="iconProduct"
                            >
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                            <Link
                              to={`/cart/${product._id}`}
                              className="iconProduct"
                            >
                              <i className="fas fa-dolly"></i>
                            </Link>
                          </div>
                        </div>
                        <a href="/#" alt="">
                          {product.name}
                        </a>
                        <p>
                          {new Intl.NumberFormat("vi-VN").format(
                            `${product.price}`
                          )}
                          ₫
                        </p>
                      </Link>
                    ))}
                </>
              )}
            </div>
            <Pagination
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OutstandingProducts;
