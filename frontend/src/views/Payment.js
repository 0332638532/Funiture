import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { savePaymentMethod } from "../Redux/actions/cartActions";
import { ORDER_CREATE_RESET } from "../Redux/constants/OrderConstants";
import { createOrder } from "../Redux/actions/orderActions";
import Message from "../components/LoadingError/Error";

const Payment = ({ history }) => {
  window.scrollTo(0, 0);
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();
  if (!shippingAddress) {
    history.push("/shipping");
  }

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed();
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 1000000 ? 0 : 100000);

  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed();

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [history, dispatch, success, order]);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      <div id="shipping" className="shipping">
        <div className="deliver">
          <form className="form">
            <h2>Sea Furniture</h2>
            <span>
              Giỏ hàng<i className="fa-solid fa-chevron-right"></i>
            </span>
            <span>
              Thông tin giao hàng<i className="fa-solid fa-chevron-right"></i>
            </span>
            <span className="active">
              Phương thức thanh toán
              <i className="fa-solid fa-chevron-right"></i>
            </span>
            <h3>phương thức vận chuyển</h3>

            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">
                thanh toán qua thẻ ngân hàng
              </label>
            </div>
            {cart.cartItems.length === 0 ? null : (
              <div className="btn-deliver">
                <button type="submit" onClick={handleClick}>
                  Tiến hành thanh toán
                </button>
              </div>
            )}
            {error && <Message className="alert-danger">{error}</Message>}
          </form>
        </div>
        <div className="info-payment">
          <div className="max-with">
            {cartItems.map((item, index) => (
              <div className="info-product" key={index}>
                <div className="image">
                  <img src={item.image} alt="product" />
                  <span className="count">{item.quantity}</span>
                  <h5 className="name">{item.name}</h5>
                </div>
                <h5 className="price">
                  {new Intl.NumberFormat("vi-VN").format(`${item.price}`)}₫
                </h5>
              </div>
            ))}

            <div className="temporary-price">
              <p>tạm tính</p>
              <p>
                {new Intl.NumberFormat("vi-VN").format(`${cart.itemsPrice}`)}₫
              </p>
            </div>
            <div className="temporary-price">
              <p>Phí vận chuyển</p>
              <p>
                {new Intl.NumberFormat("vi-VN").format(`${cart.shippingPrice}`)}
                ₫
              </p>
            </div>
            <div className="total">
              <h2 className="sumTotal">tổng cộng</h2>
              <h2 className="sumTotal">
                <span>vnd</span>
                {new Intl.NumberFormat("vi-VN").format(`${cart.totalPrice}`)}₫
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
