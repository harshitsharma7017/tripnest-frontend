import { useState } from "react";
import { Search, MapPin, Plane, Clock } from "lucide-react";

// Mock cities data
const cities = [
  { code: 'NYC', name: 'New York' },
  { code: 'LAX', name: 'Los Angeles' },
  { code: 'CHI', name: 'Chicago' },
  { code: 'MIA', name: 'Miami' },
  { code: 'SFO', name: 'San Francisco' },
  { code: 'LAS', name: 'Las Vegas' },
  { code: 'SEA', name: 'Seattle' },
  { code: 'DEN', name: 'Denver' }
];

// Mock flight data
const generateFlights = (from, to, departureDate, returnDate) => {
  const airlines = ['American Airlines', 'Delta', 'United', 'Southwest', 'JetBlue'];
  const fromCity = cities.find(c => c.code === from)?.name || from;
  const toCity = cities.find(c => c.code === to)?.name || to;
  
  const flights = [];
  
  // Generate 3-5 random flights
  for (let i = 0; i < Math.floor(Math.random() * 3) + 3; i++) {
    const airline = airlines[Math.floor(Math.random() * airlines.length)];
    const basePrice = Math.floor(Math.random() * 500) + 200;
    const departTime = `${Math.floor(Math.random() * 12) + 6}:${Math.random() < 0.5 ? '00' : '30'} ${Math.random() < 0.5 ? 'AM' : 'PM'}`;
    const arriveTime = `${Math.floor(Math.random() * 12) + 6}:${Math.random() < 0.5 ? '00' : '30'} ${Math.random() < 0.5 ? 'AM' : 'PM'}`;
    const duration = `${Math.floor(Math.random() * 6) + 2}h ${Math.floor(Math.random() * 60)}m`;
    const stops = Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 2) + 1;
    
    flights.push({
      id: `FL${Math.random().toString(36).substr(2, 9)}`,
      airline,
      from: fromCity,
      to: toCity,
      fromCode: from,
      toCode: to,
      departureTime: departTime,
      arrivalTime: arriveTime,
      duration,
      stops,
      price: basePrice,
      departureDate: departureDate,
      returnDate: returnDate
    });
  }
  
  return flights.sort((a, b) => a.price - b.price);
};

