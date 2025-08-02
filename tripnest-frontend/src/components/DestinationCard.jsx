import { Button } from "antd";

const DestinationCard = ({ destination }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer">
    <div className="relative">
      <img src={destination.image} alt={destination.name} className="w-full h-40 object-cover" />
      <div className="absolute bottom-3 left-3 text-white">
        <h3 className="font-bold text-lg">{destination.name}</h3>
        <p className="text-sm opacity-90">{destination.country}</p>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-600 text-sm mb-2">{destination.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-semibold">Starting ₹{destination.startingPrice}</span>
        <Button type="link" size="small">Explore →</Button>
      </div>
    </div>
  </div>
);

export default DestinationCard;
