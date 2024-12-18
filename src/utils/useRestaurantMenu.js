import React, { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchRestarurantMenuData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };
  useEffect(() => {
    fetchRestarurantMenuData();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;