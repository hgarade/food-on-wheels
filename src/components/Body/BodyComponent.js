import React, { useEffect, useState } from "react";
import FavouriteFood from "../FavouriteFood/FavouriteFoodComponent";
import RestaurantChainComponent from "../RestaurantChain/RestaurantChainComponent";
import BestRestaurantComponent from "../BestRestaurant/BestRestaurantComponent";
import { LABELS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cartSlice";

const BodyComponent = () => {
  const [cardsData, setCardsData] = useState([]);
  const [topRatedResData, setTopRatedResData] = useState([]);
  const [pureVegResData, setPureVegResData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const searchCoordinates = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchCoordinates.latitude !== "") {
      fetchHomePageData();
    }
  }, [searchCoordinates]);

  const handleTopRatedFilter = () => {
    if (topRatedResData.length !== 0) {
      setTopRatedResData([]);
      setFilteredResData([]);
    } else {
      setPureVegResData([]);
      const filteredRes = [];
      cardsData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.forEach(
        (res) => {
          if (res.info.avgRating >= 4.5) {
            filteredRes.push(res);
          }
        }
      );
      setTopRatedResData(filteredRes);
      setFilteredResData(filteredRes);
    }
  };

  const handlePureVegFilter = () => {
    if (pureVegResData.length !== 0) {
      setPureVegResData([]);
      setFilteredResData([]);
    } else {
      setTopRatedResData([]);
      const filteredRes = [];
      cardsData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.forEach(
        (res) => {
          if (res?.info?.veg) {
            filteredRes.push(res);
          }
        }
      );
      setPureVegResData(filteredRes);
      setFilteredResData(filteredRes);
    }
  };

  const fetchHomePageData = async () => {
    const url = LABELS.CITY_RESTAURANT_DATA_BASE_URL;
    const finalUrl = url
      .replace("%s%", parseFloat(searchCoordinates.latitude).toFixed(4))
      .replace("%p%", parseFloat(searchCoordinates.longitude).toFixed(4));

    const rawData = await fetch(finalUrl);

    const data = await rawData.json();
    setCardsData(data?.data?.cards);
    dispatch(clearCart());
  };

  if (cardsData?.length === 0) {
    return <div>Loading !!!!</div>;
  } else {
    return (
      <div className="p-4 m-4">
        <FavouriteFood data={cardsData[0]?.card?.card} />
        <div className="flex gap-3">
          <button
            className="rounded-lg border-2 border-black p-2"
            onClick={handleTopRatedFilter}
          >
            Top Rated Restaurants{" "}
            {topRatedResData.length !== 0 && <span className="pl-2"> x </span>}
          </button>
          <button
            className="rounded-lg border-2 border-black p-2"
            onClick={handlePureVegFilter}
          >
            Pure Veg
            {pureVegResData.length !== 0 && <span className="pl-2"> x </span>}
          </button>
        </div>
        <RestaurantChainComponent
          data={cardsData[1]?.card?.card}
          filterData={filteredResData}
        />
        <BestRestaurantComponent data={cardsData[6]?.card?.card} />
      </div>
    );
  }
};

export default BodyComponent;
