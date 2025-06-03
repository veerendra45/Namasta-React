import React, { useEffect, useState } from "react";
import ReastarantCard from "./ReastarantCard";
import restaurantList from "../Utiles/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    console.log(searchTxt);
    //useEffect
    useEffect(() => {
        fetchData();
    }, []);
    //data fetching
    const fetchData = async () => {
        const data = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(restaurantList);
        setFilteredRestaurant(restaurantList);
    }
    return ((listOfRestaurant.length === 0) ? <Shimmer /> :  (
        <div className="body-container">
            <div className="filter">
                <div className="search-container">
                    <input type="text" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)}/>
                    <button
                    onClick={()=>{
                        const filteredList = listOfRestaurant.filter(
                            res => res.name.toLowerCase().includes(searchTxt));
                            setFilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                <div>
                    <button className="filter-btn" onClick={() => {
                        const filterList = restaurantList.filter(res => res.rating >= 4)
                        setListOfRestaurant(filterList);
                        console.log(listOfRestaurant);}
                    }>
                        Top rated Restaurant
                    </button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(resta => <ReastarantCard key={resta.id} data={resta}/>)
                }
            </div>
        </div>
    ))
}

export default Body;