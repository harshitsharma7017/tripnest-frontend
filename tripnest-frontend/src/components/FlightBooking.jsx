import React, { useState } from 'react';
import { Card, Form, Input, DatePicker, Select, Button, Row, Col, Radio, InputNumber } from 'antd';
import { Plane, ArrowLeftRight } from 'lucide-react';

const { Option } = Select;
const { RangePicker } = DatePicker;

const FlightBooking = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [form] = Form.useForm();

  const popularCities = [
    { value: 'delhi', label: 'Delhi (DEL)' },
    { value: 'mumbai', label: 'Mumbai (BOM)' },
    { value: 'bangalore', label: 'Bangalore (BLR)' },
    { value: 'kolkata', label: 'Kolkata (CCU)' },
    { value: 'chennai', label: 'Chennai (MAA)' },
    { value: 'hyderabad', label: 'Hyderabad (HYD)' }
  ];

  const handleSearch = (values) => {
    console.log('Flight search:', values);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <div className="flex items-center mb-4">
        <Plane className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-lg font-semibold">Book Flights</h3>
      </div>
      
      <Form form={form} onFinish={handleSearch} layout="vertical">
        {/* Trip Type */}
        <Row className="mb-4">
          <Col span={24}>
            <Radio.Group 
              value={tripType} 
              onChange={(e) => setTripType(e.target.value)}
            >
              <Radio value="oneway">One Way</Radio>
              <Radio value="roundtrip">Round Trip</Radio>
              <Radio value="multicity">Multi City</Radio>
            </Radio.Group>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* From */}
          <Col xs={24} md={8}>
            <Form.Item
              label="From"
              name="from"
              rules={[{ required: true, message: 'Please select departure city' }]}
            >
              <Select 
                placeholder="Select departure city"
                showSearch
                optionFilterProp="children"
              >
                {popularCities.map(city => (
                  <Option key={city.value} value={city.value}>
                    {city.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Swap Button */}
          <Col xs={24} md={1} className="flex items-center justify-center">
            <Button 
              type="text" 
              icon={<ArrowLeftRight className="h-4 w-4" />} 
              className="mt-6"
            />
          </Col>

          {/* To */}
          <Col xs={24} md={7}>
            <Form.Item
              label="To"
              name="to"
              rules={[{ required: true, message: 'Please select destination city' }]}
            >
              <Select 
                placeholder="Select destination city"
                showSearch
                optionFilterProp="children"
              >
                {popularCities.map(city => (
                  <Option key={city.value} value={city.value}>
                    {city.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Dates */}
          <Col xs={24} md={8}>
            <Form.Item
              label="Dates"
              name="dates"
              rules={[{ required: true, message: 'Please select travel dates' }]}
            >
              {tripType === 'roundtrip' ? (
                <RangePicker className="w-full" />
              ) : (
                <DatePicker className="w-full" />
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Passengers */}
          <Col xs={24} md={8}>
            <Form.Item
              label="Adults"
              name="adults"
              initialValue={1}
            >
              <InputNumber min={1} max={9} className="w-full" />
            </Form.Item>
          </Col>

          <Col xs={24} md={8}>
            <Form.Item
              label="Children"
              name="children"
              initialValue={0}
            >
              <InputNumber min={0} max={9} className="w-full" />
            </Form.Item>
          </Col>

          {/* Class */}
          <Col xs={24} md={8}>
            <Form.Item
              label="Class"
              name="class"
              initialValue="economy"
            >
              <Select>
                <Option value="economy">Economy</Option>
                <Option value="premium-economy">Premium Economy</Option>
                <Option value="business">Business</Option>
                <Option value="first">First Class</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Search Button */}
        <Row>
          <Col span={24}>
            <Button 
              type="primary" 
              htmlType="submit" 
              size="large" 
              className="w-full md:w-auto"
            >
              Search Flights
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default FlightBooking;