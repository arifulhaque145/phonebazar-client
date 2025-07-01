import image from "../../assets/avatar.png";

export default function TestimonialCard({ testimonial }) {
  const { name, email, message } = testimonial;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 py-8 border border-gray-100">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt="Client"
          className="w-16 h-16 rounded-full object-cover"
        />
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{email}</p>
      </div>

      <p className="mt-4 text-gray-700 text-center">“{message}”</p>

      <div className="mt-4 flex gap-1 text-yellow-400 justify-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.561-.954L10 0l2.952 5.956 6.561.954-4.757 4.635 1.122 6.545z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
