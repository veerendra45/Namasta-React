import React from "react";

const ReastarantCard = (props) => {
    const {id, name, cuisines, rating, deliveryTime, image} = props.data;
    return(
        <div className="res-card">
            <img className="res-img" src={image} alt={name}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default ReastarantCard;