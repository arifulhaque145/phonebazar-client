import { useAllProductData } from "../../hooks/useProducts";

function TableRow({ row }) {
  const handleRowEdit = (id) => {
    console.log("Edit your product: ", id);
  };
  const handleRowDelete = (id) => {
    console.log("Delete your product: ", id);
  };
  return (
    <tr>
      <th>{row.index + 1}</th>
      <td>{row.product.model}</td>
      <td>{row.product.brand}</td>
      <td>{row.product.price}</td>
      <td>
        <button
          onClick={() => handleRowEdit(row.product._id)}
          className="btn mr-4 btn-info"
        >
          Edit
        </button>
        <button
          onClick={() => handleRowDelete(row.product._id)}
          className="btn btn-error"
        >
          Delete
        </button>
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
        {products?.length} Products Are Here
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
