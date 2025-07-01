export default function PhoneCard({ phone, review }) {
  const totalRating = review?.reduce(
    (total, reviewId) => parseInt(reviewId.rating) + total,
    0
  );
  const average = review?.length ? (totalRating / review.length).toFixed(1) : 0;

  return (
    <div className="card lg:card-side bg-white shadow-xl">
      <figure className="p-4 h-96">
        <img className="p-4" src={phone.image} alt="Phone" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black text-2xl font-bold">
          {phone.model}
        </h2>
        <p className="text-gray-600">{phone.desc}</p>
        <ul className="list-disc ml-4 text-gray-700 text-sm">
          <li>Display: 6.8" AMOLED, 120Hz</li>
          <li>Camera: 200MP + 50MP + 12MP + 10MP</li>
          <li>Battery: 5000mAh</li>
          <li>Processor: Snapdragon 8 Gen 2</li>
        </ul>
        <div className="text-lg font-bold text-primary mt-4">
          ${phone.price}
        </div>
        <div className="flex items-center">
          <div className="rating">
            {[...Array(5)].map((_, star) => (
              <input
                key={star}
                type="radio"
                name={`static-rating-${phone.id || phone.model}`}
                className="mask mask-star-2 bg-orange-400"
                checked={star < Math.round(average)}
                disabled
                readOnly
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">
            ({parseInt(average)} / 5 based on {review?.length} reviews)
          </span>
        </div>
      </div>
    </div>
  );
}
