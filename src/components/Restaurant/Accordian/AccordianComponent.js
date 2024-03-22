import React, { useState } from "react";
import ArrowUp from "../../../asset/arrow up.webp";
import ArrowDown from "../../../asset/arrow down.png";
import ItemComponent from "../Item/ItemComponent";

const AccordianComponent = ({ accordianData }) => {
  const [isAccordianExpanded, setToggleAccordian] = useState(true);
  const [accordianName, setAccordianName] = useState(
    accordianData[0]?.card?.card?.title
  );
  const handleToggleAccordian = (accordian) => {
    setToggleAccordian(!isAccordianExpanded);
    setAccordianName(accordian);
  };
  return (
    accordianData && (
      <div>
        {accordianData.map(
          (element) =>
            element?.card?.card?.title && (
              <div
                key={element.card.card.title}
                className="p-2 m-4 bg-white rounded-md"
              >
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() =>
                    handleToggleAccordian(element?.card?.card?.title)
                  }
                >
                  <h2 className="font-bold ">{element?.card?.card?.title}</h2>
                  {isAccordianExpanded &&
                  element?.card?.card?.title === accordianName ? (
                    <img src={ArrowUp} className="w-5" />
                  ) : (
                    <img src={ArrowDown} className="w-5" />
                  )}
                </div>
                {element?.card?.card?.itemCards?.map(
                  (item) =>
                    isAccordianExpanded &&
                    element?.card?.card?.title === accordianName && (
                      <ItemComponent
                        key={item?.card?.info?.id}
                        itemData={item?.card?.info}
                      />
                    )
                )}
              </div>
            )
        )}
      </div>
    )
  );
};

export default AccordianComponent;
