import useAuth from "../../hooks/useAuth";
import { usePostSingleReviewData } from "../../hooks/useReviews";

export default function CommentForm({ productId }) {
  const { state } = useAuth();
  const { mutate: postReview } = usePostSingleReviewData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    postReview({
      ...data,
      rating: parseInt(data.rating),
      product_id: productId,
      user: state.user,
    });
    form.reset();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Your review..."
          name="comment"
        />
        <div className="form-control">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name="rating"
                value={star}
                className="mask mask-star-2 bg-orange-400"
              />
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Review
        </button>
      </form>
    </div>
  );
}
