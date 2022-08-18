import create from "zustand";
import { getCartItem } from "../utils/cartItem";
import { persist, devtools } from "zustand/middleware";

export const useCartStore = create(
  devtools(
    persist(
      (set, get) => {
        return {
          shoppingCart: [],

          addItem: (item) => {
            if (get().shoppingCart.some((s) => s.product.id === item.id))
              return set((state) => ({
                shoppingCart: state.shoppingCart.map((s) => {
                  if (s.product.id !== item.id) return s;

                  return { ...s, amount: s.amount + 1 };
                }),
              }));

            set((state) => ({
              shoppingCart: [...state.shoppingCart, getCartItem(item)],
            }));
          },

          removeItem: (item) =>
            set((state) => ({
              shoppingCart: state.shoppingCart.filter((s) => s !== item),
            })),

          incAmount: (item) =>
            set((state) =>
              state.shoppingCart.map((s) => {
                if (s !== item) return item;

                return { ...s, amount: s.amount++ };
              })
            ),

          decAmount: (item) =>
            set((state) =>
              state.shoppingCart.map((s) => {
                if (s !== item) return item;

                return { ...s, amount: s.amount-- };
              })
            ),
        };
      },
      {
        name: "shopping-cart", // unique name
        getStorage: () => localStorage,
      }
    )
  )
);
