import React, { useState, useEffect } from "react";
import { useCartStore } from "../../stores/shoppingcart";

const CartItem = ({ item, handleRemoveItem }) => {
  const { removeItem, incAmount, decAmount } = useCartStore();

  return (
    <li className="flex justify-between rounded-xl bg-yellow-300 p-2">
      <p>{item.product.name}</p>
      <div className="flex rounded border border-black">
        <button
          onClick={() => {
            if (item.amount === 1) return removeItem(item);

            decAmount(item);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="h-full w-[1px] bg-black"></div>
        <p className="w-[3ch] p-1 text-center leading-none">{item.amount}</p>
        <div className="h-full w-[1px] bg-black"></div>
        <button
          onClick={() => {
            incAmount(item);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
