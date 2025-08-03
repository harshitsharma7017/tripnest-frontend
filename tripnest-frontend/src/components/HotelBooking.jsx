import React from 'react';
import { Card, Form, Input, DatePicker, Select, Button, Row, Col, InputNumber } from 'antd';
import { Building2, MapPin } from 'lucide-react';

const { Option } = Select;
const { RangePicker } = DatePicker;

const HotelBooking = () => {
  const [form] = Form.useForm();

  const popularDestinations = [
    { value: 'goa', label: 'Goa' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'himachal', label: 'Himachal Pradesh' },
    { value: 'uttarakhand', label: 'Uttarakhand' },
    { value: 'kashmir', label: 'Kashmir' }
  ];

  const handleSearch = (values) => {
    console.log('Hotel search:', values);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <div className="flex items-center mb-4">
        <Building2 className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-lg font-semibold">Book Hotels</h3>
      </div>
      
      <Form form={form} onFinish={handleSearch} layout="vertical">
        <Row gutter={16}>
          {/* Destination */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Destination"
              name="destination"
              rules={[{ required: true, message: 'Please enter destination' }]}
            >
              <Select
                placeholder="Enter city or hotel name"
                showSearch
                optionFilterProp="children"
                suffixIcon={<MapPin className="h-4 w-4" />}
              >
                {popularDestinations.map(dest => (
                  <Option key={dest.value} value={dest.value}>
                    {dest.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Check-in & Check-out */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Check-in & Check-out"
              name="dates"
              rules={[{ required: true, message: 'Please select dates' }]}
            >
              <RangePicker className="w-full" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Rooms */}
          <Col xs={24} md={6}>
            <Form.Item
              label="Rooms"
              name="rooms"
              initialValue={1}
            >
              <InputNumber min={1} max={10} className="w-full" />
            </Form.Item>
          </Col>

          {/* Adults */}
          <Col xs={24} md={6}>
            <Form.Item
              label="Adults"
              name="adults"
              initialValue={2}
            >
              <InputNumber min={1} max={20} className="w-full" />
            </Form.Item>
          </Col>

          {/* Children */}
          <Col xs={24} md={6}>
            <Form.Item
              label="Children"
              name="children"
              initialValue={0}
            >
              <InputNumber min={0} max={10} className="w-full" />
            </Form.Item>
          </Col>

          {/* Star Rating */}
          <Col xs={24} md={6}>
            <Form.Item
              label="Star Rating"
              name="starRating"
            >
              <Select placeholder="Any">
                <Option value="5">5 Star</Option>
                <Option value="4">4 Star & Above</Option>
                <Option value="3">3 Star & Above</Option>
                <Option value="2">2 Star & Above</Option>
                <Option value="any">Any Rating</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Price Range */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Price Range (per night)"
              name="priceRange"
            >
              <Select placeholder="Select budget">
                <Option value="budget">₹0 - ₹2,000 (Budget)</Option>
                <Option value="mid">₹2,000 - ₹5,000 (Mid-range)</Option>
                <Option value="premium">₹5,000 - ₹10,000 (Premium)</Option>
                <Option value="luxury">₹10,000+ (Luxury)</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Hotel Type */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Property Type"
              name="propertyType"
            >
              <Select placeholder="Any type">
                <Option value="hotel">Hotel</Option>
                <Option value="resort">Resort</Option>
                <Option value="apartment">Apartment</Option>
                <Option value="villa">Villa</Option>
                <Option value="homestay">Homestay</Option>
                <Option value="hostel">Hostel</Option>
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
              Search Hotels
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default HotelBooking;