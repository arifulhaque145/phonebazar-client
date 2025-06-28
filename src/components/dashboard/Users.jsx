import { useAllUserData } from "../../hooks/useFirebaseAuth";

function TableRow({ row }) {
  return (
    <tr>
      <th>{row.index + 1}</th>
      <td>{row.user.name}</td>
      <td>{row.user.email}</td>
      <td>
        <button className="btn mr-4 btn-info">Edit</button>
        <button className="btn btn-error">Delete</button>
      </td>
    </tr>
  );
}

export default function Users() {
  const { data } = useAllUserData();
  const users = data?.data;

  return (
    <div>
      <h1 className="font-thin text-3xl mb-12 text-center">
        {users.length} Users Are Here
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <TableRow key={user._id} row={{ user, index }} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
