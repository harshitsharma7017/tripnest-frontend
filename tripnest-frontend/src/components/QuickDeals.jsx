import { Row, Col } from "antd";
import DealCard from "./DealCard";
import { quickDeals } from "../mockData";

const QuickDeals = () => (
  <section className="bg-gradient-to-r from-orange-50 to-red-50 -mx-6 px-6 py-12">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mb-8 text-2xl md:text-3xl font-bold text-gray-800">
        🔥 Today's Best Deals
      </h2>
      <Row gutter={[20, 20]}>
        {quickDeals.map((deal, i) => (
          <Col xs={24} sm={12} md={6} key={i}>
            <DealCard deal={deal} />
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default QuickDeals;
