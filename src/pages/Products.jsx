import { useState } from "react";
import ProductCard from "../components/phone/ProductCard";
import SearchSection from "../components/phone/SearchSection";
import { useAllProductData } from "../hooks/useProducts";

export default function Products() {
  const { data } = useAllProductData();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  let products = data?.filter((item) =>
    item.model.toLowerCase().includes(query.toLowerCase())
  );

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  products = data?.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  switch (filter) {
    case "name (a - z)":
      products = products?.sort((a, b) => a.model.localeCompare(b.model));
      break;

    case "name (z - a)":
      products = products?.sort((a, b) => b.model.localeCompare(a.model));
      break;

    case "price (low to high)":
      products = products?.sort((a, b) => a.price - b.price);
      break;

    case "price (high to low)":
      products = products?.sort((a, b) => b.price - a.price);
      break;

    default:
      products = products?.sort((a, b) => a._id.localeCompare(b._id));
      break;
  }

  return (
    <div className="">
      <div className="lg:px-48 py-12">
        <SearchSection setQuery={setQuery} setFilter={setFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
        {products?.map((phone) => (
          <ProductCard key={phone._id} product={phone} />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="btn"
        >
          Prev
        </button>

        <span className="self-center font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}
