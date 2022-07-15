import React from "react";
import { useCartStore } from "../../contexts/shoppingcart";

const defaultProps = {
  name: "Placeholder-name",
  price: 5000,
  description: "Descripticus largus textus lorem hopicus gigantacus",
};

const ProductCard = ({ product = defaultProps }) => {
  const { addItem } = useCartStore();

  return (
    <div className="flex w-80 items-center justify-center md:w-96">
      <div className="w-full p-4">
        <div className="card flex flex-col justify-center rounded-lg bg-white p-10 shadow-2xl">
          <div className="prod-title">
            <p className="text-2xl font-bold uppercase text-gray-900">
              {product.name}
            </p>
            <p className="text-sm uppercase text-gray-400">
              {product.description}
            </p>
          </div>
          <div className="prod-img">
            <img
              src="https://www.tailwind-kit.com/images/object/4.jpg"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-center justify-between pt-10 text-gray-900 md:flex-row">
            <p className="text-xl font-bold md:pr-2">{product.price}$</p>
            <button
              onClick={() => addItem(product)}
              className="rounded-full border-2 border-gray-900 px-6 py-2 uppercase transition duration-200 ease-in hover:bg-gray-800 hover:text-white focus:outline-none"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
