import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const FACE_API = "http://localhost:3000/data";
  //1
  const [data, setData] = useState([]);
  const [favarite, setFavarite] = useState(
    JSON.parse(localStorage.getItem("likes")) || []
  );
  //1
  // EDIT
  const [oneProduct, setOneProduct] = useState({});
  //EDIT
  // STATE
  // FUNCTION
  //1
  async function addProduct(newProduct) {
    await axios.post(FACE_API, newProduct);
    getProduct();
  }
  //1
  //READ
  async function getProduct() {
    let { data } = await axios(FACE_API);
    setData(data);
  }
  //READ
  // DELETE
  async function delProduct(id) {
    await axios.delete(`${FACE_API}/${id}`);
    getProduct();
  }
  //DELETE
  //EDITED
  async function getOneProduct(id) {
    const { data } = await axios(`${FACE_API}/${id}`);
    setOneProduct(data);
    getProduct();
  }
  async function editProduct(id, editedProduct) {
    await axios.patch(`${FACE_API}/${id}`, editedProduct);
  }
  //EDITED
  // PAGINATION
  const [pagination, setPagination] = useState(1);

  const pages = 7;
  const count = Math.ceil(data.length / pages);

  function currentPage() {
    const begin = (pagination - 1) * pages;
    const end = begin + pages;
    return data.slice(begin, end);
  }

  // PAGINATION
  // DARK
  let locDark = JSON.parse(localStorage.getItem("keyDark")) || false;
  const [dark, setDark] = useState(locDark || false);
  localStorage.setItem("keyDark", JSON.stringify(dark));
  // DARK
  // FUNCTION
  //
  const values = {
    addProduct,
    getProduct,
    data,
    delProduct,
    getOneProduct,
    editProduct,
    oneProduct,
    setPagination,
    count,
    currentPage,
    setData,
    favarite,
    setFavarite,
    setDark,
    dark,
  };
  //
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
