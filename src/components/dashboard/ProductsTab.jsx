import { useAllProductData } from "../../hooks/useProducts";

function TableRow({ row }) {
  return (
    <tr>
      <th>{row.index + 1}</th>
      <td>{row.product.model}</td>
      <td>{row.product.brand}</td>
      <td>{row.product.price}</td>
      <td>
        <button className="btn mr-4 btn-info">Edit</button>
        <button className="btn btn-error">Delete</button>
      </td>
    </tr>
  );
}

export default function ProductsTab() {
  const { data } = useAllProductData();
  const products = data;

  return (
    <div>
      <h1 className="font-thin text-3xl mb-12 text-center">
        {products.length} Products Are Here
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <TableRow key={product._id} row={{ product, index }} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
