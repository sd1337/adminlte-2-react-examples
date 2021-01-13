
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import {
  Content, Row, Box, Col, Button, DataTable,
} from 'adminlte-2-react';

import data from '../../../common/Browsers';

const DataTables = () => {
  const firstColumns = [
    { title: 'Rendering engine', data: 'engine' },
    { title: 'Browser', data: 'browser' },
    { title: 'Platform(s)', data: 'platform' },
    { title: 'Engine version', data: 'engineVersion' },
    { title: 'CSS grade', data: 'cssGrade' },
  ];

  return (
    <Content title="Data Tables" subTitle="advanced tables">
      <Row>
        <Col xs={12}>
          <Box title="Hover Data Table">
            <DataTable
              columns={firstColumns}
              options={{
                paging: true,
                lengthChange: false,
                searching: false,
                ordering: true,
                info: true,
                autoWidth: false,
              }}
              data={data}
              footer
            />
          </Box>
          <Box title="Data Table With Full Features">
            <DataTable
              columns={firstColumns.concat([{
                title: 'Actions',
                data: null,
                render: () => <Button text="Action" className="on-click-event" />,
              }])}
              data={data}
              footer
              options={{
                // select: 'single'
              }}
              onClickEvents={{
                onClickEvent: (data, rowIdx, rowData) => {
                  debugger;
                },
              }}
            />
          </Box>
        </Col>
      </Row>
    </Content>
  );
};

export default DataTables;
