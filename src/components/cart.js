import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";
import { IMG_URL } from "../utils/constants";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className="my-8 w-9/12 mx-auto">
      <div className="flex justify-between mb-12">
        <h3 className="text-xl font-semibold">Cart </h3>
        <button
          className="px-3 text-sm bg-red-50 active:border-red-700 border-transparent border-[1px] text-red-800  border-red-800 rounded-md"
          onClick={handleClearCart}
        >
          Clear All
        </button>
      </div>

      {items.length === 0 ? (
        <p className=" text-lg font-semibold text-center">
          Cart is empty! Fill it up 😋{" "}
        </p>
      ) : (
        <ul>
          {items.map((item, index) => {
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
                  <p className="font-light text-sm text-slate-700">
                    {description}
                  </p>
                </div>
                <div>
                  <img
                    className="w-28 h-20 object-cover rounded-md"
                    src={IMG_URL + imageId}
                  />
                  <button
                    className="bg-white text-xs relative -top-[15px] left-[18px] text-red-800 hover:bg-red-50 active:border-red-700 border-transparent border-[1px] shadow-md rounded-md py-1 px-5"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cart;
