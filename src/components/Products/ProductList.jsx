import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
const ProductList = () => {
  const { getProduct, data, currentPage } = useProduct();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div id="list">
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1pc",
          }}
          className="list"
        >
          {data ? currentPage().map((el, idx) => <ProductCard key={idx} el={el} />) :
            (<h1>Loading...</h1>)}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
