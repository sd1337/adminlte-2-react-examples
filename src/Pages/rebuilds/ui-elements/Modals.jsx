import React, { Component } from 'react';
import {
  Content, Row, Col, Box, Callout, Button,
} from 'adminlte-2-react';
import { ButtonToolbar } from 'react-bootstrap';

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

class Modals extends Component {
  state = { showModal: false }


  constructor({ match: { params: { type } } }) {
    super();
    this.onModalHide = this.onModalHide.bind(this);
  }

  onModalHide() {
    this.setState({ showModal: false });
  }

  getModalFooter = ({ modalType }) => (
    <React.Fragment>
      <Button text="Close" outline={(modalType && modalType !== 'default')} onClick={this.onModalHide} pullLeft />
      <Button type="primary" outline={(modalType && modalType !== 'default')} text="Save changes" onClick={this.onModalHide} pullRight />
    </React.Fragment>
  )

  showModal(props) {
    this.setState({ showModal: true, modalProps: props });
  }

  render() {
    const { match: { params: { type } } } = this.props;
    let actualShow;
    let actualProps;
    if (!type) {
      const { showModal, modalProps } = this.state;
      actualShow = showModal;
      actualProps = modalProps;
    } else {
      actualShow = true;
      actualProps = { title: `${capitalizeFirstLetter(type)} Modal`, modalType: type, modalCloseTo: '/ui-elements/modals' };
    }
    return (
      <Content title="Modals" subTitle="new">
        <Content modal onHide={this.onModalHide} show={actualShow} modalFooter={this.getModalFooter(actualProps || {})} {...actualProps}>
          One fine body...
        </Content>
        <Callout type="info" title="Reminder!">
          Instructions for how to use modals are available on the
          {' '}
          <a href="http://getbootstrap.com/javascript/#modals">Bootstrap documentation</a>
        </Callout>
        <Row>
          <Col xs={12}>
            <Box title="Modal Examples" border>
              <ButtonToolbar>
                <Button text="Launch Default Modal" onClick={() => this.showModal({ title: 'Default Modal' })} />
                <Button type="info" text="Launch Info Modal" onClick={() => this.showModal({ title: 'Info Modal', modalType: 'info' })} />
                <Button type="danger" text="Launch Danger Modal" onClick={() => this.showModal({ title: 'Danger Modal', modalType: 'danger' })} />
                <Button type="warning" text="Launch Warning Modal" onClick={() => this.showModal({ title: 'Warning Modal', modalType: 'warning' })} />
                <Button type="success" text="Launch Success Modal" to="/ui-elements/modals/success" />
              </ButtonToolbar>
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Modals;
