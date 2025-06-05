import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../Utiles/useResturantMenu";

const ResturantMenu = () => {
    const{resId} = useParams();
    const menuInfo = useResturantMenu(resId);
    
    if(menuInfo == null) return <Shimmer/>;
    const{name, cuisines, costForTwoMessage} = menuInfo?.cards[2]?.card?.card?.info;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
        </div>
    )
}

export default ResturantMenu;