import React from "react";
import RestaurantBlockComponent from "./RestaurantBlock/RestaurantChainBlockComponent";

const RestaurantChainComponent = ({ data, filterData }) => {
  const isFilteredData = filterData.length === 0 ? false : true;
  return (
    <div className="flex flex-col py-4">
      <h2 className="font-bold text-xl">{data?.header?.title}</h2>
      <RestaurantBlockComponent
        data={
          isFilteredData
            ? filterData
            : data?.gridElements?.infoWithStyle?.restaurants
        }
      />
    </div>
  );
};

export default RestaurantChainComponent;
