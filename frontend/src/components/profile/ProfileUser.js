import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingError/Loading";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import { toast } from "react-toastify";
import { updateProfile } from "../../Redux/actions/userActions";

const ProfileUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPhone, setConfirmPhone] = useState("");
  const toastID = React.useRef(null);

  const toastObj = {
    pauseOnfocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  const dispatch = useDispatch();

  const userDetailsProfile = useSelector((state) => state.userDetailsProfile);
  const { loading, error, user } = userDetailsProfile;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { loading: updateLoading } = userUpdateProfile;

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (phone !== confirmPhone) {
      if (!toast.isActive(toastID.current)) {
        toastID.current = toast.error(
          "Số điện thoại không trùng khớp",
          toastObj
        );
        return;
      }
    } else {
      dispatch(updateProfile({ id: user._id, name, email, password, phone }));
      if (!toast.isActive(toastID.current)) {
        toastID.current = toast.success("Số điện thoại trùng khớp", toastObj);
      }
    }

    if (password !== confirmPassword) {
      if (!toast.isActive(toastID.current)) {
        toastID.current = toast.error("Mật khẩu không trùng khớp", toastObj);
      }
      return;
    } else {
      dispatch(updateProfile({ id: user._id, name, email, password, phone }));
      if (!toast.isActive(toastID.current)) {
        toastID.current = toast.success("Mật khẩu trùng khớp", toastObj);
      }
    }
  };
  return (
    <>
      <Toast />
      {error && <Message variant="alert-danger">{error}</Message>}
      {loading && <Loading />}
      {updateLoading && <Loading />}
      <div className="box">
        <div className="item">
          <h3 className="label">họ tên</h3>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="item">
          <h3 className="label">tài khoản</h3>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="item">
          <h3 className="label">số điện thoại mới</h3>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="item">
          <h3 className="label">nhập lại số điện thoại mới</h3>
          <input
            type="text"
            value={confirmPhone}
            onChange={(e) => setConfirmPhone(e.target.value)}
          />
        </div>
        <div className="item">
          <h3 className="label">mật khẩu mới</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="item">
          <h3 className="label">nhập lại mật khẩu mới</h3>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-update" onClick={handleUpdateProfile}>
        Cập nhật
      </button>
    </>
  );
};
export default ProfileUser;
