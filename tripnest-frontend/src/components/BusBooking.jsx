import React from 'react';
import { Card, Form, Select, DatePicker, Button, Row, Col, InputNumber } from 'antd';
import { Bus, ArrowLeftRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { searchBuses } from '../store/slices/BusSlice';

const { Option } = Select;

const BusBooking = ({ cities = [] }) => {
    const { bus = [] } = useSelector((state) => state.bus || {});
    const dispatch = useDispatch();
  const [form] = Form.useForm();

  const popularRoutes = [
    { from: 'Delhi', to: 'Manali', value: 'delhi-manali' },
    { from: 'Mumbai', to: 'Pune', value: 'mumbai-pune' },
    { from: 'Bangalore', to: 'Chennai', value: 'bangalore-chennai' },
    { from: 'Delhi', to: 'Jaipur', value: 'delhi-jaipur' },
    { from: 'Hyderabad', to: 'Vijayawada', value: 'hyderabad-vijayawada' },
    { from: 'Kolkata', to: 'Siliguri', value: 'kolkata-siliguri' }
  ];

  const handleSearch = (values) => {
    const { from, to, date } = values;

    if (!from || !to || !date) return;

    const formattedDate = dayjs(date).format('YYYY-MM-DD');

    dispatch(searchBuses({ from, to, date: formattedDate }));
    };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <div className="flex items-center mb-4">
        <Bus className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-lg font-semibold">Book Bus Tickets</h3>
      </div>
      
      <Form form={form} onFinish={handleSearch} layout="vertical">
        <Row gutter={16}>
          {/* From */}
          <Col xs={24} md={10}>
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
                {cities.map(city => (
                  <Option key={city._id} value={city.name}>
                    {city.name}
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
          <Col xs={24} md={10}>
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
                    {city.name}
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

        {/* Popular Routes */}
        <Row className="mb-4">
          <Col span={24}>
            <div className="text-sm text-gray-600 mb-2">Popular Routes:</div>
            <div className="flex flex-wrap gap-2">
              {popularRoutes.slice(0, 4).map(route => (
                <Button 
                  key={route.value}
                  size="small" 
                  type="dashed"
                  onClick={() => {
                    form.setFieldsValue({
                      from: route.from.toLowerCase(),
                      to: route.to.toLowerCase()
                    });
                  }}
                >
                  {route.from} → {route.to}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        <Row gutter={16}>
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

          {/* Bus Type */}
          <Col xs={24} md={8}>
            <Form.Item
              label="Bus Type"
              name="busType"
            >
              <Select placeholder="Select bus type">
                <Option value="ac">AC</Option>
                <Option value="non-ac">Non AC</Option>
                <Option value="sleeper">Sleeper</Option>
                <Option value="semi-sleeper">Semi Sleeper</Option>
                <Option value="volvo">Volvo</Option>
                <Option value="luxury">Luxury</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Departure Time */}
          <Col xs={24} md={8}>
            <Form.Item
              label="Departure Time"
              name="departureTime"
            >
              <Select placeholder="Select departure time">
                <Option value="early-morning">Early Morning (6 AM - 9 AM)</Option>
                <Option value="morning">Morning (9 AM - 12 PM)</Option>
                <Option value="afternoon">Afternoon (12 PM - 6 PM)</Option>
                <Option value="evening">Evening (6 PM - 10 PM)</Option>
                <Option value="night">Night (10 PM - 6 AM)</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Additional Filters */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Boarding Point"
              name="boardingPoint"
            >
              <Select placeholder="Select boarding point (optional)">
                <Option value="city-center">City Center</Option>
                <Option value="airport">Airport</Option>
                <Option value="railway-station">Railway Station</Option>
                <Option value="bus-stand">Bus Stand</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Dropping Point"
              name="droppingPoint"
            >
              <Select placeholder="Select dropping point (optional)">
                <Option value="city-center">City Center</Option>
                <Option value="airport">Airport</Option>
                <Option value="railway-station">Railway Station</Option>
                <Option value="bus-stand">Bus Stand</Option>
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
              Search Buses
            </Button>
          </Col>
        </Row>
      </Form>
      {bus.length > 0 && (
  <div className="mt-8">
    <h4 className="text-lg font-semibold mb-4">Available Buses:</h4>
    {bus.map((bus) => (
      <Card key={bus._id} className="mb-4">
        <p><strong>{bus.operatorName}</strong> - {bus.busType}</p>
        <p>{bus.sourceCity} → {bus.destinationCity}</p>
        <p>Departure: {dayjs(bus.departureTime).format('DD MMM YYYY, hh:mm A')}</p>
        <p>Price: ₹{bus.price}</p>
        <p>Seats Available: {bus.availableSeats}/{bus.totalSeats}</p>
      </Card>
    ))}
  </div>
)}
    </Card>
  );
};

export default BusBooking;