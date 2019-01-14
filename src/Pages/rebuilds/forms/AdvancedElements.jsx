import React, { Component } from 'react';
import {
  Content, Row, Col, Box, Button, Inputs,
} from 'adminlte-2-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Select2 from '../../../a2r-local/content/Inputs/Select2';
import InfoModal from '../InfoModal';
import {
  select21, select22, select23, select24,
} from './AdvancedElements.Info';

const { Select2 } = Inputs;

class AdvancedElements extends Component {
  state = { selectedSelect2Value: 'Alabama', select2Disabled: true, showInfoModal: false }

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
        {`${label} `}
        <FontAwesomeIcon onClick={() => this.showInfoModal(infotext)} style={{ cursor: 'pointer' }} icon={['fas', 'info-circle']} />
      </React.Fragment>
    );
  }

  showInfoModal(text) {
    this.setState({ showInfoModal: true, infoModalText: text });
  }

  render() {
    const {
      selectedSelect2Value, select2Disabled, showInfoModal, infoModalText,
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
            </Col>
            <Col md={6}>
              <Select2
                labelPosition="above"
                placeholder="Select a state"
                multiple
                label={this.getInfoTitle('Multiple', select23)}
                options={this.simpleOptions}
              />
              <Select2
                labelPosition="above"
                label={this.getInfoTitle('Disabled Result', select24)}
                defaultValue="Alabama"
                onChange={(event) => {
                  const { params: { data: { value } } } = event;
                  this.setState({ selectedSelect2Value: value });
                }}
                options={this.disabledResultOptions}
              />
            </Col>
          </Row>
        </Box>
      </Content>
    );
  }
}


export default AdvancedElements;
