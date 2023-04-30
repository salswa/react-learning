import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

let listOfRestaurants = resList;

const Body = () => {
    return (
       <div className="body-container">
          <div className="Search">
             <input type="text" placeholder="Enter Restaurant Name"></input>
             <button>Search</button>
             <button className= "top-filter-button"
                onClick={ () => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating>=4 
                    );
                    console.log("filteredList",filteredList);
                    }
                }
             >
                Top Rated Restaurants
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