import React from 'react';
import { Card, Form, Select, DatePicker, Button, Row, Col, InputNumber, Checkbox } from 'antd';
import { Train, ArrowLeftRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { searchTrains } from '../store/slices/TrainSlice';

const { Option } = Select;

const TrainBooking = ({ cities = [] }) => {
    const dispatch = useDispatch();
    const { train = [] } = useSelector((state) => state.train || {});
  const [form] = Form.useForm();

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
  const { from, to, date } = values;

  // Format date to YYYY-MM-DD
  const formattedDate = date.format("YYYY-MM-DD");

  const searchParams = {
    from,
    to,
    date: formattedDate
  };

  dispatch(searchTrains(searchParams));
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
                {cities.map(city => (
                  <Option key={city._id} value={city.name}>
                    {city.name} ({city.state})
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
                {cities.map(city => (
                  <Option key={city._id} value={city.name}>
                    {city.name} ({city.state})
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
      {train.length > 0 && (
  <div className="mt-6">
    <h4 className="font-semibold mb-2">Available Trains</h4>
    {train.map((tr, index) => (
      <Card key={index} className="mb-4">
        <p><strong>Train Number:</strong> {tr.trainNumber}</p>
        <p><strong>Name:</strong> {tr.trainName}</p>
        <p><strong>From:</strong> {tr.sourceStation} → <strong>To:</strong> {tr.destinationStation}</p>
        <p><strong>Departure:</strong> {new Date(tr.departureTime).toLocaleString()}</p>
        <p><strong>Arrival:</strong> {new Date(tr.arrivalTime).toLocaleString()}</p>
        <p><strong>Class:</strong> {tr.classType}</p>
        <p><strong>Price:</strong> ₹{tr.price}</p>
      </Card>
    ))}
  </div>
)}
    </Card>
  );
};

export default TrainBooking;