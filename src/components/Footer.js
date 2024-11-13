import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Logo from "../logo.svg";
const Footer = (props) => {
  let a1 = {
    width: "80%",
  };

  return (
    <div>
      <div className={`blockcode mt-5 bg-${props.mode === "dark" ? "black" : "white"}   text-${
              props.mode === "dark" ? "light" : "dark"
            }`}>
        <div className="blockcode">
          <footer className="shadow">
            <div
              className="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap container"
              style={a1}
            >
              <Link
                href="/#"
                className="d-flex align-items-center p-0 text-dark"
              >
                <img alt="logo" src={Logo} width="30px" />
                <span className={`ms-4 h5 font-weight-bold text-${
              props.mode === "dark" ? "light" : "dark"
            }`}>Stechtic</span>
              </Link>
              <small>&copy; Stechtic&copy;, 2024. All rights reserved.</small>
              <div className="my-2">
                <button className="btn btn-dark btn-flat p-2 mx-1 px-2">
                  <i className="fa fa-facebook mx-auto"></i>
                </button>
                <button className="btn btn-dark btn-flat p-2 mx-1 px-2">
                  <i className="fa fa-twitter mx-auto"></i>
                </button>
                <button className="btn btn-dark btn-flat p-2 mx-1 px-2">
                  <i className="fa fa-instagram mx-auto"></i>
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