const FlightCard = ({ flight }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 mb-4">
    <div className="p-6">
      {/* Airline Name */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-600">{flight.airline}</h3>
      </div>
      
      {/* Flight Details */}
      <div className="space-y-4 mb-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Departure */}
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{flight.departureTime}</div>
              <div className="text-sm text-gray-600 mt-1">{flight.fromCode}</div>
              <div className="text-xs text-gray-500">{flight.from}</div>
            </div>
            
            {/* Flight Path */}
            <div className="flex flex-col items-center text-gray-500 min-w-[120px]">
              <div className="text-sm font-medium mb-2">{flight.duration}</div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1 h-0.5 bg-gray-300 min-w-[60px]"></div>
                <Plane className="w-4 h-4 text-blue-500" />
                <div className="flex-1 h-0.5 bg-gray-300 min-w-[60px]"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div className="text-xs mt-2">
                {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
              </div>
            </div>
            
            {/* Arrival */}
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{flight.arrivalTime}</div>
              <div className="text-sm text-gray-600 mt-1">{flight.toCode}</div>
              <div className="text-xs text-gray-500">{flight.to}</div>
            </div>
          </div>
          
          {/* Price and Button */}
          <div className="text-right ml-8">
            <div className="text-3xl font-bold text-green-600 mb-3">${flight.price}</div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Select Flight
            </button>
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          <div className="flex justify-between items-start">
            <div className="text-center flex-1">
              <div className="text-xl font-bold text-gray-900">{flight.departureTime}</div>
              <div className="text-sm text-gray-600">{flight.fromCode}</div>
            </div>
            
            <div className="flex flex-col items-center flex-1 px-4">
              <div className="text-sm font-medium text-gray-600 mb-1">{flight.duration}</div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1 h-0.5 bg-gray-300 min-w-[40px]"></div>
                <Plane className="w-3 h-3 text-blue-500" />
                <div className="flex-1 h-0.5 bg-gray-300 min-w-[40px]"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
              </div>
            </div>
            
            <div className="text-center flex-1">
              <div className="text-xl font-bold text-gray-900">{flight.arrivalTime}</div>
              <div className="text-sm text-gray-600">{flight.toCode}</div>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <div className="text-2xl font-bold text-green-600">${flight.price}</div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Select Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FlightSearchForm = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    travelers: '1-economy'
  });

  const handleSearch = () => {
    if (searchData.from && searchData.to && searchData.departureDate) {
      setIsLoading(true);
      setHasSearched(true);
      
      // Simulate API call delay
      setTimeout(() => {
        const flights = generateFlights(
          searchData.from, 
          searchData.to, 
          searchData.departureDate,
          searchData.returnDate
        );
        setSearchResults(flights);
        setIsLoading(false);
      }, 1000);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const isSearchDisabled = !searchData.from || !searchData.to || !searchData.departureDate;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Search Flights</h1>
            
            {/* Trip Type Selection */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-6">
                {[
                  { value: 'oneway', label: 'One Way' },
                  { value: 'roundtrip', label: 'Round Trip' },
                  { value: 'multicity', label: 'Multi City' }
                ].map((type) => (
                  <label key={type.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      value={type.value}
                      checked={tripType === type.value}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700 font-medium">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Search Fields */}
            <div className="space-y-6">
              {/* From and To */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={searchData.from}
                      onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                      <option value="">Select departure city</option>
                      {cities.map(city => (
                        <option key={city.code} value={city.code}>
                          {city.name} ({city.code})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={searchData.to}
                      onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                      <option value="">Select destination</option>
                      {cities.map(city => (
                        <option key={city.code} value={city.code}>
                          {city.name} ({city.code})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Dates and Travelers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Departure Date</label>
                  <input
                    type="date"
                    value={searchData.departureDate}
                    onChange={(e) => setSearchData({...searchData, departureDate: e.target.value})}
                    className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                {tripType === 'roundtrip' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Return Date</label>
                    <input
                      type="date"
                      value={searchData.returnDate}
                      onChange={(e) => setSearchData({...searchData, returnDate: e.target.value})}
                      className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Travelers & Class</label>
                  <select
                    value={searchData.travelers}
                    onChange={(e) => setSearchData({...searchData, travelers: e.target.value})}
                    className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="1-economy">1 Adult, Economy</option>
                    <option value="2-economy">2 Adults, Economy</option>
                    <option value="1-business">1 Adult, Business</option>
                    <option value="2-business">2 Adults, Business</option>
                  </select>
                </div>
              </div>
              
              {/* Search Button */}
              <div className="pt-4">
                <button 
                  onClick={handleSearch}
                  disabled={isSearchDisabled || isLoading}
                  className={`flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 ${
                    isSearchDisabled || isLoading
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transform hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <Clock className="w-5 h-5 animate-spin" />
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                  {isLoading ? 'Searching Flights...' : 'Search Flights'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {hasSearched && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
                  {isLoading ? 'Searching flights...' : `Found ${searchResults.length} flights`}
                </h2>
                {!isLoading && searchResults.length > 0 && (
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {searchData.from} → {searchData.to} • {formatDate(searchData.departureDate)}
                  </div>
                )}
              </div>
              
              {isLoading ? (
                <div className="text-center py-16">
                  <Clock className="w-16 h-16 text-blue-500 mx-auto mb-6 animate-spin" />
                  <p className="text-xl text-gray-600">Finding the best flights for you...</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-4">
                  {searchResults.map((flight) => (
                    <FlightCard key={flight.id} flight={flight} />
                  ))}
                </div>
              ) : hasSearched && !isLoading ? (
                <div className="text-center py-16">
                  <Plane className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <p className="text-xl text-gray-600">No flights found. Try different dates or destinations.</p>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightSearchForm;