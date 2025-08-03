import React from 'react';
import { Card, Form, Select, DatePicker, Button, Row, Col, InputNumber, Checkbox } from 'antd';
import { Train, ArrowLeftRight } from 'lucide-react';

const { Option } = Select;

const TrainBooking = () => {
  const [form] = Form.useForm();

  const majorStations = [
    { code: 'NDLS', name: 'New Delhi', city: 'Delhi' },
    { code: 'CSMT', name: 'Mumbai CST', city: 'Mumbai' },
    { code: 'SBC', name: 'Bangalore City', city: 'Bangalore' },
    { code: 'MAS', name: 'Chennai Central', city: 'Chennai' },
    { code: 'HWH', name: 'Howrah Junction', city: 'Kolkata' },
    { code: 'SC', name: 'Secunderabad', city: 'Hyderabad' },
    { code: 'PUNE', name: 'Pune Junction', city: 'Pune' },
    { code: 'JP', name: 'Jaipur Junction', city: 'Jaipur' },
    { code: 'ADI', name: 'Ahmedabad', city: 'Ahmedabad' },
    { code: 'LKO', name: 'Lucknow', city: 'Lucknow' }
  ];

  const classes = [
    { value: '1A', label: 'First AC (1A)' },
    { value: '2A', label: 'Second AC (2A)' },
    { value: '3A', label: 'Third AC (3A)' },
    { value: 'SL', label: 'Sleeper (SL)' },
    { value: 'CC', label: 'Chair Car (CC)' },
    { value: 'EC', label: 'Executive Chair Car (EC)' },
    { value: '2S', label: 'Second Sitting (2S)' }
  ];

  const quotas = [
    { value: 'GN', label: 'General' },
    { value: 'TQ', label: 'Tatkal' },
    { value: 'PT', label: 'Premium Tatkal' },
    { value: 'LD', label: 'Ladies' },
    { value: 'SS', label: 'Senior Citizen' },
    { value: 'HP', label: 'Handicapped' }
  ];

  const handleSearch = (values) => {
    console.log('Train search:', values);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <div className="flex items-center mb-4">
        <Train className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-lg font-semibold">Book Train Tickets</h3>
      </div>
      
      <Form form={form} onFinish={handleSearch} layout="vertical">
        <Row gutter={16}>
          {/* From */}
          <Col xs={24} md={10}>
            <Form.Item
              label="From"
              name="from"
              rules={[{ required: true, message: 'Please select departure station' }]}
            >
              <Select
                placeholder="Select departure station"
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {majorStations.map(station => (
                  <Option key={station.code} value={station.code}>
                    {station.name} ({station.code}) - {station.city}
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
              onClick={() => {
                const from = form.getFieldValue('from');
                const to = form.getFieldValue('to');
                form.setFieldsValue({ from: to, to: from });
              }}
            />
          </Col>

          {/* To */}
          <Col xs={24} md={10}>
            <Form.Item
              label="To"
              name="to"
              rules={[{ required: true, message: 'Please select destination station' }]}
            >
              <Select
                placeholder="Select destination station"
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {majorStations.map(station => (
                  <Option key={station.code} value={station.code}>
                    {station.name} ({station.code}) - {station.city}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Date */}
          <Col xs={24} md={3}>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: 'Please select date' }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Class */}
          <Col xs={24} md={8}>
            <Form.Item
              label="Class"
              name="class"
              rules={[{ required: true, message: 'Please select class' }]}
            >
              <Select placeholder="Select class">
                {classes.map(cls => (
                  <Option key={cls.value} value={cls.value}>
                    {cls.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Quota */}
          <Col xs={24} md={8}>
            <Form.Item
              label="Quota"
              name="quota"
              initialValue="GN"
            >
              <Select>
                {quotas.map(quota => (
                  <Option key={quota.value} value={quota.value}>
                    {quota.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Passengers */}
          <Col xs={24} md={8}>
            <Form.Item
              label="Passengers"
              name="passengers"
              initialValue={1}
            >
              <InputNumber min={1} max={6} className="w-full" />
            </Form.Item>
          </Col>
        </Row>

        {/* Additional Options */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Train Type"
              name="trainType"
            >
              <Select placeholder="Select train type (optional)">
                <Option value="rajdhani">Rajdhani Express</Option>
                <Option value="shatabdi">Shatabdi Express</Option>
                <Option value="duronto">Duronto Express</Option>
                <Option value="superfast">Superfast</Option>
                <Option value="express">Express</Option>
                <Option value="passenger">Passenger</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Departure Time"
              name="departureTime"
            >
              <Select placeholder="Select departure time">
                <Option value="00:00-06:00">Night (12 AM - 6 AM)</Option>
                <Option value="06:00-12:00">Morning (6 AM - 12 PM)</Option>
                <Option value="12:00-18:00">Afternoon (12 PM - 6 PM)</Option>
                <Option value="18:00-24:00">Evening (6 PM - 12 AM)</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Preferences */}
        <Row>
          <Col span={24}>
            <Form.Item name="preferences">
              <Checkbox.Group>
                <Row>
                  <Col xs={24} md={8}>
                    <Checkbox value="flexible-dates">Flexible with dates</Checkbox>
                  </Col>
                  <Col xs={24} md={8}>
                    <Checkbox value="book-now-pay-later">Book now, pay later</Checkbox>
                  </Col>
                  <Col xs={24} md={8}>
                    <Checkbox value="person-with-disability">Person with disability concession</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
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
              Search Trains
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default TrainBooking;