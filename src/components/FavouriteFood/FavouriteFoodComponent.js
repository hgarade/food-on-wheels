import React from "react";
import FoodComponent from "./FoodComponent/FoodComponent";

const FavouriteFoodComponent = ({ data }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xl">{data?.header?.title}</h2>
      <FoodComponent data={data?.imageGridCards?.info} />
    </div>
  );
};

export default FavouriteFoodComponent;
