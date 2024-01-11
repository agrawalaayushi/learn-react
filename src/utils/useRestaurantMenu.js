import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu]   = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let response = await fetch(MENU_URL + resId);

    response = await response.json();
    setResMenu(response.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
