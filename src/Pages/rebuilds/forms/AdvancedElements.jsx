import React, { Component } from 'react';
import {
  Content, Row, Col, Box, Inputs,
} from 'adminlte-2-react';
import Select2 from '../../../a2r-local/content/Inputs/Select2';

// const { Select2 } = Inputs;

class AdvancedElements extends Component {
  state = { selectedSelect2Value: 'Alabama' }

  simpleOptions = ['Alabama', 'Alaska', 'California', 'Delaware', 'Tennessee', 'Texas', 'Washington']

  disabledResultOptions = [{ value: 'Alabama' },
    { value: 'Alaska' },
    { value: 'California (disabled)', disabled: true },
    { value: 'Delaware' },
    { value: 'Tennessee' },
    { value: 'Texas' },
    { value: 'Washington' }];


  render() {
    const { selectedSelect2Value } = this.state;
    return (
      <Content title="Advanced Form Elements" subTitle="Preview" browserTitle="AdminLTE 2 | Advanced form elements">
        <Box border title="Select2" closable collapsable>
          <Row>
            <Col md={6}>
              <Select2
                labelPosition="above"
                label="Minimal"
                value={selectedSelect2Value}
                options={this.simpleOptions}
                onChange={(value) => {
                  this.setState({ selectedSelect2Value: value });
                }}
              />
              <Select2
                labelPosition="above"
                disabled
                label="Disabled"
                defaultValue="Alabama"
                options={this.simpleOptions}
              />
            </Col>
            <Col md={6}>
              <Select2
                labelPosition="above"
                placeholder="Select a state"
                multiple
                label="Multiple"
                options={this.simpleOptions}
              />
              <Select2
                labelPosition="above"
                label="Disabled Result"
                defaultValue="Alabama"
                onChange={(value) => {
                  this.setState({ selectedSelect2Value: value.value });
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
