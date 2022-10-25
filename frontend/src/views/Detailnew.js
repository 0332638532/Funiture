import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { listNewDetails } from "../Redux/actions/NewAction";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
const Detailnew = ({ match }) => {
  const newID = match.params.id;
  const dispatch = useDispatch();
  const newDetails = useSelector((state) => state.newDetails);
  const { loading, error, newItem } = newDetails;

  useEffect(() => {
    dispatch(listNewDetails(newID));
  }, [dispatch, newID]);

  return (
    <>
      <Header />
      <section id="detail-new" className="detail-new">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <div className="container">
            {newItem && (
              <div className="detail-new-main">
                <h2>{newItem.name}</h2>
                <div className="date">
                  <i class="fa-solid fa-clock"></i> <span>{newItem.date}</span>
                </div>
                <img src={newItem.image} alt="" />
                <p>{newItem.subDesc}</p>
              </div>
            )}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};
export default Detailnew;
