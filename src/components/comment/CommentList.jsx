import CommentItem from "./CommentItem";

export default function CommentList({ reviews }) {
  if (!reviews?.length)
    return (
      <p className="text-xl font-light uppercase text-center mt-8">
        No Comments
      </p>
    );

  return (
    <div>
      {reviews?.map((review) => (
        <CommentItem key={review._id} reviewId={review._id} comment={review} />
      ))}
    </div>
  );
}
