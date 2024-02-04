import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const CategoryItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <ul>
      {items.map((item) => {
        const { name, id, price, imageId, isVeg, defaultPrice, description } =
          item.card.info;
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
              <p className="font-light text-sm text-slate-400">{description}</p>
            </div>
            <div>
              <img
                className="w-28 h-20 object-cover rounded-md"
                src={IMG_URL + imageId}
              />
              <button
                className="bg-white text-xs relative -top-[15px] left-[18px] text-green-600 hover:bg-green-50 active:border-green-700 border-transparent border-[1px]  shadow-md rounded-md py-1 px-5"
                onClick={() => handleAddToCart(item)}
              >
                Add +
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryItemList;
