import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useProduct } from "../../context/ProductContext";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard = ({ el }) => {
  const { delProduct, setFavarite, getProduct } = useProduct();

  const navigate = useNavigate();
  let favorite = JSON.parse(localStorage.getItem("likes")) || [];
  const [favor, setFavor] = useState(favorite.map((el) => el.id));
  function addStorage(el) {
    if (favorite.some((item) => item.id === el.id)) {
      return;
    }

    favorite.push(el);
    localStorage.setItem("likes", JSON.stringify(favorite));
    setFavarite(favorite);
  }

  return (
    <div className="scrol">
      <div id="card">
        <div className="card">
          <Card
            className="immg"
            sx={{
              maxWidth: 345,
              width: "900px",
              height: "370px",
              background: "none",
              borderRadius: "5px",
            }}
          >
            <img
              style={{
                width: "360px",
                height: "250px",
                objectFit: "cover",
              }}
              src={el.image}
              alt=""
            />
            <CardContent
              sx={{
                height: "50px",
                gap: "1pc",
              }}
            >
              <div
                className="carr"
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                  }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  <h4>{el.name}</h4>
                  <h4>{el.type}</h4>
                  <h4>{el.price}</h4>
                </Typography>
              </div>
            </CardContent>
            <div className="admsss">
              <button
                onClick={() => {
                  navigate(addStorage(el) / getProduct());
                }}
                style={{
                  color: favor.find((ell) => ell == el.id) ? "red" : "white",
                  background: "none",
                  border: "none",
                }}
              >
                <FavoriteIcon />
                {/* <FavoriteBorderIcon /> sx={{ color: "black" }}  */}
              </button>

              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "gold",
                }}
                onClick={() => delProduct(el.id)}
              >
                <DeleteOutlineIcon />
              </button>
              <button
                onClick={() => navigate(`/edit/${el.id}`)}
                style={{
                  background: "none",
                  border: "none",
                  color: "gold",
                }}
              >
                <EditNoteIcon />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
