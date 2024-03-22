import React, { useState } from "react";
import { LABELS } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../../store/cartSlice";

const ItemComponent = ({ itemData, fromCart }) => {
  const dispatch = useDispatch();
  const [isItemAdded, setItemAdded] = useState(false);
  const handleAddItem = (item) => {
    !isItemAdded ? dispatch(addItem(item)) : dispatch(removeItem(item));
    setItemAdded(!isItemAdded);
  };

  return (
    <div className="flex justify-between py-2">
      <div>
        <h2 className="font-semibold">{itemData.name}</h2>
        <p>
          Rs.
          {itemData.defaultPrice
            ? itemData.defaultPrice / 100
            : itemData.price / 100}
        </p>
        <p className="py-4 italic">{itemData.description}</p>
      </div>
      <div className="ml-2">
        <div className="relative">
          <img
            className="min-w-32 min-h-32 rounded-lg "
            src={LABELS.FOOD_ITEM_IMAGE_BASE_URL + itemData.imageId}
          />
          {!fromCart && (
            <button
              className={
                "absolute bg-black text-white font-semibold rounded-lg p-2 bottom-0 " +
                (isItemAdded ? "left-7" : "left-10")
              }
              onClick={() => handleAddItem(itemData)}
            >
              {isItemAdded ? "Remove" : "Add"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
