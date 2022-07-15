import { useId, useRef, useState } from "react";
import Alert from "../components/alert";
import ProductCard from "../components/cards/ProductCard";
import { useToastStore } from "../components/layout";
import { useCartStore } from "../contexts/shoppingcart";
import { getProducts } from "./api/products";

export default function Home({ products }) {
  const addItem = useCartStore((state) => state.addItem);
  const { addToast } = useToastStore();

  return products.map((p) => <ProductCard key={p.id} product={p} />);
}

export async function getServerSideProps(context) {
  const products = await getProducts();

  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}
