import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../Redux/actions/ProductActions";
import PaginationAllProduct from "../components/homepage/PaginationAllProduct";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import { Link } from "react-router-dom";

const AllProduct = ({ match }) => {
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  return (
    <>
      <Header />
      <section className="allproduct" id="allproduct">
        <div className="container">
          <div className="allproduct-main">
            <div className="product-medium flex-column">
              <div className="heading">
                <h2 className="skew">tất cả sản phẩm</h2>
              </div>
              <div className="content">
                {loading ? (
                  <p>
                    <Loading />
                  </p>
                ) : error ? (
                  <p>
                    <Message variant="alert-danger">{error}</Message>
                  </p>
                ) : (
                  <>
                    {products &&
                      products.length > 0 &&
                      products.map((product) => (
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
              <PaginationAllProduct
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ""}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default AllProduct;
