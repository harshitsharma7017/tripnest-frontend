// src/pages/ExplorePage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Card, Typography, Row, Col, Tag, Empty } from "antd";

const { Title, Paragraph, Text } = Typography;

const dummyAttractions = [
  {
    id: "1",
    name: "Taj Mahal",
    category: "Historic",
    image: "https://source.unsplash.com/600x400/?tajmahal",
    rating: 4.8,
    location: "Agra, India",
    description: "One of the seven wonders of the world.",
  },
  {
    id: "2",
    name: "Manali Hills",
    category: "Nature",
    image: "https://source.unsplash.com/600x400/?mountains",
    rating: 4.6,
    location: "Himachal Pradesh",
    description: "Snow-capped beauty perfect for winter trips.",
  },
  {
    id: "3",
    name: "Street Food Delhi",
    category: "Food",
    image: "https://source.unsplash.com/600x400/?streetfood",
    rating: 4.7,
    location: "Delhi",
    description: "Spicy, delicious and authentic Indian food.",
  },
];

const categories = ["All", "Historic", "Nature", "Food"];

const ExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAttractions = dummyAttractions.filter((place) => {
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
