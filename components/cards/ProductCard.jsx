import React from "react";
import { useCartStore } from "../../stores/shoppingcart";
import { useToastStore } from "../../stores/toast";

const defaultProps = {
  name: "Placeholder-name",
  price: 5000,
  description: "Descripticus largus textus lorem hopicus gigantacus",
};

const ProductCard = ({
  product = defaultProps,
  image = "https://www.tailwind-kit.com/images/object/4.jpg",
}) => {
  const { addItem } = useCartStore();
  const { addToast } = useToastStore();

  return (
    <div className="flex flex-grow flex-col justify-between rounded-lg border border-slate-400 bg-white p-4 shadow-2xl xs:p-10">
      <div className="prod-title">
        <p className="text-2xl font-bold uppercase text-gray-900">
          {product.name}
        </p>
        <p className="text-sm uppercase text-gray-400">{product.description}</p>
      </div>
      <div className="max-h-40">
        <img
          src={image}
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="flex  flex-col items-center justify-between  text-gray-900 lg:flex-row">
        <p className="text-xl font-bold ">{product.price}$</p>
        <button
          onClick={() => {
            addItem(product);
            addToast(product.name);
          }}
          className="whitespace-nowrap rounded-full border-2 border-gray-900 px-6 py-2 uppercase transition duration-200 ease-in hover:bg-gray-800 hover:text-white focus:outline-none"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
