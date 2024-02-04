import React from "react";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    sla,
    id,
    aggregatedDiscountInfoV3,
  } = props.data;

  const { discountTag, header, subHeader } = aggregatedDiscountInfoV3;

  return (
    <li className="w-60 h-56 shadow-lg m-[10px]  rounded-xl transition transform ease-in-out duration-100 hover:scale-95 ">
      <Link to={`/restaurant/${id}`} className="w-full h-full cursor-pointer">
        <div className="relative w-full h-32  drop-shadow-lg overflow-hidden">
          <img
            className=" w-full h-full  object-cover rounded-xl"
            src={IMG_URL + cloudinaryImageId}
          />
          <div className="bg-gradient-to-b drop-shadow-xl	text-lg h-1/4 from-[#1b1e2400] to-[#1b1e24] absolute px-2 w-full bottom-0 left-0 font-bold text-md text-white">
            {(discountTag ? discountTag : " ") +
              (header && header + " ") +
              (subHeader && subHeader)}
          </div>
        </div>

        <div className="p-2">
          <div className="text-lg	font-medium truncate">{name}</div>
          <div>
            <span className="font-medium">⭐ {avgRating} • </span>
            <span className="font-medium">{sla.deliveryTime}min</span>
          </div>
          <div className="text-md text-slate-500">{costForTwo}</div>
        </div>
      </Link>
    </li>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
