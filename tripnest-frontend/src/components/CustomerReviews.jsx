import { Row, Col } from "antd";
import ReviewCard from "./ReviewCard";
import { customerReviews } from "../mockData";

const CustomerReviews = () => (
  <section>
    <h2 className="text-center mb-8 text-2xl md:text-3xl font-bold text-gray-800">
      💬 What Our Travelers Say
    </h2>
    <Row gutter={[20, 20]}>
      {customerReviews.map((review, i) => (
        <Col xs={24} sm={12} md={8} key={i}>
          <ReviewCard review={review} />
        </Col>
      ))}
    </Row>
  </section>
);

export default CustomerReviews;