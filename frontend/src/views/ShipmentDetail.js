import React from "react";
import useLocationForm from "./UseLocationForm";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useState } from "react";
import { saveShippingAddress } from "../Redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const ShipmentDetail = ({ history }) => {
  window.scrollTo(0, 0);
  const { state, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        name,
        phone,
        address,
        selectedCity,
        selectedDistrict,
        selectedWard,
      })
    );
    history.push("/payment");
    setName("");
    setPhone("");
    setAddress("");
  };

  const total = cartItems.reduce(
    (sum, number) => sum + number.quantity * number.price,
    0
  );

  return (
    <>
      {cart.cartItems.length === 0 ? (
        <div className="empty">
          <h5>Không có sản phẩm nào để thanh toán</h5>
          <Link to="/">Trang chủ Seafurniture</Link>
        </div>
      ) : (
        <div id="shipping" className="shipping">
          <div className="deliver">
            <form className="form">
              <h2>Sea Furniture</h2>
              <>
                <span>
                  Giỏ hàng<i className="fa-solid fa-chevron-right"></i>
                </span>
                <span className="active">
                  Thông tin giao hàng
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <span>
                  Phương thức thanh toán
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <h3>Thông tin giao hàng</h3>
                <div className="user">
                  <div className="image">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <span>{userInfo.name}</span>
                  <span>({userInfo.email})</span>
                </div>
                <div className="form__div">
                  <input
                    type="text"
                    className="form__input"
                    placeholder=" "
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label for="" className="form__label">
                    họ tên
                  </label>
                </div>
                <div className="form__div">
                  <input
                    type="text"
                    className="form__input"
                    placeholder=" "
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label for="" className="form__label">
                    số điện thoại
                  </label>
                </div>
                <div className="form__div">
                  <input
                    type="text"
                    className="form__input"
                    placeholder=" "
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label for="" className="form__label">
                    địa chỉ
                  </label>
                </div>

                <Select
                  name="cityId"
                  key={`cityId_${selectedCity?.value}`}
                  isDisabled={cityOptions.length === 0}
                  options={cityOptions}
                  onChange={(option) => onCitySelect(option)}
                  placeholder="Tỉnh/Thành"
                  defaultValue={selectedCity}
                />

                <Select
                  name="districtId"
                  key={`districtId_${selectedDistrict?.value}`}
                  isDisabled={districtOptions.length === 0}
                  options={districtOptions}
                  onChange={(option) => onDistrictSelect(option)}
                  placeholder="Quận/Huyện"
                  defaultValue={selectedDistrict}
                />

                <Select
                  name="wardId"
                  key={`wardId_${selectedWard?.value}`}
                  isDisabled={wardOptions.length === 0}
                  options={wardOptions}
                  placeholder="Phường/Xã"
                  onChange={(option) => onWardSelect(option)}
                  defaultValue={selectedWard}
                />

                <div className="btn-deliver">
                  <Link to="/cart">Giỏ hàng</Link>

                  <button type="submit" onClick={handleClick}>
                    Tiếp tục đến phương thức thanh toán
                  </button>
                </div>
              </>
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
                <p>{new Intl.NumberFormat("vi-VN").format(`${total}`)}₫</p>
              </div>
              <div className="total">
                <h2 className="sumTotal">tổng cộng</h2>
                <h2 className="sumTotal">
                  <span>vnd</span>{" "}
                  {new Intl.NumberFormat("vi-VN").format(`${total}`)}₫
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ShipmentDetail;
