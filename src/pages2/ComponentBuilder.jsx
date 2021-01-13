import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Content, Row, Col, Box, Inputs, Margin, SimpleTable,
} from 'adminlte-2-react';

// import { Box } from '../common/ComponentProps';

const { Slider, Text } = Inputs;

class ComponentBuilder extends Component {
  state = { ColWidth: 12 }

  constructor() {
    super();
    this.onAfterSliderChange = this.onAfterSliderChange.bind(this);
  }

  onAfterSliderChange(ColWidth) {
    this.setState({ ColWidth });
  }

  render() {
    // const defaultProps = Object.entries(Box.defaultProps).map(([prop, defaultValue]) => ({ prop, defaultValue }));
    let propTypes = Object.entries(Box.propTypes).map(([prop, propType]) => ({ prop, propType }));
    propTypes = propTypes.map(({ prop, propType }) => {
      const defaultValue = Box.defaultProps[prop];
      let propTypeInfo;
      switch (propType) {
        case PropTypes.string:
          propTypeInfo = { type: 'string' };
          break;
        case PropTypes.string.isRequired:
          propTypeInfo = { type: 'string', required: true };
          break;
        default:
          propTypeInfo = { type: 'unknown' };
      }


      return {
        prop, defaultValue, type: propTypeInfo.type, required: !!(propTypeInfo.required),
      };
    });
    const { ColWidth } = this.state;
    return (
      <Content title="Components Builder">
        <Box>
          <Row>
            <Col xs={4}>
              <Margin>
                <Slider min={1} max={12} step={1} defaultValue={ColWidth} onChange={this.onAfterSliderChange} />
              </Margin>
            </Col>
            <Col xs={4}>
              <Text label="Browsertitle" labelPosition="above" />
            </Col>
            <Col xs={4}>
              <SimpleTable condensed columns={[{ title: 'Prop', data: 'prop' }, { title: 'Type', data: 'type', render: (data, index, rowData) => (rowData.required ? <b>{data}</b> : <div>{data}</div>) }, { title: 'DefaultValue', data: 'defaultValue' }]} data={propTypes} />
            </Col>
          </Row>
          <Row>
            <Col xs={ColWidth}>
              <Box />
            </Col>
          </Row>
        </Box>
      </Content>
    );
  }
}

export default ComponentBuilder;
