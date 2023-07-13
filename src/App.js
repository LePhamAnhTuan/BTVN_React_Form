import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Form/ProductList";
import FormProduct from "./Form/FormProduct";
import Home from "./Page/Home";
import Error from "./404/Error";
import DemoRedux from "./DemoRedux";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="product" element={<ProductList />} />
            <Route path="form" element={<FormProduct />} />
            <Route path="404" element={<Error />} />
            <Route path="redux" element={<DemoRedux />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
