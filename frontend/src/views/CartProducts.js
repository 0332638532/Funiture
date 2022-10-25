import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeProduct } from "../Redux/actions/cartActions";

const CartProducts = ({ match, location, history }) => {
  window.scrollTo(0, 0);
  const productId = match.params.id;
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  const redirect = location.search ? location.search.split("=")[1] : "/login";
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const total = cartItems.reduce(
    (sum, number) => sum + number.quantity * number.price,
    0
  );

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const handleCheckOut = () => {
    if (!userInfo || userInfo === null) {
      history.push(redirect);
    } else {
      history.push("/login?redirect=shipping");
    }
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };
  return (
    <>
      <Header />
      <div id="cart" className="cart">
        <div className="container">
          <h3>giỏ hàng của bạn</h3>
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <h5>
                Không có sản phẩm nào trong giỏ hàng. Quay lại cửa hàng để tiếp
                tục mua sắm
              </h5>
            </div>
          ) : (
            <>
              <div className="shopping-cart">
                <div className="column-labels">
                  <label className="product-image">Hình Ảnh</label>
                  <label className="product-details">Sản Phẩm</label>
                  <label className="product-price">Giá</label>
                  <label className="product-quantity">Số Lượng</label>
                  <label className="product-removal">Xóa</label>
                  <label className="product-line-price">Thành Tiền</label>
                </div>
                {cartItems.map((item) => {
                  return (
                    <div className="product">
                      <div className="product-image">
                        <img src={item.image} alt="img" />
                      </div>
                      <div className="product-details">
                        <div className="product-title">
                          <Link to={`/products/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                      </div>
                      <div className="product-price">
                        {new Intl.NumberFormat("vi-VN").format(`${item.price}`)}
                        ₫
                      </div>
                      <div className="product-quantity">
                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((p) => (
                            <option key={p + 1} value={p + 1}>
                              {p + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="product-removal">
                        <button
                          onClick={() => handleRemoveProduct(item.product)}
                          className="remove-product"
                        >
                          Xóa
                        </button>
                      </div>
                      <div className="product-line-price">
                        {new Intl.NumberFormat("vi-VN").format(`${item.price}`)}
                        ₫
                      </div>
                    </div>
                  );
                })}

                <div className="totals-item">
                  <label>Tổng số thành tiền:</label>
                  <div className="totals-value" id="cart-subtotal">
                    {new Intl.NumberFormat("vi-VN").format(`${total}`)}₫
                  </div>
                </div>

                <div className="checkout">
                  <Link to="/">
                    <button className="btn bgc">tiếp tục mua hàng</button>
                  </Link>
                  {total > 0 && (
                    <button className="btn" onClick={handleCheckOut}>
                      tiến hành thanh toán
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CartProducts;
