import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../Redux/actions/ProductActions";
import Loading from "../components/LoadingError/Loading.js";
import Message from "../components/LoadingError/Error.js";

const DetailProduct = ({ match, history }) => {
  window.scrollTo(0, 0);
  const productId = match.params.id;
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  const handleToAddCart = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?quantity=${quantity}`);
  };
  return (
    <>
      <Header />
      <div id="detailProduct" className="detailProduct">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <div className="container">
            <div className="detailProduct-main">
              {product && (
                <>
                  <div className="detailProduct-main-image">
                    <div className="img">
                      <img src={product.image} alt={product.name}></img>
                    </div>
                  </div>
                  <div className="detailProduct-main-box">
                    <h2 className="name">{product.name}</h2>
                    <h3 className="price">
                      {new Intl.NumberFormat("vi-VN").format(
                        `${product.price}`
                      )}
                      ₫
                    </h3>
                    <h5 className="status">
                      tình trạng:{" "}
                      {product.countInStock > 0 ? (
                        <span>Còn Hàng</span>
                      ) : (
                        <span>Tạm Hết Hàng</span>
                      )}
                    </h5>
                    <h5 className="status">
                      chi tiết sản phẩm: {product.description}
                    </h5>

                    {product.countInStock > 0 ? (
                      <>
                        <p className="quantity">
                          số lượng
                          <select
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (item) => (
                                <option key={item + 1} value={item + 1}>
                                  {item + 1}
                                </option>
                              )
                            )}
                          </select>
                        </p>
                        <button onClick={handleToAddCart} className="btn">
                          thêm vào giỏ hàng
                        </button>
                      </>
                    ) : null}
                  </div>
                </>
              )}
            </div>

            <div
              class="fb-comments"
              data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
              data-width="100%"
              data-numposts="1"
            ></div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default DetailProduct;
