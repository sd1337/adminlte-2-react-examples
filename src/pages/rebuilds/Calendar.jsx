/* eslint-disable */

import React, { Component } from 'react';

import { Content, Row, Box, Col, Calendar } from 'adminlte-2-react';

class SampleCalendar extends Component {
  state = {}
  render() {
    return (<Content title='Calendar' subTitle='Control panel'>
      <Row>
        <Col md={3}>
          <Box solid border title='Draggable Events'>

          </Box>
        </Col>
        <Col md={9}>
          <Box type='primary' noPadding>
            <Calendar />
          </Box>
        </Col>
      </Row>
    </Content>);
  }
}

export default SampleCalendar;