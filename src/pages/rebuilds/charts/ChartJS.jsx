import React, { Component } from 'react';
import * as AdminLTE from 'adminlte-2-react';

class ChartJS extends Component {
  state = {}
  render() {
    return (
      <AdminLTE.Content title="ChartJS" subTitle="Preview sample">
        <AdminLTE.Row>
          <AdminLTE.Col classes={[{ size: "md", span: 6 }]}>
            <AdminLTE.Box type="primary" title="Area Chart" closable collapsable></AdminLTE.Box>
            <AdminLTE.Box type="danger" title="Donut Chart" closable collapsable></AdminLTE.Box>
          </AdminLTE.Col>
          <AdminLTE.Col classes={[{ size: "md", span: 6 }]}>
            <AdminLTE.Box type="info" title="Line Chart" closable collapsable></AdminLTE.Box>
            <AdminLTE.Box type="success" title="Bar Chart" closable collapsable></AdminLTE.Box>
          </AdminLTE.Col>
        </AdminLTE.Row>
      </AdminLTE.Content>);
  }
}

export default ChartJS;