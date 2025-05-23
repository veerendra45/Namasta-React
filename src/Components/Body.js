import React from "react";
import ReastarantCard from "./ReastarantCard";
import restaurantList from "../Utiles/mockData";


const Body = () => {
    return (
        <div className="body-container">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restaurantList.map(resta => <ReastarantCard key={resta.id} data={resta}/>)
                }
            </div>
        </div>
    )
}

export default Body;