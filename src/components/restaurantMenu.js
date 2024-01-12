import { useParams } from "react-router-dom";
import { IMG_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <h3>Loadingg...</h3>;

  console.log("resMenu", resMenu?.cards[0]?.card?.card.info);
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
  const menu =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  const MenuItems = () => {
    return (
      <div>
        <h1 className="text-lg font-bold text-black  my-6">
          {menu.title}({menu.itemCards.length})
        </h1>
        <ul>
          {menu.itemCards.map((item) => {
            const {
              name,
              id,
              price,
              imageId,
              isVeg,
              defaultPrice,
              description,
            } = item.card.info;

            return (
              <li
                key={id}
                className="flex justify-between my-3 pb-5 border-b-[1px] border-gray-300"
              >
                <div className="w-3/4">
                  <div>{isVeg ? "🫛" : "🍗"}</div>
                  <h3 className="font-semibold text-slate-900">{name}</h3>
                  <p className="font-semibold text-slate-900">
                    ₹{(defaultPrice || price) / 100}
                  </p>
                  <p className="font-light text-sm text-slate-400">
                    {description}
                  </p>
                </div>
                <img
                  className=" w-28 h-20 object-cover rounded-md"
                  src={IMG_URL + imageId}
                />
              </li>
            );
          })}
        </ul>
      </div>
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
