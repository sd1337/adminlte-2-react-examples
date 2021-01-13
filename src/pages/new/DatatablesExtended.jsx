import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Content, Row, Box, Col, Inputs, LoadingSpinner, Button,
  DataTable
} from 'adminlte-2-react';

import data from '../../common/Browsers';

const renderingEngines = [...new Set(data.map(p => p.engine))];
const { Select2, Checkbox } = Inputs;
const mappedData = data.map(p => p.browser);

const firstColumns = [
  { title: 'Rendering engine', data: 'engine' },
  { title: 'Browser', data: 'browser' },
  { title: 'Platform(s)', data: 'platform' },
  { title: 'Engine version', data: 'engineVersion' },
  {
    title: 'CSS grade',
    data: 'cssGrade',
    render: (cssGrade) => {
      switch (cssGrade) {
        case 'A':
          return <div className="text-green">{cssGrade}</div>;
        case 'C':
          return <div className="text-yellow">{cssGrade}</div>;
        case 'Z':
          return <div className="text-red">{cssGrade}</div>;
        default:
          return cssGrade;
      }
    },
  },
  {
    title: 'Buttons',
    data: null,
    render: () => (
      <Button
        icon="fa-info"
        className="clickable"
      />
    )
    ,
  },
];

class DatatablesExtended extends Component {
  state = {
    selectedRows: undefined,
    selectedEngine: undefined,
    useFooter: false,
    activePage: 0,
    order: { column: 'engine', direction: 'asc' },
    filteredData: undefined,
  }

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleRowSelect = this.handleRowSelect.bind(this);
    this.handleEngineChange = this.handleEngineChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ loading: true });
    const waitTime = Math.random() * 2000;
    setTimeout(() => {
      const { order, activePage, selectedEngine } = this.state;
      let localData;
      if (selectedEngine && selectedEngine.length > 0) {
        localData = data.filter(({ engine }) => selectedEngine.indexOf(engine) > -1);
      } else {
        localData = data;
      }
      const filteredData = localData.sort((a, b) => {
        if (a[order.column].toLowerCase() < b[order.column].toLowerCase()) { return order.direction === 'asc' ? -1 : 1; }
        if (a[order.column].toLowerCase() > b[order.column].toLowerCase()) { return order.direction === 'asc' ? 1 : -1; }
        return 0;
      }).slice(10 * activePage, 10 * activePage + 10);
      const hasMore = filteredData.slice(10 * activePage, 10 * activePage + 10).length === 10;
      this.setState({ filteredData, loading: false, hasMore });
    }, waitTime);
  }

  handleChange(event) {
    const { params: { data } } = event;
    this.setState({ selectedRows: data });
  }

  handleEngineChange(event) {
    const { params: { data } } = event;
    this.setState({ selectedEngine: data });
    this.getData();
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
    const {
      selectedRows, selectedEngine, useFooter, activePage, order, filteredData, loading, hasMore,
    } = this.state;
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
            <Box title="Externally controlled selection">
              <DataTable
                columns={firstColumns}
                options={{
                  // paging: true,
                  // lengthChange: false,
                  searching: false,
                  // info: false,
                  lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'All']],
                  autoWidth: false,
                  // select: true,
                  rowId: 'browser',
                }}
                data={localData}
                footer={useFooter}
                selectedRows={selectedRows}
                onSelect={this.handleRowSelect}
                order={[order]}
                onClickEvents={{
                  clickable: () => {
                    // debugger;
                    alert('works');
                  },
                }}
                id="externally-controlled"
              />
            </Box>
          </Col>
          <Col xs={12}>
            <Box title="Externally controlled data">
              <DataTable
                id="external-data"
                columns={firstColumns}
                options={{
                  // searching: false,
                  autoWidth: false,
                  select: true,
                  rowId: 'browser',
                }}
                data={filteredData}
                footer={useFooter}
                selectedRows={selectedRows}
                onSelect={this.handleRowSelect}
                page={activePage}
                pageSize={10}
                totalElements={(filteredData && localData.length) || 0}
                // hasMore={hasMore}
                onPageChange={(page) => {
                  this.setState({ activePage: page });
                  this.getData();
                }}
                onOrderChange={(newOrder) => {
                  this.setState({ order: newOrder[0] });
                  this.getData();
                }}
                onSearchChange={(searchData) => {
                  console.log('searchValue', searchData);
                }}
                // searchValue="firefox"
                onClickEvents={{
                  clickable: () => {
                    // debugger;
                    alert('works');
                  },
                }}
              />
              {loading && <LoadingSpinner />}
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}


export default DatatablesExtended;
