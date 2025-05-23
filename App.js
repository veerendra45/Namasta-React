import React from "react";
import ReactDOM from "react-dom/client";

/** 
 * 
 * Header 
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Reastarant Container
 *    - card
 * Footer
 *  - Copy Right
 *  - Links
 *  - Address
 *  - Contacts us
 **/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/008/212/813/original/cooking-logo-design-vector.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restaurantList = [
  {
    id: 1,
    name: "Meghana Foods",
    cuisines: ["Biryani", "North Indian", "Asian"],
    rating: "4.4",
    deliveryTime: "38 mins",
    image: "https://img.freepik.com/premium-photo/chicken-biryani-biriyani-served-plate-isolated-table-top-view-indian-spicy-food_689047-3926.jpg?w=2000"
  },
  {
    id: 2,
    name: "Paradise Biryani",
    cuisines: ["Hyderabadi", "Biryani"],
    rating: "4.2",
    deliveryTime: "32 mins",
    image: "https://images.unsplash.com/photo-1604908177340-3f3c3d4e9b6e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Taco Bell",
    cuisines: ["Mexican", "Fast Food"],
    rating: "4.1",
    deliveryTime: "25 mins",
    image: "https://images.unsplash.com/photo-1601924582975-4a3c90f8b77e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Burger King",
    cuisines: ["Burgers", "American"],
    rating: "4.0",
    deliveryTime: "30 mins",
    image: "https://images.unsplash.com/photo-1601925261607-3d52bd736aa5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Pizza Hut",
    cuisines: ["Pizza", "Italian"],
    rating: "4.3",
    deliveryTime: "28 mins",
    image: "https://images.unsplash.com/photo-1601925248290-3a1d67877c0e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Subway",
    cuisines: ["Sandwiches", "Healthy Food"],
    rating: "4.2",
    deliveryTime: "22 mins",
    image: "https://images.unsplash.com/photo-1613145993484-013ed973f8da?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "KFC",
    cuisines: ["Fried Chicken", "Fast Food"],
    rating: "4.1",
    deliveryTime: "26 mins",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Domino's Pizza",
    cuisines: ["Pizza", "Italian"],
    rating: "4.0",
    deliveryTime: "29 mins",
    image: "https://images.unsplash.com/photo-1627494633274-0c4b38616965?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Haldiram's",
    cuisines: ["Snacks", "Sweets", "Indian"],
    rating: "4.5",
    deliveryTime: "35 mins",
    image: "https://images.unsplash.com/photo-1596797038530-2a59e0b1c89e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Wow! Momo",
    cuisines: ["Momos", "Chinese"],
    rating: "4.3",
    deliveryTime: "27 mins",
    image: "https://images.unsplash.com/photo-1630694979895-e0eac5eaf7e4?auto=format&fit=crop&w=800&q=80"
  }
];



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

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);