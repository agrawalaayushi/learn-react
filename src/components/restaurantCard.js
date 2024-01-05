import React from "react";

const RestaurantCard = (props) => {
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const { name, cloudinaryImageId, costForTwo, avgRating, sla } = props.data;

  return (
    <a>
      <li className="res-card">
        <div className="res-img-container">
          <img className="res-img" src={IMG_URL + cloudinaryImageId} />
        </div>
        <div className="info-container">
          <div className="info">{name}</div>
          <div>
            <span className="info">{avgRating}</span>
            <span className="info">{sla.deliveryTime}min</span>
          </div>
          <div className="cost">{costForTwo}</div>
        </div>
      </li>
    </a>
  );
};

export default RestaurantCard;
