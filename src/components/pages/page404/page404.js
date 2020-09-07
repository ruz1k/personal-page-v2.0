import React from "react";
import { Result, Row, Col } from "antd";

const NotFoundPage = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Result status="404" title="404" subTitle="Page Not Found" />
      </Col>
    </Row>
  );
};

export default NotFoundPage;
