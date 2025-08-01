// src/pages/BookingsPage.jsx
import { List, Card, Tag, Typography } from "antd";
import AppLayout from "../components/AppLayout";

const { Title, Text } = Typography;

// Dummy booking data
const bookings = [
  {
    id: 1,
    type: "Flight",
    destination: "Paris",
    status: "Confirmed",
    date: "2025-08-20",
  },
  {
    id: 2,
    type: "Hotel",
    destination: "Agra",
    status: "Cancelled",
    date: "2025-09-01",
  },
  {
    id: 3,
    type: "Cab",
    destination: "Delhi Airport to City",
    status: "Confirmed",
    date: "2025-08-15",
  },
];

const getStatusTag = (status) => {
  const colorMap = {
    Confirmed: "green",
    Cancelled: "red",
    Pending: "orange",
  };
  return <Tag color={colorMap[status]}>{status}</Tag>;
};

const BookingsPage = () => {
  return (
      <><Title level={2}>My Bookings</Title><List
          grid={{ gutter: 16, column: 1 }}
          dataSource={bookings}
          renderItem={(item) => (
              <List.Item>
                  <Card title={`${item.type} to ${item.destination}`}>
                      <Text strong>Date:</Text> {item.date}
                      <br />
                      <Text strong>Status:</Text> {getStatusTag(item.status)}
                  </Card>
              </List.Item>
          )} /></>
  );
};

export default BookingsPage;
