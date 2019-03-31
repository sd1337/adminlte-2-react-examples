import React, { Component } from 'react';
import {
  Content, Row, Col, Box, Button, Inputs,
} from 'adminlte-2-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import InfoModal from '../InfoModal';
import {
  select21, select22, select23, select24,
} from './AdvancedElements.Info';

const {
  Text, Date, DateRange, ICheck, Select2, DateTime,
} = Inputs;

class AdvancedElements extends Component {
  state = {
    selectedSelect2Value: null,
    select2Disabled: true,
    showInfoModal: false,
    simpleOptionsInState: ['Alabama', 'Alaska', 'California', 'Delaware'],
    startDate: moment().startOf('year'),
    endDate: moment().endOf('year'),
  }

  simpleOptions = ['Alabama', 'Alaska', 'California', 'Delaware', 'Tennessee', 'Texas', 'Washington']

  disabledResultOptions = [{ value: 'Alabama' },
    { value: 'Alaska' },
    { value: 'California (disabled)', disabled: true },
    { value: 'Delaware' },
    { value: 'Tennessee' },
    { value: 'Texas' },
    { value: 'Washington' }];


  constructor() {
    super();
    this.onHide = this.onHide.bind(this);
    this.showInfoModal = this.showInfoModal.bind(this);
  }

  onHide() {
    this.setState({ showInfoModal: false, infoModalText: null });
  }

  getInfoTitle(label, infotext) {
    return (
      <React.Fragment>
        {`${label}  `}
        <FontAwesomeIcon onClick={() => this.showInfoModal(infotext)} style={{ cursor: 'pointer' }} icon={['fas', 'info-circle']} />
      </React.Fragment>
    );
  }

  showInfoModal(text) {
    this.setState({ showInfoModal: true, infoModalText: text });
  }

