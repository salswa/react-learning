import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import CardShimmer from "./CardShimmer";

//let listOfRestaurants = resList;

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   useEffect( () => {
      fetchData();
   }, []
   );
   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8824502&lng=81.0000853&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const listOfRecentRestaurants = json?.data?.cards[2]?.data?.data?.cards;
      listOfRecentRestaurants? setListOfRestaurants(listOfRecentRestaurants): setListOfRestaurants(resList);
      //setListOfRestaurants([])
   };
   if(listOfRestaurants.length === 0) {
      return (
         <CardShimmer />
      );
   }
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