import React, { useState } from "react";
import ReastarantCard from "./ReastarantCard";
import restaurantList from "../Utiles/mockData";
import {useState} from "react";


const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
    return (
        <div className="body-container">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurant.filter(res => res.rating >= 4.2)
                    setListOfRestaurant(filterList);
                    console.log(listOfRestaurant);}
                }>
                    Top rated Restaurant
                </button>
                
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map(resta => <ReastarantCard key={resta.id} data={resta}/>)
                }
            </div>
        </div>
    )
}

export default Body;