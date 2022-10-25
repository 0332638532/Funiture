import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetails, payOrder } from "../Redux/actions/orderActions";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import moment from "moment";
import { axiosInstance } from "../config";
import axios from "axios";
import { ORDER_PAY_RESET } from "../Redux/constants/OrderConstants";
const Order = ({ location, history, match }) => {
  window.scrollTo(0, 0);
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed();
  };

  const orderId = match.params.id;
  const redirect = location.search
    ? location.search.split("=")[1]
    : "/payment/success";

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;
  const [sdkReady, setSdkReady] = useState(false);

  if (!loading) {
    order.itemsPrice = addDecimals(
      order.orderItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
    );
    order.shippingPrice = addDecimals(order.itemsPrice > 1000000 ? 0 : 100000);

    order.totalPrice = (
      Number(order.itemsPrice) + Number(order.shippingPrice)
    ).toFixed();
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axiosInstance.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order]);

  const successPayMentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
    history.push(redirect);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message className="alert-danger">{error}</Message>
      ) : (
        <div id="shipping" className="shipping">
          <div className="deliver">
            <form className="form">
              <h2>Sea Furniture</h2>
              <h3 className="text">Xác nhận thông tin đơn hàng</h3>
              <div className="list-info">
                <div className="list-info-user">
                  <div className="info-user">
                    <i className="fa-solid fa-user"></i>
                    <span>khách hàng</span>
                  </div>
                  <p>Tên khách hàng: {order.shippingAddress.name}</p>
                  <p>Số điện thoại: {order.shippingAddress.phone}</p>
                </div>
                <div className="list-info-user">
                  <div className="info-user">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>địa chỉ giao hàng</span>
                  </div>
                  <p>
                    {order.shippingAddress.address},{" "}
                    {order.shippingAddress.selectedWard.label},{" "}
                    {order.shippingAddress.selectedDistrict.label},{" "}
                    {`Thành phố ${order.shippingAddress.selectedCity.label}`}
                  </p>
                  {order.isDelivered ? (
                    <div className="info-status">
                      <p>
                        Giao hàng vào ngày{" "}
                        {moment(order.isDelivered).calendar()}
                      </p>
                    </div>
                  ) : (
                    <div className="info-status active">
                      <p>chưa giao hàng</p>
                    </div>
                  )}
                </div>
                <div className="list-info-user">
                  <div className="info-user">
                    <i className="fa-solid fa-truck-moving"></i>
                    <span>phương thức giao hàng</span>
                  </div>
                  <p>Thanh toán qua: PayPal</p>
                  {order.isPaid ? (
                    <div className="info-status">
                      <p>
                        thanh toán vào ngày {moment(order.paidAt).calendar()}
                      </p>
                    </div>
                  ) : (
                    <div className="info-status active">
                      <p>chưa thanh toán</p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="info-payment">
            <div className="max-with">
              {order.orderItems.length === 0 ? (
                <Message variant="alert-danger">Đơn hàng trống</Message>
              ) : (
                <>
                  {order.orderItems.map((item, index) => (
                    <div className="info-product" key={index}>
                      <div className="image">
                        <img src={item.image} alt="product" />
                        <span className="count">{item.quantity}</span>
                        <h5 className="name">{item.name}</h5>
                      </div>
                      <h5 className="price">
                        {new Intl.NumberFormat("vi-VN").format(`${item.price}`)}
                        ₫
                      </h5>
                    </div>
                  ))}

                  <div className="temporary-price">
                    <p>tạm tính</p>
                    <p>
                      {new Intl.NumberFormat("vi-VN").format(
                        `${order.itemsPrice}`
                      )}
                      ₫
                    </p>
                  </div>
                  <div className="temporary-price">
                    <p>Phí vận chuyển</p>
                    <p>
                      {new Intl.NumberFormat("vi-VN").format(
                        `${order.shippingPrice}`
                      )}
                      ₫
                    </p>
                  </div>
                  <div className="total">
                    <h2 className="sumTotal">tổng cộng</h2>
                    <h2 className="sumTotal">
                      <span>vnd</span>
                      {new Intl.NumberFormat("vi-VN").format(
                        `${order.totalPrice}`
                      )}
                      ₫
                    </h2>
                  </div>
                  {!order.isPaid && (
                    <div className="btn-paypal">
                      {loadingPay && <Loading />}
                      {!sdkReady ? (
                        <Loading />
                      ) : (
                        <PayPalButton
                          amount={order.totalPrice}
                          onSuccess={successPayMentHandler}
                        />
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Order;
