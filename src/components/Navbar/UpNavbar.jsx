import React, { useEffect, useState } from "react";
import log from "../Navbar/img/7b76bea19c0edee8c82b4739a55e914c.jpg";
import TextField from "@mui/material/TextField";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
const UpNavbar = () => {
  const [search, setSearch] = useState("");
  const { data, setData, getProduct } = useProduct();
  const { user, logOut } = useAuthContext();

  let advertising = ["FINAL HOURS OF UP ", "GET YOUR 20$ BONUS REWARD"];
  const index = 0

  function addSearch() {
    if (search.length === 0) {
      getProduct();
    }
    let res = data.filter((el) => el.name.toLowerCase().includes(search));
    setData(res);
  }

  useEffect(() => {
    addSearch();
  }, [search, data.length === 0]);
  // AVTORIZASSIA
  const settings = [
    <Link to="/regg">Register</Link>,
    <Link to="/sign">LogIn</Link>,
    <Link to="/" onClick={() => logOut()}>
      Logout
    </Link>,
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log(user);
  // AVTORIZASSIA
  // console.log(search);
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
        }}
        id="upnavbar"
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              height: "35px",
              paddingRight: "230px",
            }}
            className="upnavbar"
          >
            <h4
              style={{
                paddingLeft: "183px",
              }}
            >
              {/* {setTimeout(() => {
                console.log(advertising[index]);
                index = (index + 1) % advertising.length
              }, 1000)} */}
            </h4>
          </div>
        </div>
      </div>
      <div id="upnav">
        <div className="container">
          <div className="upnav">
            <Link to="/admin">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                }}
              >
                <FingerprintIcon
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </button>
            </Link>
            <Link to="/">
              <div className="upnav-img">
                <img
                  style={{
                    width: "80px",
                    height: "60px",
                    borderRadius: "100%",
                  }}
                  src={log}
                  alt=""
                />
              </div>
            </Link>
            <div className="upnav-text">
              <h5>MEN</h5>
              <h5>WOMEN</h5>
              <h5>KIDS</h5>
              <span
                style={{
                  display: "flex",
                  gap: "1pc",
                  fontWeight: "100",
                }}
              >
                <h5>SALE</h5>
                <h5>3 STRIPE LIFE</h5>
              </span>
            </div>
            <div className="upnav-adm">
              <TextField
                id="outlined-size-small"
                placeholder="Search"
                size="small"
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="serr">
                <SearchIcon />
              </div>
              {/* AVTORIZASSIA */}
              {/* AVTORIZASSIA */}
              <Link to="/favor">
                <FavoriteBorderIcon sx={{ color: "black" }} />
              </Link>
              <ShoppingBagIcon />
              <Box sx={{ flexGrow: 0, width: "30px" }}>
                <Tooltip title={user ? user.email : "user email"}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="" src={user ? user.photoURL : ""} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpNavbar;
