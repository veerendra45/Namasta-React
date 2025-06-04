import React from "react";
import { CLD_IMG } from "../Utiles/constant";

const ReastarantCard = ({data}) => {
    if (!data.info) {
        return null;
    }
    const {id, name, cuisines, avgRating, sla, cloudinaryImageId} = data?.info;
    return(
        <div className="res-card">
            <img className="res-img" src={CLD_IMG+cloudinaryImageId} alt={name}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default ReastarantCard;