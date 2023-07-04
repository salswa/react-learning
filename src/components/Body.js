import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import CardShimmer from "./CardShimmer";
import EmptySearchResult from "./EmptySearchResult";

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filterFlag, setFilterFLag] = useState(true);
   const [filterButtonText, setFilterButtonText] = useState("Top Rated Restaurants");
   const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState([]);
   const [searchText, setSearchText] = useState("");
   useEffect( () => {
         fetchData();
      }, []
   );

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8824502&lng=81.0000853&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const listOfRecentRestaurants = json?.data?.cards[2]?.data?.data?.cards;
      setOriginalListOfRestaurants(listOfRecentRestaurants);
      listOfRecentRestaurants? setListOfRestaurants(listOfRecentRestaurants): setListOfRestaurants(resList);
      //setListOfRestaurants([])
   };
   
   const filterButton = () => {
      if(filterFlag) {
         const filteredList = listOfRestaurants.filter(
            (res) => res.data.avgRating >=4 
         );
         setListOfRestaurants(filteredList);
         setFilterFLag(false);
         setFilterButtonText("Reset Restaurant List");
      } 
      else {
         setListOfRestaurants(originalListOfRestaurants);
         setFilterFLag(true);
         setFilterButtonText("Top Rated Restaurants");
      }
   };

   const searchFilter = (searchText) => {                           
      const searchFilteredList = originalListOfRestaurants.filter(
         (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setListOfRestaurants(searchFilteredList);
   };

   return (listOfRestaurants.length === 0)? (
         searchText? <EmptySearchResult searchTerm = {searchText}/>:
         <CardShimmer />
      ) : (
      <div className="body-container">
         <div className="Search">
            <input type="text" placeholder="Enter Restaurant Name"
               value= {searchText}
               onChange={(e) => {
                     setSearchText(e.target.value);
                     if(e.target.value === '') {
                        console.log("searchText empty-----");
                        /* To reset list of restaurants when searchText is deleted*/
                        setListOfRestaurants(originalListOfRestaurants);
                     }                    
                  }
               }
            >           
            </input>
            <button onClick={(e) => {
                  console.log(searchText);
                  searchFilter(searchText);
               }
            }
            >
               Search
            </button>
            <button className= "filter-btn"
               onClick={ () => { 
                     filterButton();
                  }
               }
            >
               {filterButtonText}
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