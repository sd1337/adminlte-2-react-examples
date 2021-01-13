import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

import {
  Content, Row, Box, SimpleTable, Col, ProgressBar, Badge, Label, Inputs, Button,
} from 'adminlte-2-react';

class SimpleTables extends Component {
  state = {}

  render() {
    const columns = [{ title: '#', data: 'no', width: '10px' },
      { title: 'Task', data: 'task' },
      { title: 'Progress', data: 'progress', render: data => <ProgressBar xs value={data.value} type={data.type} striped={data.striped} active={data.active} /> },
      {
        title: 'Label', data: 'label', width: '40px', render: (value, rowData) => <Badge color={value} text={`${rowData.progress.value}%`} />,
      }];
    const data = [{
      no: '1.', task: 'Update software', progress: { value: 55, type: 'danger' }, label: 'red',
    }, {
      no: '2.', task: 'Clean database', progress: { value: 70, type: 'yellow' }, label: 'yellow',
    }, {
      no: '3.',
      task: 'Cron job running',
      progress: {
        value: 30, type: 'primary', striped: true, active: true,
      },
      label: 'light-blue',
    }, {
      no: '4.',
      task: 'Fix and squish bugs',
      progress: {
        value: 90, type: 'success', striped: true, active: true,
      },
      label: 'green',
    }];

    /* TODO: Use own pagination */
    const pagination = (
      <Pagination bsSize="small" className="pull-right no-margin">
        <Pagination.First />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Last />
      </Pagination>
    );
    const responsiveColumns = [{ title: 'ID', data: 'id', width: '10px' },
      { title: 'User', data: 'user' },
      { title: 'Date', data: 'date' },
      { title: 'Status', data: 'status', render: data2 => <Label type={data2.type}>{data2.text}</Label> },
      { title: 'Reason', data: 'reason' }];
    const responsiveData = [{
      id: 183, user: 'John Doe', date: '11-7-2014', status: { type: 'success', text: 'Approved' }, reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.',
    }, {
      id: 219, user: 'Alexander Pierce', date: '11-7-2014', status: { type: 'warning', text: 'Pending' }, reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.',
    }, {
      id: 657, user: 'Bob Doe', date: '11-7-2014', status: { type: 'primary', text: 'Approved' }, reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.',
    }, {
      id: 175, user: 'Mike Doe', date: '11-7-2014', status: { type: 'danger', text: 'Denied' }, reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.',
    }];

    return (
      <Content title="Simple Tables" subTitle="preview of simple tables">
        <Row>
          <Col md={6}>
            <Box border title="Bordered table" footer={pagination}>
              <SimpleTable
                columns={columns}
                data={data}
                border
              />
            </Box>
            <Box border title="Condensed Full Width Table" noPadding>
              <SimpleTable
                condensed
                columns={columns}
                data={data}
              />
            </Box>
          </Col>
          <Col md={6}>
            <Box border title="Simple Full Width Table" noPadding customOptions={pagination}>
              <SimpleTable
                columns={columns}
                data={data}
              />
            </Box>
            <Box border title="Striped Full Width Table" noPadding>
              <SimpleTable
                striped
                columns={columns}
                data={data}
              />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Box title="Responsive Hover Table" noPadding customOptions={<Inputs.Text size="sm" buttonRight={<Button iconClass="fa-search" />} width="130px" placeholder="Search" />}>
              <SimpleTable
                columns={responsiveColumns}
                data={responsiveData}
              />
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default SimpleTables;
