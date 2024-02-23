import React, { useState } from "react";
import UpNavbar from "../Navbar/UpNavbar";
import { Button, TextField } from "@mui/material";
import { useProduct } from "../../context/ProductContext";
import { Link } from "react-router-dom";

const Admin = () => {
  const { addProduct } = useProduct();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  function addContext() {
    const newObj = {
      name: name,
      price: price,
      type: type,
      image: image,
    };
    addProduct(newObj);
  }
  let number = price.replace(/[a-z]/g, "");
  // let number = price.split('').filter(el=> +el == el).join('');
  return (
    <div>
      <UpNavbar />
      <div id="admin">
        <div className="container">
          <div className="admin">
            <h1>ADD PRODUCT</h1>
            <TextField
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
              placeholder="Name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setPrice(e.target.value)}
              id="outlined-basic"
              placeholder="Price"
              variant="outlined"
              value={number}
            />
            <TextField
              onChange={(e) => setType(e.target.value)}
              id="outlined-basic"
              placeholder="Type"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setImage(e.target.value)}
              id="outlined-basic"
              placeholder="IMG url"
              variant="outlined"
            />
            <Link to="/">
              <button onClick={addContext}>CREATE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
