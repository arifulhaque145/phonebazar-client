import { useMemo } from "react";
import { useAllProductData } from "../../hooks/useProducts";
import ProductCard from "../phone/ProductCard";

const getRandomProducts = (products, count) => {
  if (!Array.isArray(products)) return [];
  const shuffled = [...products]?.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function PopularPhones() {
  const { data } = useAllProductData();
  const popularProducts = useMemo(() => getRandomProducts(data, 4), [data]);

  return (
    <section className="my-2 rounded-sm">
      <div className="flex items-center justify-between mb-0.5 bg-slate-800 p-2">
        <h2 className="text-3xl font-light uppercase">Popular Phones</h2>
        <button className="text-blue-600">See More</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2 bg-slate-800">
        {popularProducts?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
