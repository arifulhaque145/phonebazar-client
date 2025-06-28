import { useForm } from "react-hook-form";
import { useUpdateSingleReviewData } from "../../hooks/useReviews";

export default function UpdateCommentForm({ comment, setToggle }) {
  const { mutate: updateReview } = useUpdateSingleReviewData();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      rating: comment.rating,
      comment: comment.comment,
    },
  });

  const rating = watch("rating");

  const onSubmit = async (data) => {
    updateReview({ ...data, rating: parseInt(data.rating), _id: comment._id });
    reset();
    setToggle(true);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Your review..."
          onChange={(value) => setValue("comment", value)}
          {...register("comment")}
        />

        <div className="form-control">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                value={star}
                checked={Number(rating) === star}
                onChange={() =>
                  setValue("rating", star, { shouldValidate: true })
                }
              />
            ))}
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mr-2">
            Update Review
          </button>
          <button onClick={() => setToggle(false)} className="btn">
            {isSubmitting ? "Loading..." : "Cancel"}
          </button>
        </div>
      </form>
    </div>
  );
}
