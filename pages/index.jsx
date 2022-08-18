import { useRef } from "react";
import CardContainer from "../components/cards/CardContainer";
import ProductCard from "../components/cards/ProductCard";
import useScreenWidth from "../hooks/useScreenWidth";

import { useCartStore } from "../stores/shoppingcart";
import { useToastStore } from "../stores/toast";
import { getProducts } from "./api/products";

export default function Home({ products }) {
  const addItem = useCartStore((state) => state.addItem);
  const { addToast } = useToastStore();
  const { width } = useScreenWidth();

  return (
    <CardContainer>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
      <ProductCard
        key="single"
        image="https://images.unsplash.com/photo-1649613420457-262cf0dc2937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80"
      />
      <ProductCard
        key="single2"
        image="https://images.unsplash.com/photo-1655071515671-1121d8077432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
      />
    </CardContainer>
  );
}

export async function getServerSideProps(context) {
  const products = await getProducts();

  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}
