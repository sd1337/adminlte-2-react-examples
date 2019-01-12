import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import uuidv4 from 'uuid';

import {
  Box, Row, Col, NavList, NavListItem,
} from 'adminlte-2-react';

class BrowserUsage extends Component {
  state = {}

  browserUsageData = {
    labels: ['Chrome', 'IE', 'FireFox', 'Safari', 'Opera', 'Navigator'],
    datasets: [{
      data: [700, 500, 400, 600, 300, 100],
      backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
    }],
  };

  browserUsageOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: '#fff',
    segmentStrokeWidth: 1,
    cutoutPercentage: 50, // This is 0 for Pie charts
    animationSteps: 100,
    animationEasing: 'easeOutBounce',
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: false,
    legend:
    {
      display: false,
    },
    legendCallback: (chart) => {
      const mapColor = (color) => {
        switch (color) {
          case '#f56954':
            return 'red';
          case '#00a65a':
            return 'green';
          case '#f39c12':
            return 'yellow';
          case '#00c0ef':
            return 'aqua';
          case '#3c8dbc':
            return 'light-blue';
          case '#d2d6de':
            return 'gray';
          default:
            return 'red';
        }
      };
      const { backgroundColor } = chart.data.datasets[0];

      return (
        <ul className="chart-legend clearfix">
          {chart.data.labels.map((p, i) => (
            <li key={uuidv4()}>
              <i className={`fa fa-circle-o text-${mapColor(backgroundColor[i])}`} />
              {' '}
              {p}
            </li>
          ))}
        </ul>
      );
    },
    tooltips: {
      displayColors: false,
      callbacks: {
        label(tooltipItem, data) {
          const { datasets, labels } = data;
          const { index } = tooltipItem;
          return `${datasets[0].data[index]} ${labels[index]} users`;
        },
      },
    },
  };

  browserUsageFooter = (
    <NavList pills stacked>
      <NavListItem iconClass="fa-angle-down" color="red" iconLabel="12%" text="United States of America" onClick={() => { }} />
      <NavListItem iconClass="fa-angle-up" color="green" iconLabel="4%" text="India" onClick={() => { }} />
      <NavListItem iconClass="fa-angle-left" color="yellow" iconLabel="0%" text="China" onClick={() => { }} />
    </NavList>
  );

  componentDidMount() {
    const browserUsageChartLegend = this.browserUsageChart.chartInstance.generateLegend();
    this.setState({ browserUsageChartLegend });
  }

  render() {
    const { browserUsageChartLegend } = this.state;
    return (
      <Box key="browserUsage" collapsable closable title="Browser Usage" footer={this.browserUsageFooter} footerClass="no-padding">
        <Row>
          <Col md={8}>
            <Pie
              key="browserUsageChart"
              ref={(c) => { this.browserUsageChart = c; }}
              data={this.browserUsageData}
              options={this.browserUsageOptions}
              height={150}
            />
          </Col>
          <Col md={4}>
            {browserUsageChartLegend}
          </Col>
        </Row>
      </Box>

    );
  }
}

export default BrowserUsage;
