import { Row, Col } from "antd";
import DestinationCard from "./DestinationCard";
import { popularDestinations } from "../mockData";

const PopularDestinations = () => (
  <section>
    <h2 className="text-center mb-8 text-2xl md:text-3xl font-bold text-gray-800">
      🌟 Popular Destinations
    </h2>
    <Row gutter={[20, 20]}>
      {popularDestinations.map((dest, i) => (
        <Col xs={24} sm={12} md={8} key={i}>
          <DestinationCard destination={dest} />
        </Col>
      ))}
    </Row>
  </section>
);

export default PopularDestinations;
