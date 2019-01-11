import React from 'react';
import { Content, Row, Col, Box, Callout, Button } from 'adminlte-2-react';

const Modals = () => {
  return (
    <Content title='Modals' subTitle='new'>
      <Callout type='info' title='Reminder!'>
        Instructions for how to use modals are available on the 
        {' '}
        <a href="http://getbootstrap.com/javascript/#modals">Bootstrap documentation</a>
      </Callout>
      <Row>
        <Col xs={12}>
          <Box title='Modal Examples' border>
            <Button text='Launch Default Modal' to='/ui-elements/modals/default' />
            <Button type='info' text='Launch Info Modal' />
            <Button type='danger' text='Launch Danger Modal' />
            <Button type='warning' text='Launch Warning Modal' />
            <Button type='success' text='Launch Success Modal' />
          </Box>
        </Col>
      </Row>
    </Content>
  );
}

export default Modals;