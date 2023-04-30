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

const resList = [
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "127944",
           "name": "Neelkanth Sweets",
           "uuid": "73ea6144-a000-48ea-896b-3f94bcd16f77",
           "city": "15",
           "area": "Gomti Nagar",
           "totalRatingsString": "10000+ ratings",
           "cloudinaryImageId": "okgeqdb5bycqaoeuyi51",
           "cuisines": [
               "Sweets",
               "Snacks",
               "North Indian",
               "Chinese",
               "South Indian",
               "Chaat"
           ],
           "tags": [],
           "costForTwo": 25000,
           "costForTwoString": "₹250 FOR TWO",
           "deliveryTime": 23,
           "minDeliveryTime": 23,
           "maxDeliveryTime": 23,
           "slaString": "23 MINS",
           "lastMileTravel": 2.4000000953674316,
           "slugs": {
               "restaurant": "neelkanth-sweets-vibhuti-khand-gomti-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "Kamta, Lucknow",
           "locality": "Shankar Puri",
           "parentId": 7166,
           "unserviceable": false,
           "veg": true,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "50% off",
               "shortDescriptionList": [
                   {
                       "meta": "50% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "50% off up to ₹100 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "50% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "50% off up to ₹100 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "ribbon": [
               {
                   "type": "PROMOTED"
               }
           ],
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "cid=6509339~p=1~eid=00000187-d10e-6312-14fb-665000a60139",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "2.4 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "127944",
               "deliveryTime": 23,
               "minDeliveryTime": 23,
               "maxDeliveryTime": 23,
               "lastMileTravel": 2.4000000953674316,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": true,
           "avgRating": "4.2",
           "totalRatings": 10000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "332948",
           "name": "La Pino'z Pizza",
           "uuid": "08507d0b-68c2-4e1b-9672-9f1761cb3760",
           "city": "15",
           "area": "Indira Nagar",
           "totalRatingsString": "10000+ ratings",
           "cloudinaryImageId": "lka73kkje7hzr1ev3esu",
           "cuisines": [
               "Pizzas",
               "Italian"
           ],
           "tags": [],
           "costForTwo": 30000,
           "costForTwoString": "₹300 FOR TWO",
           "deliveryTime": 25,
           "minDeliveryTime": 25,
           "maxDeliveryTime": 25,
           "slaString": "25 MINS",
           "lastMileTravel": 0.8999999761581421,
           "slugs": {
               "restaurant": "la-pino'z-pizza-indira-nagar-indira-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "Near Munshipulia Metro Staion, Picnic spot road , Sector 16 , Indra nagar , Lucknow , UP - 226016",
           "locality": "Munshi Puliya Road",
           "parentId": 4961,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "50% off",
               "shortDescriptionList": [
                   {
                       "meta": "50% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "50% off up to ₹100 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "50% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "50% off up to ₹100 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "0.8 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "332948",
               "deliveryTime": 25,
               "minDeliveryTime": 25,
               "maxDeliveryTime": 25,
               "lastMileTravel": 0.8999999761581421,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": false,
           "avgRating": "3.8",
           "totalRatings": 10000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "343076",
           "name": "The American Pizza (Indira Nagar)",
           "uuid": "cfaa2a9d-7c7f-4719-a280-d1cd6d43c272",
           "city": "15",
           "area": "Indira Nagar",
           "totalRatingsString": "5000+ ratings",
           "cloudinaryImageId": "e323ce176148585eea54fb572f5b59a2",
           "cuisines": [
               "Pizzas",
               "Pastas",
               "Snacks",
               "Italian"
           ],
           "tags": [],
           "costForTwo": 20000,
           "costForTwoString": "₹200 FOR TWO",
           "deliveryTime": 31,
           "minDeliveryTime": 31,
           "maxDeliveryTime": 31,
           "slaString": "31 MINS",
           "lastMileTravel": 1.399999976158142,
           "slugs": {
               "restaurant": "the-american-pizza-indira-nagar-indira-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "1205/15 D BLOCK INDRA NAGAR LUCKNOW-226016",
           "locality": "D Block",
           "parentId": 204657,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "60% off",
               "shortDescriptionList": [
                   {
                       "meta": "60% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "60% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "1.3 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "343076",
               "deliveryTime": 31,
               "minDeliveryTime": 31,
               "maxDeliveryTime": 31,
               "lastMileTravel": 1.399999976158142,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": false,
           "avgRating": "3.6",
           "totalRatings": 5000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "59253",
           "name": "The Manish Eating Point",
           "uuid": "5eda9e7c-a4fa-45ed-8cb3-47a5f14a4c8a",
           "city": "15",
           "area": "Gomti Nagar",
           "totalRatingsString": "10000+ ratings",
           "cloudinaryImageId": "h5hlchpdzdjqf6yvtshq",
           "cuisines": [
               "Biryani",
               "North Indian",
               "Chinese",
               "Mughlai",
               "Fast Food",
               "Continental",
               "Tandoor",
               "Kebabs",
               "Desserts"
           ],
           "tags": [],
           "costForTwo": 20000,
           "costForTwoString": "₹200 FOR TWO",
           "deliveryTime": 37,
           "minDeliveryTime": 37,
           "maxDeliveryTime": 37,
           "slaString": "37 MINS",
           "lastMileTravel": 5,
           "slugs": {
               "restaurant": "the-manish-eating-point-viram-khand-gomti-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "1/120, Viram Khand, Gomti Nagar, Lucknow",
           "locality": "Viram Khand",
           "parentId": 211220,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "60% off",
               "shortDescriptionList": [
                   {
                       "meta": "60% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "60% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "ribbon": [
               {
                   "type": "PROMOTED"
               }
           ],
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 3600,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 3600,
               "message": "",
               "title": "Delivery Charge",
               "amount": "3600",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "cid=6509344~p=4~eid=00000187-d10e-6312-14fb-665100a6041b",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "5 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "59253",
               "deliveryTime": 37,
               "minDeliveryTime": 37,
               "maxDeliveryTime": 37,
               "lastMileTravel": 5,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": true,
           "avgRating": "3.8",
           "totalRatings": 10000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "165303",
           "name": "Veg Planet By Herbata",
           "uuid": "5b6c7ffa-c150-4fee-a717-3135b31b0ffa",
           "city": "15",
           "area": "Indira Nagar",
           "totalRatingsString": "1000+ ratings",
           "cloudinaryImageId": "q1jynremrzswkjfgs2bp",
           "cuisines": [
               "Chinese",
               "South Indian",
               "North Indian"
           ],
           "tags": [],
           "costForTwo": 10000,
           "costForTwoString": "₹100 FOR TWO",
           "deliveryTime": 27,
           "minDeliveryTime": 27,
           "maxDeliveryTime": 27,
           "slaString": "27 MINS",
           "lastMileTravel": 0.4000000059604645,
           "slugs": {
               "restaurant": "veg-planet-by-herbata-indira-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "Shop No.1, Sector-10/109,near Aurobindo park, Munshi Pulia , Indira Nagar , Lucknow",
           "locality": "Aurobindo park Road",
           "parentId": 222185,
           "unserviceable": false,
           "veg": true,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "20% off",
               "shortDescriptionList": [
                   {
                       "meta": "20% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "20% off up to ₹50 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "20% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "20% off up to ₹50 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "0.4 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "165303",
               "deliveryTime": 27,
               "minDeliveryTime": 27,
               "maxDeliveryTime": 27,
               "lastMileTravel": 0.4000000059604645,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": false,
           "avgRating": "3.4",
           "totalRatings": 1000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "58835",
           "name": "Indrani Sweets And Restaurant",
           "uuid": "d6f58825-7dc9-432d-b1fe-75f4dfd285a9",
           "city": "15",
           "area": "Indira Nagar",
           "totalRatingsString": "10000+ ratings",
           "cloudinaryImageId": "hatpnrdq1vjcoibv0o0n",
           "cuisines": [
               "Indian",
               "Chinese",
               "Sweets"
           ],
           "tags": [],
           "costForTwo": 20000,
           "costForTwoString": "₹200 FOR TWO",
           "deliveryTime": 33,
           "minDeliveryTime": 33,
           "maxDeliveryTime": 33,
           "slaString": "33 MINS",
           "lastMileTravel": 1.2000000476837158,
           "slugs": {
               "restaurant": "indrani-sweets-and-restaurant-indira-nagar-indira-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "14/462, Sector 14, Indira Nagar, Lucknow",
           "locality": "Sector 14",
           "parentId": 107044,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "50% off",
               "shortDescriptionList": [
                   {
                       "meta": "50% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "50% off up to ₹100 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "50% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "50% off up to ₹100 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "1.2 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "58835",
               "deliveryTime": 33,
               "minDeliveryTime": 33,
               "maxDeliveryTime": 33,
               "lastMileTravel": 1.2000000476837158,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": false,
           "avgRating": "4.0",
           "totalRatings": 10000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "253733",
           "name": "McDonald's",
           "uuid": "62c67728-9938-41af-8961-5149590cf9a5",
           "city": "15",
           "area": "Gomti Nagar",
           "totalRatingsString": "10000+ ratings",
           "cloudinaryImageId": "1293a58ab5610f4c730c3d8cb6ac1b65",
           "cuisines": [
               "American"
           ],
           "tags": [],
           "costForTwo": 40000,
           "costForTwoString": "₹400 FOR TWO",
           "deliveryTime": 30,
           "minDeliveryTime": 30,
           "maxDeliveryTime": 30,
           "slaString": "30 MINS",
           "lastMileTravel": 2.299999952316284,
           "slugs": {
               "restaurant": "mcdonalds-up-lucknow-waves-gomti-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "UP Lucknow Waves, East End Mall. GF-1-5, Vibhuti Khand, Gomti Nagar. Lucknow (UP)- 226010",
           "locality": "West End Mall",
           "parentId": 630,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "2.2 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "253733",
               "deliveryTime": 30,
               "minDeliveryTime": 30,
               "maxDeliveryTime": 30,
               "lastMileTravel": 2.299999952316284,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": false,
           "avgRating": "4.1",
           "totalRatings": 10000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "339112",
           "name": "Mr. Brown- DANBRO",
           "uuid": "7e84b337-7444-4058-bf45-51bd4d6ac352",
           "city": "15",
           "area": "Indira Nagar",
           "totalRatingsString": "5000+ ratings",
           "cloudinaryImageId": "82db3bd0a7f595c61c7cda9968320d89",
           "cuisines": [
               "Bakery",
               "Italian",
               "Pizzas",
               "Snacks"
           ],
           "tags": [],
           "costForTwo": 30000,
           "costForTwoString": "₹300 FOR TWO",
           "deliveryTime": 18,
           "minDeliveryTime": 18,
           "maxDeliveryTime": 18,
           "slaString": "18 MINS",
           "lastMileTravel": 0.699999988079071,
           "slugs": {
               "restaurant": "mr.-brown--danbro-indira-nagar-indira-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "15/10 Sector 15 Near Munshipulia chowraha, On Ring Road Indira Nagar Lucknow",
           "locality": "Sector 15",
           "parentId": 140134,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "Flat ₹125 off",
               "shortDescriptionList": [
                   {
                       "meta": "Flat ₹125 off on orders above ₹249",
                       "discountType": "Flat",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                       "discountType": "Flat",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "₹125 OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use MATCHDEAL125",
                       "discountType": "Flat",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                       "discountType": "Flat",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "0.6 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "339112",
               "deliveryTime": 18,
               "minDeliveryTime": 18,
               "maxDeliveryTime": 18,
               "lastMileTravel": 0.699999988079071,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": false,
           "avgRating": "4.3",
           "totalRatings": 5000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "59795",
           "name": "New Manish Eating Point",
           "uuid": "c0437253-569a-478a-94f3-45d979e9c203",
           "city": "15",
           "area": "Gomti Nagar",
           "totalRatingsString": "10000+ ratings",
           "cloudinaryImageId": "d7dzylheilt7ro2u7uad",
           "cuisines": [
               "Mughlai",
               "North Indian",
               "Chinese"
           ],
           "tags": [],
           "costForTwo": 20000,
           "costForTwoString": "₹200 FOR TWO",
           "deliveryTime": 35,
           "minDeliveryTime": 35,
           "maxDeliveryTime": 35,
           "slaString": "35 MINS",
           "lastMileTravel": 5.5,
           "slugs": {
               "restaurant": "new-manish-eating-point-vinay-khand-gomti-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "3/40, Patrakarpuram Chauraha, Vinay Khand, Gomti Nagar, Lucknow 226010",
           "locality": "Patrakar Puram",
           "parentId": 147237,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "60% off",
               "shortDescriptionList": [
                   {
                       "meta": "60% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "60% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "ribbon": [
               {
                   "type": "PROMOTED"
               }
           ],
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 3600,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 3600,
               "message": "",
               "title": "Delivery Charge",
               "amount": "3600",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "cid=6509340~p=10~eid=00000187-d10e-6312-14fb-665300a60a4a",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "5.5 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "59795",
               "deliveryTime": 35,
               "minDeliveryTime": 35,
               "maxDeliveryTime": 35,
               "lastMileTravel": 5.5,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": true,
           "avgRating": "3.9",
           "totalRatings": 10000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "667612",
           "name": "Pocket Thali",
           "uuid": "f94ded26-c784-4087-ab7b-fbbd5b9117c0",
           "city": "15",
           "area": "Indira Nagar",
           "totalRatingsString": "Too Few Ratings",
           "cloudinaryImageId": "d2b3bd562cdd433230fbd5cc305e3d65",
           "cuisines": [
               "Indian",
               "Thalis"
           ],
           "tags": [],
           "costForTwo": 22000,
           "costForTwoString": "₹220 FOR TWO",
           "deliveryTime": 24,
           "minDeliveryTime": 24,
           "maxDeliveryTime": 24,
           "slaString": "24 MINS",
           "lastMileTravel": 0.5,
           "slugs": {
               "restaurant": "pocket-thali-indira-nagar-indira-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "D-2226, First Floor, behind Jwala Hospital, near Munshi Pulia, Sector 12, Indira Nagar, Lucknow, Uttar Pradesh 226016, India",
           "locality": "Sector 12",
           "parentId": 400368,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "20% off",
               "shortDescriptionList": [
                   {
                       "meta": "20% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "20% off up to ₹50 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "20% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "20% off up to ₹50 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "0.5 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "667612",
               "deliveryTime": 24,
               "minDeliveryTime": 24,
               "maxDeliveryTime": 24,
               "lastMileTravel": 0.5,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": false,
           "avgRating": "--",
           "totalRatings": 0,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "637654",
           "name": "Momos N Mojitos",
           "uuid": "641a3a41-319f-4a84-8e62-e3dbd3b8cf43",
           "city": "15",
           "area": "Indira Nagar",
           "totalRatingsString": "Too Few Ratings",
           "cloudinaryImageId": "dc8663b2cb0e9f99d03f0feb7e754a5a",
           "cuisines": [
               "Chinese"
           ],
           "tags": [],
           "costForTwo": 20000,
           "costForTwoString": "₹200 FOR TWO",
           "deliveryTime": 34,
           "minDeliveryTime": 34,
           "maxDeliveryTime": 34,
           "slaString": "34 MINS",
           "lastMileTravel": 0.30000001192092896,
           "slugs": {
               "restaurant": "momos-n-mojitos-indira-nagar-indira-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "10/699/1, munshi pulia indira nagar, indira nagar priyadarshni ward, lucknow, uttar pradesh",
           "locality": "Munsh Pulia",
           "parentId": 385193,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "50% off",
               "shortDescriptionList": [
                   {
                       "meta": "50% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "50% off up to ₹100 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "50% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "50% off up to ₹100 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "0.3 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "637654",
               "deliveryTime": 34,
               "minDeliveryTime": 34,
               "maxDeliveryTime": 34,
               "lastMileTravel": 0.30000001192092896,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": false,
           "avgRating": "--",
           "totalRatings": 0,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "58311",
           "name": "The Kalika Hut",
           "uuid": "6bbdc8cb-df36-4110-914d-99f8fe1f334f",
           "city": "15",
           "area": "Gomti Nagar",
           "totalRatingsString": "10000+ ratings",
           "cloudinaryImageId": "geykcwjpvrgat6yvginp",
           "cuisines": [
               "Indian",
               "North Indian",
               "Mughlai",
               "Chinese"
           ],
           "tags": [],
           "costForTwo": 35000,
           "costForTwoString": "₹350 FOR TWO",
           "deliveryTime": 34,
           "minDeliveryTime": 34,
           "maxDeliveryTime": 34,
           "slaString": "34 MINS",
           "lastMileTravel": 4.599999904632568,
           "slugs": {
               "restaurant": "kalika-hut-gomti-nagar-gomti-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "1/13 Vijay Khand, Near Over Bridge M.V.V. Motors, Lohia Path Road, Gomti Nagar, Lucknow",
           "locality": "Vijay Khand",
           "parentId": 4848,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "60% off",
               "shortDescriptionList": [
                   {
                       "meta": "60% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "60% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "ribbon": [
               {
                   "type": "PROMOTED"
               }
           ],
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2900,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2900,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2900",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "cid=6614624~p=13~eid=00000187-d10e-6312-14fb-665400a60d5b",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "4.5 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "58311",
               "deliveryTime": 34,
               "minDeliveryTime": 34,
               "maxDeliveryTime": 34,
               "lastMileTravel": 4.599999904632568,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": true,
           "avgRating": "4.0",
           "totalRatings": 10000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "615546",
           "name": "CHAHAT BIRYANI (INDIRA NAGAR)",
           "uuid": "a9eb26fc-5cd8-45d7-8ea1-2abee70e7d1c",
           "city": "15",
           "area": "Indira Nagar",
           "totalRatingsString": "1000+ ratings",
           "cloudinaryImageId": "mij9xtfh2jnvewf5ab2e",
           "cuisines": [
               "Mughlai",
               "Indian",
               "Chinese"
           ],
           "tags": [],
           "costForTwo": 20000,
           "costForTwoString": "₹200 FOR TWO",
           "deliveryTime": 26,
           "minDeliveryTime": 26,
           "maxDeliveryTime": 26,
           "slaString": "26 MINS",
           "lastMileTravel": 2,
           "slugs": {
               "restaurant": "chahat-biryani-indira-nagar-indira-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "\"\"\"C-639, Aravali Marg, Indira Nagar Lucknow , Nagar Nigam Food Safety Zone-13, Lucknow, , Uttar Pradesh, 226016",
           "locality": "Aravali Marg",
           "parentId": 56864,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "2 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "615546",
               "deliveryTime": 26,
               "minDeliveryTime": 26,
               "maxDeliveryTime": 26,
               "lastMileTravel": 2,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": false,
           "avgRating": "3.9",
           "totalRatings": 1000,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "493036",
           "name": "Punjabi Dhaba",
           "uuid": "7bb43fa0-b11b-48bd-aba4-39201798af69",
           "city": "15",
           "area": "Indira Nagar",
           "totalRatingsString": "500+ ratings",
           "cloudinaryImageId": "sqlvsqodluqk9a7mx9gt",
           "cuisines": [
               "North Indian",
               "Biryani",
               "Snacks",
               "Fast Food"
           ],
           "tags": [],
           "costForTwo": 30000,
           "costForTwoString": "₹300 FOR TWO",
           "deliveryTime": 23,
           "minDeliveryTime": 23,
           "maxDeliveryTime": 23,
           "slaString": "23 MINS",
           "lastMileTravel": 0.8999999761581421,
           "slugs": {
               "restaurant": "punjabi-dhaba-indira-nagar-indira-nagar",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "26,INSAF NAGAR, SECTOR-10, INDIRA NAGAR",
           "locality": "Sector 10",
           "parentId": 1476,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "60% off",
               "shortDescriptionList": [
                   {
                       "meta": "60% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "60% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 2200,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 2200,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2200",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "0.8 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "493036",
               "deliveryTime": 23,
               "minDeliveryTime": 23,
               "maxDeliveryTime": 23,
               "lastMileTravel": 0.8999999761581421,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": false,
           "avgRating": "2.9",
           "totalRatings": 500,
           "new": false
       },
       "subtype": "basic"
   },
   {
       "type": "restaurant",
       "data": {
           "type": "F",
           "id": "61288",
           "name": "New Lucknow Kitchen",
           "uuid": "66daf723-9b93-4510-8e8f-c72ca485ee2b",
           "city": "15",
           "area": "Aliganj",
           "totalRatingsString": "10000+ ratings",
           "cloudinaryImageId": "7b662c18314d310e1ef540a6ea538128",
           "cuisines": [
               "North Indian",
               "Chinese",
               "Continental",
               "Italian",
               "Pizzas"
           ],
           "tags": [],
           "costForTwo": 25000,
           "costForTwoString": "₹250 FOR TWO",
           "deliveryTime": 41,
           "minDeliveryTime": 41,
           "maxDeliveryTime": 41,
           "slaString": "41 MINS",
           "lastMileTravel": 6.699999809265137,
           "slugs": {
               "restaurant": "new-lucknow-kitchen-aliganj-aliganj",
               "city": "lucknow"
           },
           "cityState": "15",
           "address": "B2/132, Sector F Sitapur road Jankipuram, Near Icon Hospital, Lucknow",
           "locality": "Sector F",
           "parentId": 147131,
           "unserviceable": false,
           "veg": false,
           "select": false,
           "favorite": false,
           "tradeCampaignHeaders": [],
           "aggregatedDiscountInfo": {
               "header": "60% off",
               "shortDescriptionList": [
                   {
                       "meta": "60% off | Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "aggregatedDiscountInfoV2": {
               "header": "60% OFF",
               "shortDescriptionList": [
                   {
                       "meta": "Use TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "descriptionList": [
                   {
                       "meta": "60% off up to ₹120 | Use code TRYNEW",
                       "discountType": "Percentage",
                       "operationType": "RESTAURANT"
                   }
               ],
               "subHeader": "",
               "headerType": 0,
               "superFreedel": ""
           },
           "ribbon": [
               {
                   "type": "PROMOTED"
               }
           ],
           "chain": [],
           "feeDetails": {
               "fees": [
                   {
                       "name": "distance",
                       "fee": 4300,
                       "message": ""
                   },
                   {
                       "name": "time",
                       "fee": 0,
                       "message": ""
                   },
                   {
                       "name": "special",
                       "fee": 0,
                       "message": ""
                   }
               ],
               "totalFees": 4300,
               "message": "",
               "title": "Delivery Charge",
               "amount": "4300",
               "icon": ""
           },
           "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
           },
           "longDistanceEnabled": 0,
           "rainMode": "NONE",
           "thirdPartyAddress": false,
           "thirdPartyVendor": "",
           "adTrackingID": "cid=6572436~p=16~eid=00000187-d10e-6312-14fb-665500a61018",
           "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
           },
           "lastMileTravelString": "6.6 kms",
           "hasSurge": false,
           "sla": {
               "restaurantId": "61288",
               "deliveryTime": 41,
               "minDeliveryTime": 41,
               "maxDeliveryTime": 41,
               "lastMileTravel": 6.699999809265137,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
           },
           "promoted": true,
           "avgRating": "4.0",
           "totalRatings": 10000,
           "new": false
       },
       "subtype": "basic"
   }
];

const RestaurantCard = (props) => {
   const { resData } = props;
   const { name,cuisines,avgRating,deliveryTime,cloudinaryImageId } = resData?.data
   const BASE_IMAGE_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
   return (
      <div className="res-card">
         <img className="res-image"
         src= {BASE_IMAGE_URL + cloudinaryImageId }
         alt="res-image" />
         <h3> { name }  </h3>
         <h5>{ cuisines.join(", ") }</h5>
         <h4>{ avgRating } stars</h4>
         <h4>{ deliveryTime } min delivery time</h4>


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
            { 
               resList.map((restaurant)=> { 
                  return <RestaurantCard key = { restaurant.data.id} 
                  resData= {restaurant} />
               })
            } 
           
         
            
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