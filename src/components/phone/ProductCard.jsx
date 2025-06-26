import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { _id, brand, model, price, image } = product;

  return (
    <div className="card bg-slate-900 w-full shadow-sm justify-between">
      <div className="p-2">
        <figure className="relative">
          <div className="w-full bg-white flex justify-center hover:scale-150 hover:duration-500 hover:cursor-pointer">
            <img className="h-40" src={image} alt={model} />
          </div>
          <span className="absolute top-2 right-2 inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-red-500/10 ring-inset">
            {brand}
          </span>
        </figure>
        <div className="text-center my-4">
          <h2 className="text-xl font-thin uppercase">{model}</h2>
          <div className="mt-4">
            <p className="inline-block font-medium text-2xl">${price}</p>
            <span> (Official)</span>
          </div>
        </div>
      </div>
      <Link
        to={`/product-details/${_id}`}
        className="bg-gray-900 hover:bg-gray-700 hover:duration-300 text-center py-3 border-t-2 border-t-gray-700"
      >
        Details
      </Link>
    </div>
  );
}
