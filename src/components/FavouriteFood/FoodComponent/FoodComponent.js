import React from "react";
import { LABELS } from "../../../utils/constants";

const FoodComponent = ({ data }) => {
  return (
    <div className="flex overflow-x-auto scroll-smooth no-scrollbar">
      {data?.map((item) => (
        <img
          key={item?.id}
          src={LABELS.HEADER_IMAGE_BASE_URL + item?.imageId}
          className="w-52 h-52"
        />
      ))}
    </div>
  );
};

export default FoodComponent;
