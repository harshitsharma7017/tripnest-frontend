import { useState } from "react";
import { Button, Row, Col, Select, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { cities } from "../mockData";

const { RangePicker } = DatePicker;
const { Option } = Select;

const HotelSearchForm = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: null,
    checkOut: null,
    guests: '2'
  });

  const handleSearch = () => {
    if (searchData.destination) {
      onSearch('hotels', searchData);
    }
  };

  return (
    <Row gutter={[16, 16]} className="mb-4">
      <Col xs={24} sm={12} md={8}>
        <Select
          placeholder="Enter city or hotel name"
          size="large"
          className="w-full"
          showSearch
          value={searchData.destination}
          onChange={(value) => setSearchData({...searchData, destination: value})}
        >
          {cities.map(city => (
            <Option key={city.code} value={city.name}>{city.name}</Option>
          ))}
        </Select>
      </Col>
      
      <Col xs={24} sm={12} md={8}>
        <RangePicker 
          size="large" 
          className="w-full" 
          placeholder={['Check-in', 'Check-out']}
          onChange={(dates) => setSearchData({
            ...searchData, 
            checkIn: dates?.[0], 
            checkOut: dates?.[1]
          })}
        />
      </Col>
      
      <Col xs={24} sm={12} md={4}>
        <Select 
          placeholder="Guests" 
          size="large" 
          className="w-full"
          value={searchData.guests}
          onChange={(value) => setSearchData({...searchData, guests: value})}
        >
          <Option value="1">1 Guest</Option>
          <Option value="2">2 Guests</Option>
          <Option value="3">3 Guests</Option>
          <Option value="4">4 Guests</Option>
        </Select>
      </Col>
      
      <Col xs={24} sm={12} md={4}>
        <Button 
          type="primary" 
          size="large" 
          icon={<SearchOutlined />} 
          className="w-full"
          onClick={handleSearch}
        >
          Search Hotels
        </Button>
      </Col>
    </Row>
  );
};

export default HotelSearchForm;
