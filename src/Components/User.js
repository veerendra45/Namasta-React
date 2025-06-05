import { useState } from "react";

const User = (props) => {
    const[count] = useState(0);
    const[count2] = useState(1);
    const{name, location} = props;
    return(
        <div className="user-card">
            <h1>count : {count}</h1>
            <h1>count2 : {count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Contact : veeras@462005</h3>
        </div>
    )
}

export default User;