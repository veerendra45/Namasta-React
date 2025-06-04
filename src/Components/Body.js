import ReastarantCard from "./ReastarantCard";
import restaurantList from "../Utiles/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    //data fetching
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=13.6287557&lng=79.4191795&carousel=true&third_party_vendor=1"
        );
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
    }, []);

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
                    filteredRestaurant.map(resta => <ReastarantCard key={resta.info.id} data={resta}/>)
                }
            </div>
        </div>
    ))
}

export default Body;