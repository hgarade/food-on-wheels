import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingIcon from "../../asset/iconsrating.png";
import AccordianComponent from "./Accordian/AccordianComponent";

const RestaurantComponent = () => {
  const { id } = useParams();
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const rawData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=" +
        id
    );

    const data = await rawData.json();
    setResData(data?.data?.cards);
  };

  if (resData.length !== 0) {
    const { name, avgRatingString, cuisines, areaName } =
      resData[0]?.card?.card?.info;

    const accordianData =
      resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (element) => {
          if (element?.card?.relevance) {
            return false;
          } else {
            return true;
          }
        }
      );
    return (
      <div className="flex justify-center">
        <div className="flex flex-col p-4 m-4 justify-center w-8/12 bg-slate-200 rounded-lg border">
          <div className="border-b border-slate-300 pb-3">
            <h2 className="font-bold">{name}</h2>
            <div className="flex gap-1 font-semibold">
              <img src={RatingIcon} className="w-5" />
              <span>{avgRatingString}</span>
            </div>
            <span className="flex text-nowrap overflow-hidden">
              {cuisines.join(",")}
            </span>
            <p>{areaName}</p>
          </div>
          <AccordianComponent accordianData={accordianData} />
        </div>
      </div>
    );
  } else {
    <div>Loading</div>;
  }
};

export default RestaurantComponent;
