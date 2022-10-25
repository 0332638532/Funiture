import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import OutstandingProducts from "../components/homepage/OutstandingProducts";
import { listProduct } from "../Redux/actions/ProductActions";

const ProductsSearch = ({ match, isShowBg, pagenumber }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);
  return (
    <>
      <Header isShowBg={true} />
      <div className="productSearch">
        <div className="container">
          <h2>Có {products.length} kết quả tìm kiếm</h2>
          <OutstandingProducts keyword={keyword} />
        </div>
      </div>
    </>
  );
};
export default ProductsSearch;
