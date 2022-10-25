import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/actions/ProductActions";
import Loading from "../LoadingError/Loading.js";
import Message from "../LoadingError/Error.js";

const NewProduct = (props) => {
  const { keyword } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword));
  }, [dispatch, keyword]);

  return (
    <section id="newProducts" className="newProducts">
      <div className="container">
        <div className="newProducts-main flex-column">
          <div className="heading">
            <h2 className="skew">sản phẩm mới về</h2>
          </div>
          <div className="content">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <>
                {products &&
                  products.length > 0 &&
                  products.map((product) => (
                    <Link
                      to={`products/${product._id}`}
                      className="item"
                      key={product._id}
                    >
                      <div className="image">
                        <img src={product.image} className="img" alt="img" />
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
        </div>
      </div>
    </section>
  );
};
export default NewProduct;
