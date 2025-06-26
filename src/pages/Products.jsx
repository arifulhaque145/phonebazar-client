import ProductCard from "../components/phone/ProductCard";
import SearchSection from "../components/phone/SearchSection";
import { useAllProductData } from "../hooks/useProducts";

export default function Products() {
  const { data: products } = useAllProductData();

  return (
    <div className="">
      <div className="lg:px-48 py-12">
        <SearchSection />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
        {products?.map((phone) => (
          <ProductCard key={phone._id} product={phone} />
        ))}
      </div>
    </div>
  );
}
