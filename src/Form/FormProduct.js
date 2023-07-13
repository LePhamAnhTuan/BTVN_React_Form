import React, { Component, useEffect } from "react";
import ProductList from "./ProductList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { luuLocal } from "../util/localStore";

const FormProduct = () => {
  const [valueInput, setValueInput] = useState({
    fullName: "",
    userName: "",
    passWorld: "",
    phoneNumber: "",
    email: "",
    userType: "",
  });
  const dispatch = useDispatch();
  const getValue = (event) => {
    let { id, value } = event.target;
    setValueInput({
      ...valueInput,
      [id]: value,
    });
  };

  const addArrForm = () => {
    dispatch({ type: "GET", payload: valueInput });
    luuLocal("arrFrom", valueInput);

    console.log("dispatch: ", dispatch);
  };

  console.log("valueInput: ", valueInput);
  return (
    <div className="container ">
      <form className="bg-secondary p-3">
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="userName" className="form-label">
              Tài Khoản
            </label>
            <input
              onChange={getValue}
              type="text"
              className="form-control"
              id="userName"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="fullName" className="form-label">
              Họ Tên
            </label>
            <input
              onChange={getValue}
              type="text"
              className="form-control"
              id="fullName"
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="passWorld" className="form-label">
              Mật Khẩu
            </label>
            <input
              onChange={getValue}
              type="text"
              className="form-control"
              id="passWorld"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="phoneNumber" className="form-label">
              Số Điện Thoại
            </label>
            <input
              onChange={getValue}
              type="text"
              className="form-control"
              id="phoneNumber"
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              onChange={getValue}
              type="text"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="userType" className="form-label">
              Mã Loại Người Dùng
            </label>
            <select
              onChange={getValue}
              type="text"
              className="form-control"
              id="userType"
            >
              <option value="khachHang">Khách Hàng</option>
              <option value="nhanVien">Nhân Viên</option>
              <option value="hocSinh">Học Sinh</option>
            </select>
          </div>
        </div>
        <button onClick={addArrForm} type="button" className="btn btn-primary">
          Thêm
        </button>
        <button className="btn btn-danger">Cập Nhật</button>
      </form>
      <ProductList />
    </div>
  );
};

export default FormProduct;
