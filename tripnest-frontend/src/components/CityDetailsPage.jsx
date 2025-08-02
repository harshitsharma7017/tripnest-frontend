// src/pages/CityDetailsPage.jsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Card, Typography, Row, Col, Tag, Breadcrumb } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

// Tourist spots data for each city
const cityTouristSpots = {
  "1": { // Agra
    cityName: "Agra",
    cityImage: "https://source.unsplash.com/1200x400/?agra,city",
    cityDescription: "Historic city in Uttar Pradesh, home to the magnificent Taj Mahal and rich Mughal heritage.",
    spots: [
      {
        id: "agra-1",
        name: "Taj Mahal",
        image: "https://source.unsplash.com/600x400/?tajmahal",
        rating: 4.9,
        description: "One of the seven wonders of the world, a symbol of eternal love.",
        timings: "6:00 AM - 6:30 PM",
        entryFee: "₹50 (Indians), ₹1100 (Foreigners)"
      },
      {
        id: "agra-2",
        name: "Agra Fort",
        image: "https://source.unsplash.com/600x400/?agrafort",
        rating: 4.6,
        description: "Historic walled city and UNESCO World Heritage site.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹40 (Indians), ₹550 (Foreigners)"
      },
      {
        id: "agra-3",
        name: "Mehtab Bagh",
        image: "https://source.unsplash.com/600x400/?mehtabbagh",
        rating: 4.4,
        description: "Beautiful garden complex with stunning Taj Mahal views.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹25 (Indians), ₹300 (Foreigners)"
      },
      {
        id: "agra-4",
        name: "Fatehpur Sikri",
        image: "https://source.unsplash.com/600x400/?fatehpursikri",
        rating: 4.5,
        description: "Ancient Mughal city with stunning architecture.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹40 (Indians), ₹550 (Foreigners)"
      }
    ]
  },
  "2": { // Manali
    cityName: "Manali",
    cityImage: "https://source.unsplash.com/1200x400/?manali,city",
    cityDescription: "Beautiful hill station in Himachal Pradesh with snow-capped mountains and adventure sports.",
    spots: [
      {
        id: "manali-1",
        name: "Rohtang Pass",
        image: "https://source.unsplash.com/600x400/?rohtangpass",
        rating: 4.7,
        description: "High mountain pass with snow activities and scenic views.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹50 (Vehicle Permit Required)"
      },
      {
        id: "manali-2",
        name: "Solang Valley",
        image: "https://source.unsplash.com/600x400/?solangvalley",
        rating: 4.6,
        description: "Adventure sports hub with paragliding and skiing.",
        timings: "9:00 AM - 5:00 PM",
        entryFee: "Free (Activity charges separate)"
      },
      {
        id: "manali-3",
        name: "Hadimba Temple",
        image: "https://source.unsplash.com/600x400/?hadimbatemple",
        rating: 4.4,
        description: "Ancient cave temple surrounded by cedar forests.",
        timings: "6:00 AM - 8:00 PM",
        entryFee: "Free"
      },
      {
        id: "manali-4",
        name: "Mall Road Manali",
        image: "https://source.unsplash.com/600x400/?manali,shopping",
        rating: 4.3,
        description: "Main shopping street with cafes, shops and mountain views.",
        timings: "24 Hours",
        entryFee: "Free"
      }
    ]
  },
  "3": { // Delhi
    cityName: "Delhi",
    cityImage: "https://source.unsplash.com/1200x400/?delhi,city",
    cityDescription: "Capital city of India, famous for street food, history, and vibrant culture.",
    spots: [
      {
        id: "delhi-1",
        name: "Red Fort",
        image: "https://source.unsplash.com/600x400/?redfort",
        rating: 4.5,
        description: "Historic Mughal fortress and UNESCO World Heritage site.",
        timings: "9:30 AM - 4:30 PM",
        entryFee: "₹35 (Indians), ₹500 (Foreigners)"
      },
      {
        id: "delhi-2",
        name: "India Gate",
        image: "https://source.unsplash.com/600x400/?indiagate",
        rating: 4.6,
        description: "War memorial and iconic landmark of Delhi.",
        timings: "24 Hours",
        entryFee: "Free"
      },
      {
        id: "delhi-3",
        name: "Chandni Chowk",
        image: "https://source.unsplash.com/600x400/?chandnichowk",
        rating: 4.4,
        description: "Bustling market famous for street food and shopping.",
        timings: "10:00 AM - 8:00 PM",
        entryFee: "Free"
      },
      {
        id: "delhi-4",
        name: "Lotus Temple",
        image: "https://source.unsplash.com/600x400/?lotustemple",
        rating: 4.7,
        description: "Beautiful Bahai temple shaped like a lotus flower.",
        timings: "9:00 AM - 5:30 PM",
        entryFee: "Free"
      }
    ]
  }
};

const CityDetailsPage = () => {
  const { id } = useParams();
  const cityData = cityTouristSpots[id];

  if (!cityData) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9", padding: "40px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <Title level={2}>City not found</Title>
          <Link to="/explore">
            <Button type="primary">Back to Explore</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9", padding: "40px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Breadcrumb and Back Button */}
        <div style={{ marginBottom: "24px" }}>
          <Breadcrumb style={{ marginBottom: "16px" }}>
            <Breadcrumb.Item>
              <Link to="/explore">Explore</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{cityData.cityName}</Breadcrumb.Item>
          </Breadcrumb>
          
          <Link to="/explore">
            <Button icon={<ArrowLeftOutlined />} style={{ marginBottom: "16px" }}>
              Back to Cities
            </Button>
          </Link>
        </div>

        {/* City Header with Image */}
        <div style={{ marginBottom: "40px" }}>
          <img
            src={cityData.cityImage}
            alt={cityData.cityName}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "20px"
            }}
          />
          <Title level={2} style={{ textAlign: "center", color: "#1677ff", marginBottom: "16px" }}>
            {cityData.cityName}
          </Title>
          <Paragraph style={{ 
            textAlign: "center", 
            fontSize: "16px", 
            maxWidth: "800px", 
            margin: "0 auto 32px auto",
            color: "#666"
          }}>
            {cityData.cityDescription}
          </Paragraph>
        </div>

        {/* Tourist Spots Section */}
        <Title level={3} style={{ color: "#1677ff", marginBottom: "24px" }}>
          Popular Tourist Spots
        </Title>

        {/* Tourist Spots Grid */}
        <Row gutter={[24, 24]}>
          {cityData.spots.map((spot) => (
            <Col key={spot.id} xs={24} sm={12} lg={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={spot.name}
                    src={spot.image}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                }
                style={{ height: "100%" }}
              >
                <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <Title level={4} style={{ color: "#1677ff", marginBottom: "8px" }}>
                    {spot.name}
                  </Title>
                  
                  <Tag color="gold" style={{ alignSelf: "flex-start", marginBottom: "8px" }}>
                    ⭐ {spot.rating}
                  </Tag>
                  
                  <Paragraph style={{ margin: "8px 0", flex: 1 }}>
                    {spot.description}
                  </Paragraph>
                  
                  <div style={{ marginBottom: "8px" }}>
                    <Text strong>Timings: </Text>
                    <Text type="secondary">{spot.timings}</Text>
                  </div>
                  
                  <div style={{ marginBottom: "16px" }}>
                    <Text strong>Entry Fee: </Text>
                    <Text type="secondary">{spot.entryFee}</Text>
                  </div>
                  
                  <Button type="primary" block>
                    Book Now
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CityDetailsPage;