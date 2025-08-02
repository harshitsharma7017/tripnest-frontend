import { Button } from "antd";

const DealCard = ({ deal }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
    <div className="relative">
      <img src={deal.image} alt={deal.title} className="w-full h-32 object-cover" />
      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
        {deal.discount}
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-sm mb-1">{deal.title}</h3>
      <p className="text-xs text-gray-600 mb-2">{deal.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-bold text-sm">From ₹{deal.price}</span>
        <Button type="primary" size="small">Book Now</Button>
      </div>
    </div>
  </div>
);

export default DealCard;