import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Res Container
 *       - Res Card
 * Footer
 */
const Header = () => {
   return (
      <div className="header">
         <div className="logo-container">
            <img className="logo" src="https://png2.cleanpng.com/sh/f6a4761c2d3cb9b16edfac81b1167a28/L0KzQYm3V8AzN6FoipH0aYP2gLBuTf9vdJpzfZ9vb3BnPbF5hPVzcZ9sRdh4b3SwdLbzigZmeqoyfARAYnj4cn68gsNiOZM8TdUDOHHmRXA3U8IxPmMASaMAM0C4Q4WAV8M5OmI5RuJ3Zx==/kisspng-online-food-ordering-food-delivery-grubhub-5b3a1b75c88ac5.0320629115305347738214.png" 
         alt="food-logo" />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
};

const RestaurantCard = () => {
   return (
      <div className="res-card">
         <img className="res-image"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgp_gFPl0tto_wqnVHyw242QkKt6Fs6iDZTKJbPoFBAw&usqp=CAU&ec=48600113" 
         alt="res-image" />
         <h2> Meghana Foods</h2>
         <h3>North, Fast, Burger</h3>
         <h4>4.4.stars</h4>
         <h4>38 min delivery time</h4>


      </div>
   );
};

const Body = () => {
   return (
      <div className="body-container">
         <div className="Search">
            <input type="text" placeholder="Enter Restaurant Name"></input>
            <button>Search</button>
         </div>
         <div className="res-container">
            <RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard />
            <RestaurantCard /><RestaurantCard /><RestaurantCard />
            <RestaurantCard /><RestaurantCard />
            <RestaurantCard />
         </div>
      </div>
   );
};

const AppLayout = () => {
 return (
   <div className="app">
      <Header />
      <Body />
   </div>
 );
};

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<AppLayout/>);