import { Button } from "antd";

const PackageCard = ({ package: pkg }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
    <div className="relative">
      <img src={pkg.image} alt={pkg.name} className="w-full h-40 object-cover" />
      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
        {pkg.duration}
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-base mb-2">{pkg.name}</h3>
      <p className="text-gray-600 text-sm mb-3">{pkg.includes}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-gray-400 line-through text-sm">₹{pkg.originalPrice}</span>
          <span className="text-blue-600 font-bold text-lg ml-2">₹{pkg.price}</span>
        </div>
        <Button type="primary" size="small">Book Now</Button>
      </div>
    </div>
  </div>
);

export default PackageCard;
