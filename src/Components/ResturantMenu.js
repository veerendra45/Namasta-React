import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
    const[menuInfo, setMenuInfo] = useState(null);
    useEffect(()=> {
        fetchMenu();
        console.log("hiiiiiiiiii");
    },[]);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6287557&lng=79.4191795&restaurantId=356932&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setMenuInfo(json.data);
    }
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