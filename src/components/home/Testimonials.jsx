import avatar from "../../assets/avatar.png";
import { useAllTestimonialData } from "../../hooks/useTestimonials";

export default function Testimonials() {
  const { data, isLoading, error } = useAllTestimonialData();
  const allTestimonials = data;

  if (isLoading) {
    return (
      <section className="bg-slate-700">
        <h2 className="text-3xl font-light uppercase mb-0.5 bg-slate-800 p-2">
          Testimonials
        </h2>
        <div className="p-4 text-center text-white">Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-slate-700">
        <h2 className="text-3xl font-light uppercase mb-0.5 bg-slate-800 p-2">
          Testimonials
        </h2>
        <div className="p-4 text-center text-red-400">Failed to load testimonials.</div>
      </section>
    );
  }

  return (
    <section className="bg-slate-700">
      <h2 className="text-3xl font-light uppercase mb-0.5 bg-slate-800 p-2">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-0.5 bg-slate-800 p-2">
        {allTestimonials?.length > 0 ? (
          allTestimonials.map((user) => (
            <div
              key={user._id}
              className="flex flex-col items-center p-4 bg-gray-900 shadow rounded"
            >
              <img
                className="avatar w-12 rounded-full"
                src={avatar}
                alt={user.name}
              />
              <p className="font-thin uppercase text-2xl mt-4">{user.name}</p>
              <p className="italic text-slate-500">{user.message}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-white">No testimonials found.</div>
        )}
      </div>
    </section>
  );
}
