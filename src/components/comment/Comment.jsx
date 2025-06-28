import { FaStar } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import avatar from "../../assets/avatar.png";

export default function Comment({ comment, deletePost, setToggle }) {
  return (
    <div className="flex items-center gap-4 p-4 shadow-sm mb-4 border border-white rounded-md bg-white">
      {/* Profile Image */}
      <img
        src={avatar}
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Comment Content */}
      <div className="flex-1">
        {/* Rating Stars */}
        <div className="flex text-yellow-400 mb-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < comment.rating ? "" : "text-gray-300"}
            />
          ))}
        </div>

        {/* Comment Text */}
        <p className="text-gray-800">{comment.comment}</p>
      </div>
      <div className="flex">
        <MdEdit
          onClick={() => setToggle(false)}
          className="text-xl mr-1 text-slate-500 hover:underline mt-2 cursor-pointer hover:scale-125 hover:duration-300"
        />
        <MdDelete
          onClick={() => deletePost(comment._id)}
          className="text-xl text-red-500 hover:underline mt-2 cursor-pointer hover:scale-125 hover:duration-300"
        />
      </div>
    </div>
  );
}
