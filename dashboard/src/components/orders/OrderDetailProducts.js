import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = (props) => {
  const { order, loading } = props;

  if (!loading) {
    const addDecimal = (num) => {
      return Math.round(num * 100) / 100;
    };

    order.itemsPrice = addDecimal(
      order.orderItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
    );
  }

  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Sản phẩm</th>
          <th style={{ width: "20%" }}>Giá</th>
          <th style={{ width: "20%" }}>Số lượng</th>
          <th style={{ width: "20%" }} className="text-end">
            Thành tiền
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className="itemside" to="#">
                <div className="left">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "40px", height: "40px" }}
                    className="img-xs"
                  />
                </div>
                <div className="info">{item.name}</div>
              </Link>
            </td>
            <td>{new Intl.NumberFormat("vi-VN").format(`${item.price}`)}₫</td>
            <td>{item.quantity} </td>
            <td className="text-end">
              {" "}
              {new Intl.NumberFormat("vi-VN").format(
                `${item.quantity * item.price}`
              )}
              ₫
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Tạm tính:</dt>{" "}
                <dd>
                  {new Intl.NumberFormat("vi-VN").format(`${order.itemsPrice}`)}
                  ₫
                </dd>
              </dl>
              <dl className="dlist">
                <dt>Tiền vận chuyển:</dt> <dd>{order.shippingPrice}</dd>
              </dl>
              <dl className="dlist">
                <dt>Tổng cộng:</dt>
                <dd>
                  <b className="h5">
                    {new Intl.NumberFormat("vi-VN").format(
                      `${order.totalPrice}`
                    )}
                    ₫
                  </b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Trạng thái:</dt>
                <dd>
                  {order.isPaid ? (
                    <span className="badge rounded-pill alert alert-success text-success">
                      Thanh toán xong
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert alert-danger text-danger">
                      Chưa thanh toán
                    </span>
                  )}
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
