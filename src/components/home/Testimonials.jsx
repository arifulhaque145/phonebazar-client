import { useAllTestimonialData } from "../../hooks/useTestimonials";
import TestimonialCard from "./TestimonialCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <div className="bg-slate-800 max-w-5xl mx-auto px-4 py-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {allTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
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
