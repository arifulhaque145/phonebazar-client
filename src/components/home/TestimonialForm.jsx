import { useForm } from "react-hook-form";
import { usePostSingleReviewData } from "../../hooks/useTestimonials";

export default function TestimonialForm() {
  const { mutate: postTestimonial } = usePostSingleReviewData();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    console.log("Testimonial submitted:", data);
    postTestimonial({ ...data });
    reset(); // clear form
  };

  return (
    <div className="bg-slate-800 mt-2">
      <div className="max-w-2/4 mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Leave a Testimonial
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-error">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="form-control">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-error">{errors.email.message}</p>
            )}
          </div>

          {/* Comment */}
          <div className="form-control">
            <textarea
              placeholder="Your comment"
              className="textarea textarea-bordered w-full"
              rows={4}
              {...register("message", {
                required: "Comment is required",
                minLength: {
                  value: 10,
                  message: "Comment must be at least 10 characters",
                },
              })}
            />
            {errors.comment && (
              <p className="text-error">{errors.comment.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex flex-row-reverse">
            <button
              type="submit"
              className="btn bg-slate-950 hover:bg-slate-900 hover:text-slate-100 w-fit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Testimonial"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
