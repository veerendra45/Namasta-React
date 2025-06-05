import { LOGO_IMG } from "../Utiles/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utiles/useOnlineStatus";

export const Header = () => {
    const [btnName, setBtnName] = useState("LogIn");
    console.log("Header Render");
    useEffect(() => {
        console.log("useEFfect Called")},
        [btnName]
    );
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_IMG}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "💚" : "❤️"} 
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>    
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
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