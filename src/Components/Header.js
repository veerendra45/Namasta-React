import { LOGO_IMG } from "../Utiles/constant";
import { useState } from "react";

export const Header = () => {
    const [btnName, setBtnName] = useState("LogIn");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_IMG}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;