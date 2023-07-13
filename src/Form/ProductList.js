import { connect, useSelector } from "react-redux";

import React from "react";

const ProductList = () => {
  const { arrForm } = useSelector((state) => {
    return [state];
  });

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">tên</th>
            <th scope="col">số điện thoại</th>
            <th scope="col">email</th>
            <th scope="col">mã người dùng</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {/* {arrForm.map((item, index) => {
            return (
              <tr>
                <td></td>
                <td>tên</td>
                <td>số điện tdoại</td>
                <td>email</td>
                <td>mã người dùng</td>
                <td>action</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
