import React from "react";
import Pagination from "@mui/material/Pagination";
import { useProduct } from "../../context/ProductContext";

const ProductPagination = () => {
    const {setPagination, count} = useProduct()
    function handleChange(p, n) {
        setPagination(n)
    }
  return (
    <div>
      <div id="pagination">
        <div className="conatiner">
          <div className="pagination">
            <Pagination onChange={handleChange} count={count} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPagination;
