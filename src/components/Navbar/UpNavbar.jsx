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
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
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
  const { data, setData, getProduct, setDark, dark } = useProduct();
  const { user, logOut } = useAuthContext();

  let start = ["FINAL HOURS OF UP ", "GET YOUR 20$ BONUS REWARD"];

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
          background: dark ? "white" : "",
          transition: "0.3s",
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
              {start}
            </h4>
          </div>
        </div>
      </div>
      <div
        style={{ background: dark ? "black" : "", transition: "0.3s" }}
        id="upnav"
      >
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
                    background: dark ? "white" : "",
                    borderRadius: "100%",
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
              <h5 style={{ color: dark ? "white" : "" }}>MEN</h5>
              <h5 style={{ color: dark ? "white" : "" }}>WOMEN</h5>
              <h5 style={{ color: dark ? "white" : "" }}>KIDS</h5>
              <span
                style={{
                  display: "flex",
                  gap: "1pc",
                  fontWeight: "100",
                }}
              >
                <h5 style={{ color: dark ? "white" : "" }}>SALE</h5>
                <h5 style={{ color: dark ? "white" : "" }}>3 STRIPE LIFE</h5>
              </span>
            </div>
            <div
              style={{
                background: dark ? "white" : "",
                width: "335px",
                borderRadius: "10px",
              }}
              className="upnav-adm"
            >
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
              {/* dark */}
              <button
                onClick={() => setDark(!dark)}
                style={{
                  background: "none",
                  border: "none",
                  backgroundColor: dark ? "white" : "",
                  borderRadius: "100%",
                }}
              >
                {dark ? <Brightness5Icon /> : <Brightness4Icon />}
              </button>
              {/* dark */}
              {/* <ShoppingBagIcon /> */}
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
