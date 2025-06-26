import { useState } from "react";
import { useDeleteSingleReviewData } from "../../hooks/useReviews";
import Comment from "./Comment";
import UpdateCommentForm from "./UpdateCommentForm";

export default function CommentItem({ comment, reviewId }) {
  const { mutate: deletePost } = useDeleteSingleReviewData();
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle ? (
        <Comment
          comment={comment}
          deletePost={deletePost}
          setToggle={setToggle}
        />
      ) : (
        <UpdateCommentForm
          comment={comment}
          review={reviewId}
          setToggle={setToggle}
        />
      )}
    </>
  );
}
