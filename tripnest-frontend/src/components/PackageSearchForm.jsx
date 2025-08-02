import { useState } from "react";
import { Button, Row, Col, Select, DatePicker, InputNumber } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { packageDestinations } from "../mockData";

const { Option } = Select;

const PackageSearchForm = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    destination: '',
    startDate: null,
    days: 3,
    travelers: 2
  });

  const handleSearch = () => {
    if (searchData.destination) {
      onSearch('packages', searchData);
    }
  };

  return (
    <Row gutter={[16, 16]} className="mb-4">
      <Col xs={24} sm={12} md={6}>
        <Select 
          placeholder="Destination" 
          size="large" 
          className="w-full" 
          showSearch
          value={searchData.destination}
          onChange={(value) => setSearchData({...searchData, destination: value})}
        >
          {packageDestinations.map(dest => (
            <Option key={dest.code} value={dest.code}>{dest.name}</Option>
          ))}
        </Select>
      </Col>
      
      <Col xs={24} sm={12} md={4}>
        <DatePicker 
          size="large" 
          className="w-full" 
          placeholder="Start Date"
          onChange={(date) => setSearchData({...searchData, startDate: date})}
        />
      </Col>
      
      <Col xs={24} sm={12} md={4}>
        <InputNumber
          placeholder="Days"
          size="large"
          className="w-full"
          min={1}
          max={30}
          value={searchData.days}
          onChange={(value) => setSearchData({...searchData, days: value})}
        />
      </Col>
      
      <Col xs={24} sm={12} md={4}>
        <InputNumber
          placeholder="Travelers"
          size="large"
          className="w-full"
          min={1}
          max={10}
          value={searchData.travelers}
          onChange={(value) => setSearchData({...searchData, travelers: value})}
        />
      </Col>
      
      <Col xs={24} sm={12} md={6}>
        <Button 
          type="primary" 
          size="large" 
          icon={<SearchOutlined />} 
          className="w-full"
          onClick={handleSearch}
        >
          Search Packages
        </Button>
      </Col>
    </Row>
  );
};

export default PackageSearchForm;
