import { useEffect, useState } from "react";

const useResturantMenu = (resId) => {
    const [menuInfo, setMenuInfo] = useState();
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6287557&lng=79.4191795&restaurantId="+resId);
        const json = await data.json();
        console.log(json);
        setMenuInfo(json.data);
    }
    return menuInfo;
}

export default useResturantMenu;