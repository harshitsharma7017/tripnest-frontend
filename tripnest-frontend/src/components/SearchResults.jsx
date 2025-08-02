import { Button, Row, Col, Card, Typography, Tag, Rate } from "antd";
import { CloseOutlined, ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { getSearchResults } from "../mockData";

const { Title, Text } = Typography;

const SearchResults = ({ searchType, searchData, onClose }) => {
  const results = getSearchResults(searchType, searchData);

  const renderFlightResult = (flight) => (
    <Card key={flight.id} className="mb-4 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <div className="text-center">
              <div className="font-semibold">{flight.departureTime}</div>
              <div className="text-sm text-gray-500">{getCityName(flight.from)}</div>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <div className="text-xs">{flight.duration}</div>
              <div className="w-12 h-px bg-gray-300 my-1"></div>
              <div className="text-xs">{flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{flight.arrivalTime}</div>
              <div className="text-sm text-gray-500">{getCityName(flight.to)}</div>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            {flight.airline} • {flight.aircraft}
          </div>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <div className="text-2xl font-bold text-blue-600">₹{flight.price}</div>
          <div className="text-sm text-gray-500">per person</div>
          <Button type="primary" className="mt-2">Book Now</Button>
        </div>
      </div>
    </Card>
  );

  const renderHotelResult = (hotel) => (
    <Card key={hotel.id} className="mb-4 hover:shadow-lg transition-shadow">
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover rounded" />
        </Col>
        <Col xs={24} md={16}>
          <div className="h-full flex flex-col justify-between">
            <div>
              <Title level={4} className="mb-2">{hotel.name}</Title>
              <div className="flex items-center gap-2 mb-2">
                <Rate disabled defaultValue={hotel.rating} className="text-sm" />
                <span className="text-sm text-gray-500">({hotel.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1 mb-2 text-gray-600">
                <EnvironmentOutlined />
                <span className="text-sm">{hotel.location}</span>
              </div>
              <div className="text-sm text-gray-600 mb-3">{hotel.amenities.join(', ')}</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-green-600">₹{hotel.price}</div>
                <div className="text-sm text-gray-500">per night</div>
              </div>
              <Button type="primary">Book Now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );

  const renderTrainResult = (train) => (
    <Card key={train.id} className="mb-4 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-1">
          <div className="flex items-center gap-6 mb-2">
            <div>
              <div className="font-semibold text-lg">{train.trainName}</div>
              <div className="text-sm text-gray-500">{train.trainNumber}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="font-semibold">{train.departureTime}</div>
                <div className="text-sm text-gray-500">{train.fromStation}</div>
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <ClockCircleOutlined />
                <div className="text-xs">{train.duration}</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">{train.arrivalTime}</div>
                <div className="text-sm text-gray-500">{train.toStation}</div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {train.availableClasses.map(cls => (
              <Tag key={cls.class} color={cls.available ? 'green' : 'red'}>
                {cls.class}: ₹{cls.price}
              </Tag>
            ))}
          </div>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <Button type="primary">Book Now</Button>
        </div>
      </div>
    </Card>
  );

  const renderBusResult = (bus) => (
    <Card key={bus.id} className="mb-4 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-1">
          <div className="flex items-center gap-6 mb-2">
            <div>
              <div className="font-semibold text-lg">{bus.operatorName}</div>
              <div className="text-sm text-gray-500">{bus.busType}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="font-semibold">{bus.departureTime}</div>
                <div className="text-sm text-gray-500">{bus.from}</div>
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <ClockCircleOutlined />
                <div className="text-xs">{bus.duration}</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">{bus.arrivalTime}</div>
                <div className="text-sm text-gray-500">{bus.to}</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            {bus.amenities.join(' • ')}
          </div>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <div className="text-2xl font-bold text-blue-600">₹{bus.price}</div>
          <div className="text-sm text-gray-500">{bus.seatsAvailable} seats left</div>
          <Button type="primary" className="mt-2">Book Now</Button>
        </div>
      </div>
    </Card>
  );

  const renderPackageResult = (pkg) => (
    <Card key={pkg.id} className="mb-4 hover:shadow-lg transition-shadow">
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover rounded" />
        </Col>
        <Col xs={24} md={16}>
          <div className="h-full flex flex-col justify-between">
            <div>
              <Title level={4} className="mb-2">{pkg.name}</Title>
              <div className="text-sm text-gray-600 mb-2">{pkg.duration} • {pkg.destinations.join(', ')}</div>
              <div className="text-sm text-gray-600 mb-3">
                <strong>Includes:</strong> {pkg.includes.join(', ')}
              </div>
              <Rate disabled defaultValue={pkg.rating} className="text-sm" />
              <span className="text-sm text-gray-500 ml-2">({pkg.reviews} reviews)</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-green-600">₹{pkg.price}</div>
                <div className="text-sm text-gray-500">for {pkg.duration}</div>
              </div>
              <Button type="primary">Book Now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );

  const renderResults = () => {
    switch (searchType) {
      case 'flights':
        return results.map(renderFlightResult);
      case 'hotels':
        return results.map(renderHotelResult);
      case 'trains':
        return results.map(renderTrainResult);
      case 'buses':
        return results.map(renderBusResult);
      case 'packages':
        return results.map(renderPackageResult);
      default:
        return <div>No results found</div>;
    }
  };

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Title level={2} className="mb-2">
              {searchType.charAt(0).toUpperCase() + searchType.slice(1)} Results
            </Title>
            <Text className="text-gray-600">
              Found {results.length} results for your search
            </Text>
          </div>
          <Button 
            icon={<CloseOutlined />} 
            onClick={onClose}
            className="flex items-center gap-2"
          >
            Back to Home
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {renderResults()}
        </div>
        
        {results.length === 0 && (
          <div className="text-center py-12">
            <Title level={3} className="text-gray-400">No results found</Title>
            <Text className="text-gray-500">Try adjusting your search criteria</Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
