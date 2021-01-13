import React from 'react';
import {
  Box, Col, Row, BoxPane, SparklineBox,
} from 'adminlte-2-react';

const VisitorsReport = () => (
  <Box type="success" collapsable closable noPadding title="Visitors Report">
    <Row>
      <Col md={9} sm={8}>
        <div className="pad">
          <div style={{ height: '325px' }} />
        </div>
      </Col>
      <Col md={3} sm={4}>
        <BoxPane padding color="green">
          <SparklineBox text="Visits" header="8390" chartData={[90, 70, 90, 70, 75, 80, 70]} />
          <SparklineBox text="Referrals" header="30%" chartData={[90, 50, 90, 70, 61, 83, 63]} />
          <SparklineBox text="Organic" header="70%" chartData={[90, 50, 90, 70, 61, 83, 63]} />
        </BoxPane>
      </Col>
    </Row>
  </Box>
);

export default VisitorsReport;
