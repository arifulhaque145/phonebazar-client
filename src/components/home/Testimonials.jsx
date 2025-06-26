const recomanded = [
  {
    id: 1,
    img: "https://i.pravatar.cc/100?img=8",
    name: "John Doe",
    message: "This site is very good",
  },
  {
    id: 2,
    img: "https://i.pravatar.cc/100?img=2",
    name: "Alura Jenson",
    message: "This site is very good",
  },
  {
    id: 2,
    img: "https://i.pravatar.cc/100?img=4",
    name: "Mark Don",
    message: "This site is very good",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-700">
      <h2 className="text-3xl font-light uppercase mb-0.5 bg-slate-800 p-2">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-0.5 bg-slate-800 p-2">
        {recomanded.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center p-4 bg-gray-900 shadow rounded"
          >
            <img
              className="avatar w-12 rounded-full"
              src={user.img}
              alt={user.name}
            />
            <p className="font-thin uppercase text-2xl mt-4">{user.name}</p>
            <p className="italic text-slate-500">{user.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
