import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

//let listOfRestaurants = resList;

const Body = () => {
    [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
       <div className="body-container">
          <div className="Search">
             <input type="text" placeholder="Enter Restaurant Name"></input>
             <button>Search</button>
             <button className= "top-filter-btn"
                onClick={ () => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating >=4 
                    );
                    setListOfRestaurants(filteredList);
                    console.log("filteredList",filteredList);
                    console.log("filteredList123",listOfRestaurants);
                    }
                }
             >
                Top Rated Restaurants
            </button>
            <button className="reset-filter-btn"
                onClick={
                    () => {
                        setListOfRestaurants(resList);
                    }
                }
            >
                Reset Restaurant List
            </button>
          </div>

          <div className="res-container">
             { 
                listOfRestaurants.map((restaurant)=> { 
                   return <RestaurantCard key = { restaurant.data.id} 
                   resData= {restaurant} />
                })
             }              
          </div>
       </div>
    );
 };

 export default Body;