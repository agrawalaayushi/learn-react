import React, { useEffect } from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./restaurantCard";
import Search from "./search";
import ShimmerView from "./shimmerView";
import { SWIGGY_URL, CORS_PROXY_TEMPORARY_API_KEY } from "../util";

const RestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(SWIGGY_URL, {
      headers: {
        "x-cors-api-key": CORS_PROXY_TEMPORARY_API_KEY,
      },
    });
    response = await response.json();
    console.log(response)

    // optional chaining
    response =
      response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResList(response);
    setFilteredRestaurant(response);
  };

  const handleTopRated = () => {
    // const resListfilterData = ;
    const data = resList.filter((res) => res.info.avgRating > 4.3);
    setFilteredRestaurant(data);
  };

  const handleSearch = (e, searchText) => {
    const value = searchText.toLowerCase();
    const searchedResult = resList.filter((res) =>
      res.info.name.toLowerCase().includes(value)
    );
    setFilteredRestaurant(searchedResult);
  };

  const TopRatedRestaurant = () => {
    return <button onClick={handleTopRated}>Top Rated Restaurants</button>;
  };

  if (resList && resList.length === 0) return <ShimmerView />;

  return (
    <div className="res-container">
      <>
        <div className="filter-section">
          <Search handleSearch={handleSearch} />
          <TopRatedRestaurant />
        </div>

        <ul className="res-list">
          {filteredRestaurant &&
            filteredRestaurant.map(({ info }) => {
              return <RestaurantCard key={info.id} data={info} />;
            })}
        </ul>
      </>
    </div>
  );
};

export default RestaurantList;
