import { useParams } from "react-router-dom";
import CommentForm from "../components/comment/CommentForm";
import CommentList from "../components/comment/CommentList";
import PhoneCard from "../components/phone/PhoneCard";
import { useSingleProductData } from "../hooks/useProducts";
import { useSingleReviewData } from "../hooks/useReviews";

export default function ProductDetails() {
  const { id } = useParams();
  const { data: productData, isLoading } = useSingleProductData(id);
  const { data: reviews } = useSingleReviewData(id);

  if (isLoading) return <p className="my-2">Loading...</p>;

  return (
    <div className="min-h-screen mx-auto">
      <PhoneCard phone={productData} review={reviews} />
      <div>
        <h3 className="text-xl font-semibold my-4">Write a Review</h3>
        <CommentForm productId={productData?._id} />
        <hr className="border-t-2 border-gray-500 my-4" />
        {reviews?.length !== 0 && (
          <h3 className="text-xl font-semibold my-4">
            Total Reviews: {reviews?.length}
          </h3>
        )}
        <CommentList reviews={reviews} />
      </div>
    </div>
  );
}
