import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/Foodieland..png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const navigation = [
    { id: "/home", name: "Home" },
    { id: "/recipes", name: "Recipes" },
    { id: "/blog", name: "Blog" },
    { id: "/contact", name: "Contact" },
    { id: "/about", name: "About us" },
  ];
  return (
    <div className="flex  text-base font-medium  border border-gray-200  pt-7 pb-5">
      <div className="h-8 w-28 mr-64 ml-20">
        <img className="" src={logo} alt="foodieland" />
      </div>
      <div className="flex-none space-x-14 ">
        {navigation.map((nav) => (
          <Link className="text-black" key={nav.id} to={nav.id}>
            {nav.name}{" "}
          </Link>
        ))}
      </div>
      <div className="flex space-x-10 ml-60">
        <a href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
        <a href="https://www.facebook.com/">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
