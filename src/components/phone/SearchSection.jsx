import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function SearchSection({ setQuery, setFilter }) {
  const { register, watch } = useForm();
  const fruitOptions = [
    "Name (A - Z)",
    "Name (Z - A)",
    "Price (Low to High)",
    "Price (High to Low)",
  ];

  const query = watch("query", "");
  const filter = watch("filter", "");

  useEffect(() => {
    setQuery(query);
    setFilter(filter);
  }, [query, filter, setQuery, setFilter]);

  return (
    <section className="flex justify-center xs:w-fit">
      <input
        type="text"
        placeholder="Search your favourite phone..."
        className="bg-amber-50 text-black px-4 py-2 rounded-sm w-fit lg:w-3/4"
        {...register("query")}
      />

      <select className="ml-2 btn" {...register("filter")}>
        <option value="">Sort By (None)</option>
        {fruitOptions.map((fruit) => (
          <option key={fruit} value={fruit.toLowerCase()}>
            {fruit}
          </option>
        ))}
      </select>
    </section>
  );
}
