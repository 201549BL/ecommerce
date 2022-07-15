import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import CartItem from "../shopping-cart/CartItem";
import { useCartStore } from "../../contexts/shoppingcart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef(undefined);

  const shoppingCart = useCartStore((state) => state.shoppingCart);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 flex w-full justify-between bg-slate-200 py-2 px-4 shadow-lg">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 rounded bg-gradient-to-tr from-emerald-400 to-sky-300 p-1 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h2 className="font- text-2xl">
              <i>Shopper</i>
            </h2>
          </div>
        </div>

        <button
          className="rounded-xl bg-blue-300 p-2 shadow-md "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </button>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 300 }}
            dragElastic={{ left: 0, right: 1 }}
            dragMomentum={false}
            dragSnapToOrigin
            onDragEnd={(e, info) => {
              console.log(info);

              if (info.offset.x > 0 && info.velocity.x > 0)
                return setIsOpen(false);

              if (info.offset.x > 100) return setIsOpen(false);
            }}
            className=" fixed top-0 bottom-0 right-0 flex w-full
            flex-col overflow-auto bg-yellow-200 p-2 sm:w-80"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "tween", ease: "easeOut" }}
            exit={{ x: "100%" }}
            ref={cartRef}
          >
            <div className="flex justify-between">
              <h1 className="text-xl">Shopping cart</h1>

              <button className="" onClick={() => setIsOpen((prev) => !prev)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`mt-4 flex h-auto min-h-[12rem] flex-col gap-1 overflow-hidden rounded-2xl bg-yellow-500 p-1 shadow-lg ${
                shoppingCart.length === 0 ? "justify-center" : null
              }`}
            >
              {shoppingCart.length !== 0 ? (
                shoppingCart.map((c) => (
                  <CartItem key={c.product.id} item={c} />
                ))
              ) : (
                <p className="self-center">Empty</p>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
