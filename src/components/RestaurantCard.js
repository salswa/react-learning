import { CDN_RES_IMAGE_URL } from "../utils/config";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { 
        name,
        cuisines,
        avgRating,
        deliveryTime,
        cloudinaryImageId,
    } = resData?.data;
    
    return (
       <div className="res-card">
          <img className="res-image" src= { CDN_RES_IMAGE_URL + cloudinaryImageId } alt="res-image" />
          <h3> { name }  </h3>
          <h5>{ cuisines.join(", ") }</h5>
          <h4>{ avgRating } stars</h4>
          <h4>{ deliveryTime } min delivery time</h4>
       </div>
    );
 };

 export default RestaurantCard;