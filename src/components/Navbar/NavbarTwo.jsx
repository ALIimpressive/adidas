import React from "react";
import log1 from "./img/Michael Jordan Finals (Копировать).jpg";
import log2 from "./img/16954619164b26d588383c821f1fb6ab7293a3f05e_thumbnail_720x.jpg";
import log3 from "./img/Forum.jpg";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { useProduct } from "../../context/ProductContext";
const NavbarTwo = () => {
  const { data } = useProduct();
  return (
    <div>
      <div id="navtwo">
        <div className="container">
          <div className="navtwo">
            <div className="navtwo-text">
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "50px 0",
                }}
              >
                <KeyboardReturnIcon />
                <h4
                  style={{
                    fontWeight: "800",
                  }}
                >
                  BACK
                </h4>
              </span>
              <h4>Home/</h4>
              <h4>Men/</h4>
              <h4>Basketball</h4>
            </div>
            <div>
              <h1>MEN'S BASKETBALL GEAR: UP TO 65% OFF WITH CODE* BIGSALE</h1>
            </div>
            <div className="navtwo-img">
              <div className="two-img">
                <div className="jors">
                  <Card className="jor" sx={{ maxWidth: 500 }}>
                    <CardActionArea
                      className="jor"
                      sx={{
                        width: "200px",
                        height: "240px",
                      }}
                    >
                      <CardMedia
                        className="jor"
                        component="img"
                        height="140"
                        image={log1}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h7" component="div">
                          ALL <br />
                          BASKETBALL
                          <br />
                          JORDAN
                          <br />
                          MIK
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card className="jor" sx={{ maxWidth: 500 }}>
                    <CardActionArea
                      className="jor"
                      sx={{
                        width: "200px",
                      }}
                    >
                      <CardMedia
                        className="jor"
                        component="img"
                        height="140"
                        image={log2}
                        alt="green iguana"
                      />
                      <CardContent className="jor">
                        <Typography
                          className="jor"
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          ON-COURT <br />
                          Game-ready pieces
                          <br />
                          built for breakout <br />
                          performankes
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card className="jor" sx={{ maxWidth: 500 }}>
                    <CardActionArea
                      className="jor"
                      sx={{
                        width: "200px",
                      }}
                    >
                      <CardMedia
                        className="jor"
                        component="img"
                        height="140"
                        image={log3}
                        alt="green iguana"
                      />
                      <CardContent className="jor">
                        <Typography
                          className="jor"
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          OFF-COURT <br />
                          Versatile looks <br />
                          rooted in effoetless <br />
                          hoops style
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
                <Box id="leng">
                  <Box className="container">
                    <Box className="leng">
                      {<h2>В сайте есть целых ({data.length}) -товаров</h2>}
                    </Box>
                  </Box>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tww"></div>
    </div>
  );
};

export default NavbarTwo;
