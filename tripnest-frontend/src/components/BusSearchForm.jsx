import { useState } from "react";
import { Button, Row, Col, Select, DatePicker, InputNumber } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { cities } from "../mockData";

const { Option } = Select;

const BusSearchForm = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    travelDate: null,
    passengers: 1
  });

  const handleSearch = () => {
    if (searchData.from && searchData.to) {
      onSearch('buses', searchData);
    }
  };

  return (
    <Row gutter={[16, 16]} className="mb-4">
      <Col xs={24} sm={12} md={6}>
        <Select 
          placeholder="From City" 
          size="large" 
          className="w-full" 
          showSearch
          value={searchData.from}
          onChange={(value) => setSearchData({...searchData, from: value})}
        >
          {cities.map(city => (
            <Option key={city.code} value={city.name}>{city.name}</Option>
          ))}
        </Select>
      </Col>
      
      <Col xs={24} sm={12} md={6}>
        <Select 
          placeholder="To City" 
          size="large" 
          className="w-full" 
          showSearch
          value={searchData.to}
          onChange={(value) => setSearchData({...searchData, to: value})}
        >
          {cities.map(city => (
            <Option key={city.code} value={city.name}>{city.name}</Option>
          ))}
        </Select>
      </Col>
      
      <Col xs={24} sm={12} md={4}>
        <DatePicker 
          size="large" 
          className="w-full" 
          placeholder="Travel Date"
          onChange={(date) => setSearchData({...searchData, travelDate: date})}
        />
      </Col>
      
      <Col xs={24} sm={12} md={4}>
        <InputNumber
          placeholder="Passengers"
          size="large"
          className="w-full"
          min={1}
          max={9}
          value={searchData.passengers}
          onChange={(value) => setSearchData({...searchData, passengers: value})}
        />
      </Col>
      
      <Col xs={24} sm={12} md={4}>
        <Button 
          type="primary" 
          size="large" 
          icon={<SearchOutlined />} 
          className="w-full"
          onClick={handleSearch}
        >
          Search Buses
        </Button>
      </Col>
    </Row>
  );
};

export default BusSearchForm;
