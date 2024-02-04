import CategoryItemList from "./categoryItemList.js";

// This RestaurantMenuCategory is a controlled component. As It's parent is controlling it whether to show something or not. 
// This compoennt doesn't have any control. When it had it own states, then it would be uncontrolled component. Totally free from others. Making it's own descision.
// Here, Parent is controlling it's child. Child is relying on its parent to what to show and what not?
const RestaurantMenuCategory = ({ data, showList, setShowIndex }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    setShowIndex()
  }

  return (
    <li>
      {/**Header */}
      <div className="w-full m-auto  font-bold bg-gray-50 shadow-lg p-4 my-8 rounded-md">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {title}({itemCards.length})
          </span>
          <button>{showList ? "⬆️" : "⬇️"}</button>
        </div>

        {/**Accordion Body */}
        {showList && <CategoryItemList items={itemCards} />}
      </div>
    </li>
  );
};

export default RestaurantMenuCategory;
