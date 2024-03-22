import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemComponent from "../Restaurant/Item/ItemComponent";
import { clearCart } from "../../store/cartSlice";

const CartComponent = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const items = useSelector((store) => store.cart.items);
  return items.length !== 0 ? (
    <div className="flex justify-center">
      <div className="flex flex-col p-4 m-4 justify-center w-8/12 bg-slate-200 rounded-lg border">
        {items.map((item) => (
          <ItemComponent itemData={item} key={item.id} fromCart={true} />
        ))}

        <button
          className=" bg-black text-white font-semibold rounded-lg p-2 m-4"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <div className="flex justify-center p-4 m-4  w-8/12 bg-slate-200 rounded-lg border">
        Oppps!!! You have empty cart. Please add items to your cart.
      </div>
    </div>
  );
};

export default CartComponent;
