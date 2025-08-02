// src/pages/ExplorePage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Card, Typography, Row, Col, Tag, Empty } from "antd";

const { Title, Paragraph, Text } = Typography;

const dummyCities = [
  {
    id: "1",
    name: "Agra",
    category: "Historic",
    image: "https://source.unsplash.com/600x400/?agra,city",
    rating: 4.8,
    location: "Uttar Pradesh, India",
    description: "Home to the magnificent Taj Mahal and rich Mughal heritage.",
  },
  {
    id: "2",
    name: "Manali",
    category: "Nature",
    image: "https://source.unsplash.com/600x400/?manali,city",
    rating: 4.6,
    location: "Himachal Pradesh, India",
    description: "Beautiful hill station with snow-capped mountains and adventure sports.",
  },
  {
    id: "3",
    name: "Delhi",
    category: "Food",
    image: "https://source.unsplash.com/600x400/?delhi,city",
    rating: 4.7,
    location: "Delhi, India",
    description: "Capital city famous for street food, history, and vibrant culture.",
  },
];

const categories = ["All", "Historic", "Nature", "Food"];

const ExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAttractions = dummyCities.filter((place) => {
    const matchesCategory = selectedCategory === "All" || place.category === selectedCategory;
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9", padding: "40px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Title level={2} style={{ textAlign: "center", color: "#1677ff" }}>
          Explore Attractions
        </Title>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "32px",
            alignItems: "center",
          }}
        >
          <Input.Search
            placeholder="Search places..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            enterButton
            style={{ width: "100%", maxWidth: "500px" }}
          />

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
            {categories.map((cat) => (
              <Button
                key={cat}
                type={selectedCategory === cat ? "primary" : "default"}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {filteredAttractions.length > 0 ? (
          <Row gutter={[24, 24]}>
            {filteredAttractions.map((place) => (
              <Col key={place.id} xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={place.name}
                      src={place.image}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                >
                  <Title level={4} style={{ color: "#1677ff", marginBottom: "8px" }}>
                    {place.name}
                  </Title>
                  <Text type="secondary">{place.location}</Text>
                  <Paragraph style={{ margin: "8px 0" }}>{place.description}</Paragraph>
                  <Tag color="gold">⭐ {place.rating}</Tag>
                  <div style={{ marginTop: "12px" }}>
                    <Link to={`/attractions/${place.id}`}>
                      <Button type="primary" block>
                        View Details
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <Empty description="No attractions found." />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;