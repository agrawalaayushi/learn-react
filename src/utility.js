SWIGGY_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const getRestaurantData = async () => {

  let response = await fetch(SWIGGY_URL );
  response = await response.json();

  return await response;
};
