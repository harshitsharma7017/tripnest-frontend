import { useState } from "react";
import FlightSearchForm from "./FlightSearchForm";
import HotelSearchForm from "./HotelSearchForm";
import TrainSearchForm from "./TrainSearchForm";
import BusSearchForm from "./BusSearchForm";
import PackageSearchForm from "./PackageSearchForm";

const HeroSection = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("roundtrip");

  const tabs = [
    { key: 'flights', label: '✈️ Flights', icon: '✈️' },
    { key: 'hotels', label: '🏨 Hotels', icon: '🏨' },
    { key: 'trains', label: '🚆 Trains', icon: '🚆' },
    { key: 'buses', label: '🚌 Buses', icon: '🚌' },
    { key: 'packages', label: '🏖️ Packages', icon: '🏖️' }
  ];

  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ 
        backgroundImage: "url('/hero.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-white mb-4 text-3xl md:text-5xl font-bold leading-tight">
            Where Do You Want To Go?
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            Find the best deals on flights, hotels, and holiday packages
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          {/* Travel Type Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Forms */}
          {activeTab === 'flights' && (
            <FlightSearchForm 
              tripType={tripType} 
              setTripType={setTripType} 
              onSearch={onSearch}
            />
          )}
          {activeTab === 'hotels' && <HotelSearchForm onSearch={onSearch} />}
          {activeTab === 'trains' && <TrainSearchForm onSearch={onSearch} />}
          {activeTab === 'buses' && <BusSearchForm onSearch={onSearch} />}
          {activeTab === 'packages' && <PackageSearchForm onSearch={onSearch} />}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
