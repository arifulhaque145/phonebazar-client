import { useAllTestimonialData } from "../../hooks/useTestimonials";

export default function Testimonials() {
  const { data, isLoading, error } = useAllTestimonialData();
  const allTestimonials = data?.data || [];

  let content = null;

  if (isLoading) {
    content = <div className="p-4 text-center text-white">Loading...</div>;
  }

  if (error) {
    content = (
      <div className="p-4 text-center text-red-400">
        Failed to load testimonials.
      </div>
    );
  }

  if (!isLoading && allTestimonials.length === 0) {
    content = (
      <div className="p-4 text-center text-white">
        No testimonials available.
      </div>
    );
  }

  if (!isLoading && allTestimonials.length > 0) {
    content = (
      <div className="p-4 text-white">
        {allTestimonials.map((testimonial) => (
          <div key={testimonial._id} className="mb-4">
            <p className="text-lg">{testimonial.message}</p>
            <p className="text-sm text-gray-400">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="bg-slate-700">
      <h2 className="text-3xl font-light uppercase mb-0.5 bg-slate-800 p-2">
        Testimonials
      </h2>
      {content}
    </section>
  );
}
