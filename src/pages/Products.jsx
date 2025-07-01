import { useState } from "react";
import ProductCard from "../components/phone/ProductCard";
import SearchSection from "../components/phone/SearchSection";
import { useAllProductData } from "../hooks/useProducts";

export default function Products() {
  const { data, isLoading, error } = useAllProductData();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const allPhones = data || [];

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  if (isLoading) {
    return (
      <div className="text-center text-white py-12">
        <h2 className="text-3xl font-light uppercase mb-4">Loading...</h2>
        <p>Please wait while we fetch the products.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-12">
        <h2 className="text-3xl font-light uppercase mb-4">
          Error Loading Products
        </h2>
        <p>There was an error fetching the products. Please try again later.</p>
      </div>
    );
  }

  if (allPhones.length === 0) {
    return (
      <div className="text-center text-white py-12">
        <h2 className="text-3xl font-light uppercase mb-4">
          No Products Available
        </h2>
        <p>Please check back later or try a different search.</p>
      </div>
    );
  }

  if (query && !filteredProducts.length) {
    return (
      <div className="text-center text-white py-12">
        <h2 className="text-3xl font-light uppercase mb-4">
          No Products Found
        </h2>
        <p>No products match your search query. Please try a different term.</p>
      </div>
    );
  }

  if (!allPhones || allPhones.length === 0) {
    return (
      <div className="text-center text-white py-12">
        <h2 className="text-3xl font-light uppercase mb-4">
          No Products Found
        </h2>
        <p>Please check back later or try a different search.</p>
      </div>
    );
  }

  // Filter
  let filteredProducts =
    allPhones?.filter((item) =>
      item.model.toLowerCase().includes(query.toLowerCase())
    ) || [];

  // Sort
  switch (filter) {
    case "name (a - z)":
      filteredProducts = filteredProducts.sort((a, b) =>
        a.model.localeCompare(b.model)
      );
      break;

    case "name (z - a)":
      filteredProducts = filteredProducts.sort((a, b) =>
        b.model.localeCompare(a.model)
      );
      break;

    case "price (low to high)":
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "price (high to low)":
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      break;

    default:
      filteredProducts = filteredProducts.sort((a, b) =>
        a._id.localeCompare(b._id)
      );
      break;
  }

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const products = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

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
