import React from "react";
import EastIcon from "@mui/icons-material/East";
import TwitterIcon from "@mui/icons-material/Twitter";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div id="foter">
        <div className="container">
          <div className="foter">
            <div className="foter-text">
              <h1>JOIN OUR ADICLUB & GET 15% OFF</h1>
              <NavLink to="/regg">
                <button
                  className="btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                    background: "#181818",
                    gap: "1pc",
                    width: "180px",
                    paddingLeft: "7px",
                  }}
                >
                  SIGN UP FOR FREE <EastIcon />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div id="fot">
        <div className="container">
          <div className="fot">
            <div className="fot-text">
              <h3>PRODUCTS</h3>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Accessoeies</p>
              <p>Gift Cards</p>
              <p>New Arrivals</p>
              <p>Best Sellers</p>
              <p>Reallese Dates</p>
              <p>Sale</p>
            </div>
            <div className="fot-text">
              <h3>PRODUCTS</h3>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Accessoeies</p>
              <p>Gift Cards</p>
              <p>New Arrivals</p>
              <p>Best Sellers</p>
              <p>Reallese Dates</p>
              <p>Sale</p>
            </div>
            <div className="fot-text">
              <h3>PRODUCTS</h3>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Accessoeies</p>
              <p>Gift Cards</p>
              <p>New Arrivals</p>
              <p>Best Sellers</p>
              <p>Reallese Dates</p>
              <p>Sale</p>
            </div>
            <div className="fot-text">
              <h3>PRODUCTS</h3>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Accessoeies</p>
              <p>Gift Cards</p>
              <p>New Arrivals</p>
              <p>Best Sellers</p>
              <p>Reallese Dates</p>
              <p>Sale</p>
            </div>
            <div className="fot-text">
              <h3>PRODUCTS</h3>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Accessoeies</p>
              <p>Gift Cards</p>
              <p>New Arrivals</p>
              <p>Best Sellers</p>
              <p>Reallese Dates</p>
              <p>Sale</p>
            </div>
            <div className="fot-text">
              <h3>
                FOLLOW <br /> US
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                className="twit"
              >
                <TwitterIcon />
                <TwitterIcon />
                <TwitterIcon />
                <TwitterIcon />
                <TwitterIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="fod">
        <div className="container">
          <div className="fod">
            <div className="fod-text">
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Your Privacy Choices <AddLinkIcon />
              </h4>
              <div className="lic"></div>
              <h4>Privacy Policy</h4>
              <div className="lic"></div>
              <h4>Terms and Conditions</h4>
            </div>
            <div className="fods">
              <h5>
                <RadioButtonCheckedIcon />
                2024 adidas Kyrgyzstan, Inc
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
