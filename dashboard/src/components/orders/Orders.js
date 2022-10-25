import React from "react";
import { Link } from "react-router-dom";
import { moment } from "moment";

const Orders = (props) => {
  const { orders } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Tên</th>
          <th scope="col">Email</th>
          <th scope="col">Giá</th>
          <th scope="col">Thanh Toán</th>
          <th scope="col">Ngày</th>
          <th>Trạng Thái</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((item) => {
          return (
            <tr key={item._id}>
              <td>
                <b>{item.user.name}</b>
              </td>
              <td>{item.user.email}</td>
              <td>
                {new Intl.NumberFormat("vi-VN").format(`${item.totalPrice}`)}₫
              </td>
              <td>
                {item.isPaid ? (
                  <span className="badge rounded-pill alert-success">
                    Đã Thanh toán
                  </span>
                ) : (
                  <span className="badge rounded-pill alert-danger">
                    Chưa thanh toán
                  </span>
                )}
              </td>
              <td>{item.createdAt}</td>

              <td>
                {item.isDelivered ? (
                  <span className="badge btn-success">Đã giao</span>
                ) : (
                  <span className="badge btn-dark">Chưa giao</span>
                )}
              </td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/order/${item._id}`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
          );
        })}

        {/* Not paid Not delivered */}
        {/*<tr>
          <td>
            <b>Velcro Sneakers For Boys & Girls (Blue)</b>
          </td>
          <td>user@example.com</td>
          <td>$45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr>*/}
      </tbody>
    </table>
  );
};

export default Orders;
