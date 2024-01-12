import React, { useEffect } from "react";
import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./restaurantCard";
import Search from "./search";
import ShimmerView from "./shimmerView";
import { SWIGGY_URL, CORS_PROXY_TEMPORARY_API_KEY } from "../utils/constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const RestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="m-40">
        Looks like, you're offline! Please check your internet connection.
      </h1>
    );

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(SWIGGY_URL, {
      // headers: {
      //   "x-cors-api-key": CORS_PROXY_TEMPORARY_API_KEY,
      // },
    });
    response = await response.json();
    console.log(response);

    // optional chaining
    response =
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResList(response);
    setFilteredRestaurant(response);
  };

  console.log("resList", resList);
  if (resList.length === 0) return <ShimmerView />;

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
    return (
      <button
        onClick={handleTopRated}
        className="bg-white shadow-md  text-black border  border-gray-400 rounded-full ml-4 px-2 py-1.5"
      >
        Top Rated Restaurants
      </button>
    );
  };

  return (
    <div className="m-5">
      <>
        <div className="flex justify-between my-4">
          <Search handleSearch={handleSearch} />
          <TopRatedRestaurant />
        </div>

        <ul className="flex justify-evenly flex-wrap mt-15">
          {filteredRestaurant &&
            filteredRestaurant.map(({ info }) => {
              return info.promoted ? (
                <RestaurantCardPromoted key={info.id} data={info} />
              ) : (
                <RestaurantCard key={info.id} data={info} />
              );
            })}
        </ul>
      </>
    </div>
  );
};

export default RestaurantList;
