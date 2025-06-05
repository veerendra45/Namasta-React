import ReastarantCard from "./ReastarantCard";
import restaurantList from "../Utiles/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MENU_URL } from "../Utiles/constant";
import useOnlineStatus from "../Utiles/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    //data fetching
    const fetchData = async () => {
        const data = await fetch(MENU_URL);
        const json = await data.json();
        console.log(json);
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
        console.log(restaurants);
        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
    }
    //useEffect
    useEffect(() => {
        fetchData();
    },[]);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Network Issue</h1>

    return ((listOfRestaurant.length === 0) ? <Shimmer /> :  (
        <div className="body-container">
            <div className="filter">
                <div className="search-container">
                    <input type="text" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)}/>
                    <button
                    onClick={()=>{
                        const filteredList = listOfRestaurant.filter(
                            res => res?.name?.toLowerCase().includes(searchTxt.toLowerCase()));
                            setFilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                <div>
                    <button className="filter-btn" onClick={() => {
                        const filterList = restaurantList.filter(res => res.avgRating >= 4)
                        setListOfRestaurant(filterList);
                        // console.log(listOfRestaurant);}
                    }}>
                        Top rated Restaurant
                    </button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(resta =>
                    <Link key={resta.info.id} to={"/restaurants/"+resta.info.id}>
                        <ReastarantCard data={resta}/>
                    </Link>
                )}
            </div>
        </div>
    ))
}

export default Body;