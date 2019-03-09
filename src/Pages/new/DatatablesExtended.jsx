import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Content, Row, Box, Col, Inputs,
} from 'adminlte-2-react';

import DataTable from '../../a2r-local/content/DataTable';

import data from '../../common/Browsers';

const renderingEngines = [...new Set(data.map(p => p.engine))];
const { Select2, Checkbox } = Inputs;
const mappedData = data.map(p => p.browser);

const firstColumns = [
  { title: 'Rendering engine', data: 'engine' },
  { title: 'Browser', data: 'browser' },
  { title: 'Platform(s)', data: 'platform' },
  { title: 'Engine version', data: 'engineVersion' },
  { title: 'CSS grade', data: 'cssGrade' },
];

class DatatablesExtended extends Component {
  state = {
    selectedRows: undefined,
    selectedEngine: undefined,
    useFooter: false,
  }

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleRowSelect = this.handleRowSelect.bind(this);
    this.handleEngineChange = this.handleEngineChange.bind(this);
  }

  handleChange(event) {
    const { params: { data } } = event;
    this.setState({ selectedRows: data });
  }

  handleEngineChange(event) {
    const { params: { data } } = event;
    this.setState({ selectedEngine: data });
  }

  handleRowSelect(data) {
    const selectedRows = [];
    if (data.length) {
      data.each(({ browser }) => {
        selectedRows.push(browser);
      });
    } else {
      selectedRows.push(data.browser);
    }
    this.setState({ selectedRows });
  }

  render() {
    const { selectedRows, selectedEngine, useFooter } = this.state;
    let localData;
    if (selectedEngine && selectedEngine.length > 0) {
      localData = data.filter(({ engine }) => selectedEngine.indexOf(engine) > -1);
    } else {
      localData = data;
    }
    return (
      <Content
        title="Data Tables"
        subTitle="advanced tables"
      >
        <Row>
          <Col xs={4}>
            <Select2
              label="Rendering engine"
              options={renderingEngines}
              onChange={this.handleEngineChange}
              multiple
            />
          </Col>
          <Col xs={4}>
            <Select2
              label="Selected browser"
              options={mappedData}
              onChange={this.handleChange}
              value={selectedRows}
              multiple
            />
          </Col>
          <Col xs={4}>
            <Checkbox
              label="Footer"
              options={mappedData}
              onChange={({ target: { checked } }) => {
                this.setState({ useFooter: checked });
              }}
              defaultValue
              multiple
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Box title="Hover Data Table">
              <DataTable
                columns={firstColumns}
                options={{
                  // paging: true,
                  lengthChange: false,
                  searching: false,
                  // info: false,
                  autoWidth: false,
                  select: true,
                  rowId: 'browser',
                }}
                data={localData}
                footer={useFooter}
                selectedRows={selectedRows}
                onSelect={this.handleRowSelect}
              />
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}


export default DatatablesExtended;
