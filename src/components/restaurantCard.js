import React from "react";
import { IMG_URL } from "../util";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, avgRating, sla } = props.data;

  return (
    <li className="w-60 h-56 shadow-lg m-[10px] border border-gray-300 border-x-slate-200 rounded-md cursor-pointer">
      <a className="w-full">
        <img className="w-full h-32 object-cover rounded-md" src={IMG_URL + cloudinaryImageId} />

        <div className="p-2">
          <div className="text-lg	font-medium	 truncate">{name}</div>
          <div>
            <span className="font-medium">⭐ {avgRating} •  </span>
            <span className="font-medium">{sla.deliveryTime}min</span>
          </div>
          <div className="text-md text-slate-500">{costForTwo}</div>
        </div>
      </a>
    </li>
  );
};

export default RestaurantCard;
