// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Typography,
  Row,
  Col,
  Space,
  Tabs,
  Carousel,
  Avatar,
} from "antd";

const { Title, Paragraph, Text } = Typography;

const LandingPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Tabs */}
      <div
        className="relative w-full h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ 
          backgroundImage: "url('/hero.jpg')"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <div className="bg-black bg-opacity-70 backdrop-blur-sm border-0 rounded-3xl shadow-2xl p-6 md:p-12">
            <div className="text-center">
              <div className="flex flex-col items-center space-y-8">
                <h1 className="text-white mb-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Book Your Next Adventure
                </h1>
                <p className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl">
                  From flights to hotels — all in one place
                </p>
                
                {/* Tabs with Tailwind styling */}
                <div className="w-full max-w-md mx-auto mb-8">
                  <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {[
                      { key: '1', label: '✈️ Flights' },
                      { key: '2', label: '🏨 Hotels' },
                      { key: '3', label: '🚆 Trains' },
                      { key: '4', label: '🚌 Buses' }
                    ].map((tab, index) => (
                      <button
                        key={tab.key}
                        className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 ${
                          index === 0
                            ? 'bg-white bg-opacity-90 text-black shadow-lg'
                            : 'bg-white bg-opacity-20 text-white border border-white border-opacity-30 hover:bg-opacity-30'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Link to="/explore">
                  <Button
                    type="primary"
                    size="large"
                    className="bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-black font-semibold px-12 py-6 h-auto rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Explore Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Offers Carousel */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-3xl md:text-4xl font-bold text-gray-800">
            🔥 Top Offers
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Carousel autoplay dots className="h-96">
              {["offer1.jpg", "offer2.jpg", "offer3.jpg"].map((img, i) => (
                <div key={i} className="relative">
                  <img
                    src={`/${img}`}
                    alt="Offer"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-3xl md:text-4xl font-bold text-gray-800">
            🚀 Why Choose Us?
          </h2>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={8}>
              <FeatureCard 
                icon="🌍" 
                title="Global Reach" 
                desc="Explore destinations worldwide with our extensive network of partners." 
              />
            </Col>
            <Col xs={24} md={8}>
              <FeatureCard 
                icon="💡" 
                title="Smart Matching" 
                desc="AI-powered recommendations to find the best deals automatically." 
              />
            </Col>
            <Col xs={24} md={8}>
              <FeatureCard 
                icon="🔒" 
                title="Secure Bookings" 
                desc="Bank-level security for safe and reliable transactions." 
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12 text-3xl md:text-4xl font-bold text-gray-800">
            ✨ Trending Destinations
          </h2>
          <Row gutter={[24, 24]} justify="center">
            {[
              { name: "Paris", img: "/eiffel.jpg", desc: "City of Light" },
              { name: "Agra", img: "/taj.jpg", desc: "Eternal Love" },
              { name: "Beijing", img: "/wall.jpg", desc: "Ancient Wonder" },
              { name: "Bali", img: "/bali.jpg", desc: "Island Paradise" },
              { name: "London", img: "/london.jpg", desc: "Royal Heritage" },
              { name: "Tokyo", img: "/tokyo.jpg", desc: "Modern Marvel" },
            ].map((place, i) => (
              <Col xs={24} sm={12} md={8} lg={6} key={i}>
                <AttractionCard name={place.name} image={place.img} desc={place.desc} />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-3xl md:text-4xl font-bold text-gray-800">
            💬 What Travelers Say
          </h2>
          <Row gutter={[24, 24]} justify="center">
            {testimonials.map((t, i) => (
              <Col xs={24} sm={12} md={8} key={i}>
                <div className="bg-white rounded-2xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 h-full">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <Avatar size={80} src={t.avatar} className="shadow-md" />
                    <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                    <p className="text-gray-600 italic leading-relaxed">
                      "{t.review}"
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6 text-3xl md:text-4xl font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
            Join millions of travelers who trust us with their adventures
          </p>
          <Link to="/explore">
            <button className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0">
              Start Exploring
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white text-center rounded-2xl shadow-lg border-0 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 p-8 cursor-pointer">
    <div className="flex flex-col items-center space-y-4">
      <div className="text-5xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
    </div>
  </div>
);

const AttractionCard = ({ name, image, desc }) => (
  <div className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
    <div className="relative overflow-hidden">
      <img
        alt={name}
        src={image}
        className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-white text-sm opacity-90">{desc}</p>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Aditi Mehra",
    review: "Flawless booking and great deals! Made my Europe trip unforgettable.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rahul Batra",
    review: "Best travel experience I've had. Seamless and budget-friendly.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Emily Chen",
    review: "Beautiful UI and excellent customer support. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

export default LandingPage;