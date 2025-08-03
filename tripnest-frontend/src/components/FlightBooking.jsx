import React, { useState } from 'react';
import { Card, Form, Input, DatePicker, Select, Button, Row, Col, Radio, InputNumber } from 'antd';
import { Plane, ArrowLeftRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs'
import { searchFlights } from '../store/slices/flightSlice';

const { Option } = Select;
const { RangePicker } = DatePicker;

const FlightBooking = ({ cities = [] }) => {
  const { flights } = useSelector(state => state.flight);
  const [tripType, setTripType] = useState('roundtrip');
  const [form] = Form.useForm();

  const dispatch = useDispatch();

const handleSearch = (values) => {
  const { from, to, dates } = values;

  // Format query
  const query = {
    from,
    to,
  };

  if (dates) {
    if (Array.isArray(dates)) {
      // Roundtrip
      query.startTime = dayjs(dates[0]).toISOString();
      query.endTime = dayjs(dates[1]).toISOString();
    } else {
      // Oneway
      query.startTime = dayjs(dates).toISOString();
    }
  }

  dispatch(searchFlights(query));
};


  console.log("Cities in state:", cities);

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <div className="flex items-center mb-4">
        <Plane className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-lg font-semibold">Book Flights</h3>
      </div>
      
      <Form form={form} onFinish={handleSearch} layout="vertical">
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
  {cities.length > 0 ? (
    cities.map(city => (
      <Option key={city._id} value={city.name}>
        {city.name} ({city.state})
      </Option>
    ))
  ) : (
    <Option disabled>No cities available</Option>
  )}
</Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={1} className="flex items-center justify-center">
            <Button 
              type="text" 
              icon={<ArrowLeftRight className="h-4 w-4" />} 
              className="mt-6"
            />
          </Col>

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
                {cities.map(city => (
                  <Option key={city._id} value={city.name}>
                    {city.name} ({city.state})
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

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
          <Col xs={24} md={8}>
            <Form.Item label="Adults" name="adults" initialValue={1}>
              <InputNumber min={1} max={9} className="w-full" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item label="Children" name="children" initialValue={0}>
              <InputNumber min={0} max={9} className="w-full" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item label="Class" name="class" initialValue="economy">
              <Select>
                <Option value="economy">Economy</Option>
                <Option value="premium-economy">Premium Economy</Option>
                <Option value="business">Business</Option>
                <Option value="first">First Class</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

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
      {flights?.length > 0 && (
  <div className="mt-8 grid gap-4">
    {flights.map((flight) => (
      <Card key={flight._id} className="border shadow">
        <Row justify="space-between" align="middle">
          <Col>
            <h4 className="text-lg font-semibold">{flight.airline} - {flight.flightNumber}</h4>
            <p>{flight.sourceAirport} → {flight.destinationAirport}</p>
            <p>Departure: {dayjs(flight.departureTime).format('YYYY-MM-DD HH:mm')}</p>
            <p>Arrival: {dayjs(flight.arrivalTime).format('YYYY-MM-DD HH:mm')}</p>
            <p>Duration: {flight.duration}</p>
          </Col>
          <Col>
            <p className="text-xl font-bold text-green-600">₹{flight.price}</p>
            <p>Class: {flight.classType}</p>
            <p>Seats: {flight.availableSeats}</p>
            <Button type="primary">Book</Button>
          </Col>
        </Row>
      </Card>
    ))}
  </div>
)}
    </Card>
  );
};

export default FlightBooking;
