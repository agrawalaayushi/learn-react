import { useParams } from "react-router-dom";
import { IMG_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./restaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <h3>Loadingg...</h3>;

  const handleShowCategory = (index) => {
    // if clicked on the already opened category again, close it.
    if (index === showIndex) return setShowIndex(null);
    setShowIndex(index);
  };

  const resInfo = resMenu?.cards[0]?.card?.card.info;
  const {
    name,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
    expectationNotifiers,
  } = resInfo;

  const { slaString } = resInfo.sla;

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );


  const MenuItems = () => {
    return (
      <ul>
        {/**Categories accordions */}
        {categories.map((category, index) => (
          <RestaurantMenuCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showList={index === showIndex ? true : false}
            setShowIndex={() => handleShowCategory(index)}
          />
        ))}
      </ul>
    );
  };

  return (
    <div className="my-10 w-9/12 mx-auto">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-xl">{name}</h1>
          <h3 className="font-light text-md text-slate-400">
            {cuisines.join(", ")}
          </h3>
        </div>
        <div className="text-center	p-2  flex-col border-[1px] border-gray-200 rounded-sm shadow-lg">
          <div className="border-b-[1px] font-bold text-green-800 ">
            ⭐ {avgRating}
          </div>
          <div className="font-medium text-xs text-slate-400">
            {totalRatingsString}
          </div>
        </div>
      </div>
      <div>
        <div className="flex border-dashed pb-3 border-b-[1px] border-gray-300	">
          <img
            className="w-[20px] mr-3"
            src={IMG_URL + expectationNotifiers[0].icon.imageId}
          />

          <span className="text-slate-400 font-light">
            {expectationNotifiers[0].text}
          </span>
        </div>
        <div className="font-bold border-dashed py-6 border-b-[1px] border-gray-300 text-black">
          {slaString} &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;{costForTwoMessage}
        </div>
      </div>
      <MenuItems />
    </div>
  );
};

export default RestaurantMenu;
