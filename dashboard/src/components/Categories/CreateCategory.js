import React from "react";

const CreateCategory = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Tên loại sản phẩm
          </label>
          <input
            type="text"
            placeholder="Nhập tên loại sản phẩm"
            className="form-control py-3"
            id="product_name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Hình Ảnh</label>
          <input className="form-control" type="file" />
        </div>
        <div className="mb-4">
          <label className="form-label">Chi tiết loại sản phẩm</label>
          <textarea
            placeholder="Nội dung..."
            className="form-control"
            rows="4"
          ></textarea>
        </div>

        <div className="d-grid">
          <button className="btn btn-primary py-3">Tạo loại sản phẩm</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
