import { useState } from "react";
import { Button, Row, Col, Select, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { trainStations } from "../mockData";

const { Option } = Select;

const TrainSearchForm = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    travelDate: null,
    class: ''
  });

  const handleSearch = () => {
    if (searchData.from && searchData.to) {
      onSearch('trains', searchData);
    }
  };

  return (
    <Row gutter={[16, 16]} className="mb-4">
      <Col xs={24} sm={12} md={6}>
        <Select 
          placeholder="From Station" 
          size="large" 
          className="w-full" 
          showSearch
          value={searchData.from}
          onChange={(value) => setSearchData({...searchData, from: value})}
        >
          {trainStations.map(station => (
            <Option key={station.code} value={station.code}>{station.name}</Option>
          ))}
        </Select>
      </Col>
      
      <Col xs={24} sm={12} md={6}>
        <Select 
          placeholder="To Station" 
          size="large" 
          className="w-full" 
          showSearch
          value={searchData.to}
          onChange={(value) => setSearchData({...searchData, to: value})}
        >
          {trainStations.map(station => (
            <Option key={station.code} value={station.code}>{station.name}</Option>
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
        <Select 
          placeholder="Class" 
          size="large" 
          className="w-full"
          value={searchData.class}
          onChange={(value) => setSearchData({...searchData, class: value})}
        >
          <Option value="sleeper">Sleeper</Option>
          <Option value="3ac">3 AC</Option>
          <Option value="2ac">2 AC</Option>
          <Option value="1ac">1 AC</Option>
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
          Search Trains
        </Button>
      </Col>
    </Row>
  );
};

export default TrainSearchForm;
