import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
    return (
    <Header className= "main-header">
        <div className="header-content">
            <ui>
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ui>
        </div>
    </Header>
    );
};

export default Header;
