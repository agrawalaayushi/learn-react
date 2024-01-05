import React, { useEffect } from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./restaurantCard";
import ShimmerView from "./shimmerView";

const RestaurantList = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  SWIGGY_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const fetchData = async () => {
    let response = await fetch(SWIGGY_URL);
    response = await response.json();
    response =
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResList(response);
  };

  return (
    <div className="res-container">
      <ul className="res-list">
        {resList.length > 0 ? (
          resList.map(({ info }) => {
            return <RestaurantCard key={info.id} data={info} />;
          })
        ) : (
          <ShimmerView />
        )}
      </ul>
    </div>
  );
};

export default RestaurantList;
