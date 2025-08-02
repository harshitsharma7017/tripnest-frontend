import { Row, Col } from "antd";
import PackageCard from "./PackageCard";
import { holidayPackages } from "../mockData";

const HolidayPackages = () => (
  <section className="bg-gradient-to-r from-purple-50 to-pink-50 -mx-6 px-6 py-12">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mb-8 text-2xl md:text-3xl font-bold text-gray-800">
        🏖️ Holiday Packages
      </h2>
      <Row gutter={[20, 20]}>
        {holidayPackages.map((pkg, i) => (
          <Col xs={24} sm={12} md={8} key={i}>
            <PackageCard package={pkg} />
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default HolidayPackages;
