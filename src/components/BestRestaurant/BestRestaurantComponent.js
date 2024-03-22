import React from "react";

const BestRestaurantComponent = ({ data }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xl">{data?.title}</h2>
      <div className="grid grid-cols-4 gap-4 justify-evenly py-4">
        {data?.brands?.map((location, index) => (
          <a key={index} href={location.link}>
            <div className="cursor-pointer shadow-xl flex flex-wrap justify-center bg-slate-200 p-4 rounded-lg">
              <span>{location.text}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BestRestaurantComponent;
