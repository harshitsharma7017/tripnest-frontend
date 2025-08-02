import { Avatar } from "antd";

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 h-full">
    <div className="flex items-center mb-4">
      <Avatar size={48} src={review.avatar} />
      <div className="ml-3">
        <h4 className="font-semibold text-gray-800">{review.name}</h4>
        <div className="text-yellow-400">
          {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
        </div>
      </div>
    </div>
    <p className="text-gray-600 text-sm italic">"{review.comment}"</p>
    <p className="text-xs text-gray-400 mt-2">{review.tripType}</p>
  </div>
);

export default ReviewCard;