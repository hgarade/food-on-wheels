import React from "react";
import { LABELS } from "../../../utils/constants";
import RatingIcon from "../../../asset/iconsrating.png";
import { Link } from "react-router-dom";

const RestaurantChainBlockComponent = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 m-4 justify-center ">
      {data?.map((restaurant) => (
        <Link
          key={restaurant?.info?.id}
          to={"/restaurant/" + restaurant?.info?.id}
        >
          <div className="flex flex-col w-52 bg-slate-200 rounded-lg hover:shadow-lg cursor-pointer">
            <div>
              <img
                className="h-36 overflow-hidden w-full rounded-lg"
                src={
                  LABELS.RES_CARD_IMAGE_BASE_URL +
                  restaurant?.info?.cloudinaryImageId
                }
              />
            </div>
            <div className="p-2 flex-col">
              <h2 className="font-bold">{restaurant?.info?.name}</h2>
              <div className="flex gap-1 font-semibold">
                <img src={RatingIcon} className="w-5" />
                <span>{restaurant?.info?.avgRatingString}</span> •
                <span>{restaurant?.info?.sla?.slaString}</span>
              </div>
              <span className="flex text-nowrap overflow-hidden">
                {restaurant?.info?.cuisines.join(",")}
              </span>
              <p>{restaurant?.info?.areaName}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantChainBlockComponent;
