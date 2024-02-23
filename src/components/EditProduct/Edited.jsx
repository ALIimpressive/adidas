import React, { useEffect, useState } from "react";
import UpNavbar from "../Navbar/UpNavbar";
import { Button, TextField } from "@mui/material";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const Edited = () => {
  const { getOneProduct, editProduct, oneProduct } = useProduct();

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    setName(oneProduct.name);
    setPrice(oneProduct.price);
    setType(oneProduct.type);
    setImage(oneProduct.image);
  }, [oneProduct]);

  function handleSaveChange() {
    const newObj = {
      name: name,
      price: price,
      type: type,
      image: image,
    };
    editProduct(id, newObj);
  }

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
              value={name}
            />
            <TextField
              onChange={(e) => setPrice(e.target.value)}
              id="outlined-basic"
              placeholder="Price"
              variant="outlined"
              value={price}
            />
            <TextField
              onChange={(e) => setType(e.target.value)}
              id="outlined-basic"
              placeholder="Type"
              variant="outlined"
              value={type}
            />
            <TextField
              onChange={(e) => setImage(e.target.value)}
              id="outlined-basic"
              placeholder="IMG url"
              variant="outlined"
              value={image}
            />
            <Button
              onClick={() => {
                navigate("/");
                handleSaveChange();
              }}
              variant="contained"
              disableElevation
            >
              SAVE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edited;
