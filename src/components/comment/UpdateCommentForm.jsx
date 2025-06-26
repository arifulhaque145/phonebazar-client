import { useState } from "react";
import { useUpdateSingleReviewData } from "../../hooks/useReviews";

export default function UpdateCommentForm({ comment, review, setToggle }) {
  const { mutate: updateReview } = useUpdateSingleReviewData();
  const [cmt, setCmt] = useState(comment.comment);
  const [rating, setRating] = useState(comment.rating);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    updateReview({ ...data, rating: parseInt(data.rating) + 1, _id: review });
    form.reset();
    setToggle(true);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Your review..."
          name="comment"
          value={cmt}
          onChange={(e) => setCmt(e.target.value)}
        />
        <div className="form-control">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((_, star) => (
              <input
                key={star}
                type="radio"
                name="rating"
                value={star}
                checked={rating === String(star)}
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-orange-400"
              />
            ))}
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mr-2">
            Update Review
          </button>
          <button onClick={() => setToggle(false)} className="btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
