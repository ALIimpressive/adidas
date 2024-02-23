import React, { useEffect, useState } from "react";
import UpNavbar from "./UpNavbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useProduct } from "../../context/ProductContext";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

const NavbarFavor = () => {
  const  navigate = useNavigate()
  const { favarite, getProduct } = useProduct();
  //
  let [date, setDate] = useState([]);
  //
  let data = JSON.parse(localStorage.getItem("likes"));
  function delFavor(idx) {
    let newData = data.filter((el) => el.id !== idx);
    localStorage.setItem("likes", JSON.stringify(newData));
  }

  function readData() {
    setDate(data);
  }
  useEffect(() => {
    readData();
  }, []);
  //
  return (
    <div>
      <UpNavbar />
      <div id="favor">
        <div className="container">
          <div
            className="favor"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "start",
              gap: "20px",
            }}
          >
            {favarite.map((el) => (
              <div
                style={{
                  padding: "100px  0",
                }}
                className="scrol"
              >
                <div id="card">
                  <div className="card">
                    <Card
                      className="immg"
                      sx={{
                        maxWidth: 345,
                        width: "900px",
                        height: "370px",
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
                           navigate( delFavor(el.id)/getProduct())
                          }}
                          style={{
                            background: "none",
                            border: "none",
                            color: "red",
                          }}
                        >
                          <DeleteOutlineIcon />
                        </button>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarFavor;