  render() {
    const {
      selectedSelect2Value, select2Disabled, showInfoModal, infoModalText, simpleOptionsInState,
      startDate, endDate,
    } = this.state;
    return (
      <Content title="Advanced Form Elements" subTitle="Preview" browserTitle="AdminLTE 2 | Advanced form elements">
        <InfoModal show={showInfoModal} onHide={this.onHide} text={infoModalText} />
        <Box
          border
          title="Select2"
          closable
          collapsable
          footer={(
            <React.Fragment>
              {'While the most used options and events are exposed as prop types select2 can be completely adjusted by passing the optios as '}
              <code>defaultWidgetOptions</code>
              {' prop, visit '}
              <a href="https://select2.org/" target="_blank" rel="noopener noreferrer">Select2 documentation</a>
              {' for more information about the plugin.'}
            </React.Fragment>
          )}
        >
          <Row>
            <Col md={6}>
              <Select2
                labelPosition="above"
                label={this.getInfoTitle('Minimal', select21)}
                value={selectedSelect2Value}
                options={this.simpleOptions}
                buttonRight={<Button icon="fas-info-circle" onClick={() => this.showInfoModal(select21)} />}
                onChange={(event) => {
                  const { params: { data: value } } = event;
                  // debugger;
                  this.setState({ selectedSelect2Value: value });
                }}
              />
              <Select2
                labelPosition="above"
                disabled={select2Disabled}
                label={this.getInfoTitle('Disabled', select22)}
                defaultValue="Alabama"
                options={this.simpleOptions}
                checkboxLeft
                checkboxLeftProps={{
                  onChange: ({ target: { checked: value } }) => {
                    this.setState({ select2Disabled: !value });
                  },
                  defaultValue: !select2Disabled,
                }}
                allowClear
              />
              <Select2
                labelPosition="above"
                label={this.getInfoTitle('Depends on multiple selected', select21)}
                // value={selectedSelect2Value}
                options={simpleOptionsInState}
                buttonRight={<Button icon="fas-info-circle" onClick={() => this.showInfoModal(select21)} />}
              />
            </Col>
            <Col md={6}>
              <Select2
                labelPosition="above"
                placeholder="Select a state"
                multiple
                label={this.getInfoTitle('Multiple', select23)}
                options={this.simpleOptions}
                onChange={(event) => {
                  const { params: { data } } = event;
                  data.forEach((p) => {
                    console.log(p);
                  });
                }}
              />
              <Select2
                labelPosition="above"
                placeholder="Select a state"
                multiple
                label={this.getInfoTitle('Multiple selected', select23)}
                options={this.simpleOptions}
                value={simpleOptionsInState}
                onUnselect={({ params: { data } }) => {
                  this.setState({ simpleOptionsInState: data });
                }}
                onSelect={({ params: { data } }) => {
                  this.setState({ simpleOptionsInState: data });
                }}
              />
              <Select2
                labelPosition="above"
                label={this.getInfoTitle('Disabled Result', select24)}
                defaultValue="Alabama"
                onChange={(event) => {
                  const { params: { data } } = event;
                  this.setState({ selectedSelect2Value: data });
                }}
                options={this.disabledResultOptions}
              />
            </Col>
          </Row>
        </Box>
        <Row>
          <Col xs={6}>
            <Box title="Input masks" type="danger">
              <Text label={this.getInfoTitle('Date masks:', 'none')} labelPosition="above" iconLeft="fas-calendar" />
              <Text labelPosition="none" iconLeft="fas-calendar" />
              <Text label={this.getInfoTitle('US phone mask:', 'none')} labelPosition="above" iconLeft="fas-phone" />
              <Text label={this.getInfoTitle('Intl US phone mask:', 'none')} labelPosition="above" iconLeft="fas-phone" />
              <Text label={this.getInfoTitle('IP mask:', 'none')} labelPosition="above" iconLeft="fa-laptop" />
            </Box>
            <Box title="Input masks" type="info">
              <Text label={this.getInfoTitle('Date masks:', 'none')} labelPosition="above" iconLeft="fas-calendar" />
              <Text labelPosition="none" iconLeft="fas-calendar" />
              <Text label={this.getInfoTitle('US phone mask:', 'none')} labelPosition="above" iconLeft="fas-phone" />
              <Text label={this.getInfoTitle('Intl US phone mask:', 'none')} labelPosition="above" iconLeft="fas-phone" />
              <Text label={this.getInfoTitle('IP mask:', 'none')} labelPosition="above" iconLeft="fa-laptop" />
            </Box>
          </Col>
          <Col xs={6}>
            <Box title="Date picker" type="primary">
              <Date
                label={this.getInfoTitle('Date:', 'none')}
                labelPosition="above"
                iconLeft="fas-calendar"
                type="success"
                format="DD.MM.YYYY"
                value={moment()}
              />
              <DateRange
                type="primary"
                label={this.getInfoTitle('Date range:', 'none')}
                labelPosition="above"
                iconLeft="fas-calendar"
                startDate={startDate}
                endDate={endDate}
                startDateId="startDate"
                endDateId="endDate"
                format="DD.MM.YYYY"
                onStartChange={({ target: { value } }) => { this.setState({ startDate: value }); }}
                onEndChange={({ target: { value } }) => { this.setState({ endDate: value }); }}
              />
              <Date
                label={this.getInfoTitle('Date:', 'none')}
                labelPosition="above"
                iconLeft="fas-calendar"
                type="success"
                format="DD.MM.YYYY"
                disabled
                inputIconPosition="before"
              />
              <DateTime
                label={this.getInfoTitle('Date:', 'none')}
                labelPosition="above"
                iconLeft="fas-calendar"
                // type="success"
                format="DD.MM.YYYY"
                // disabled
                inputIconPosition="before"
              />
              <Text label={this.getInfoTitle('IP mask:', 'none')} labelPosition="above" iconLeft="fa-laptop" />
            </Box>
            <Box title="iCheck - Checkbox & Radio Inputs" type="success">
              <ICheck labelPosition="none" iconLeft="fas-calendar" value={1} options={[{ value: 1 }, { value: 2 }, { value: 3, disabled: true }]} />
              <Text labelPosition="none" iconLeft="fas-calendar" />
              <Text label={this.getInfoTitle('US phone mask:', 'none')} labelPosition="above" iconLeft="fas-phone" />
              <Text label={this.getInfoTitle('Intl US phone mask:', 'none')} labelPosition="above" iconLeft="fas-phone" />
              <Text label={this.getInfoTitle('IP mask:', 'none')} labelPosition="above" iconLeft="fa-laptop" />
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}


export default AdvancedElements;
