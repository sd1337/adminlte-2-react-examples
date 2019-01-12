import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const salesChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Digital Goods',
      backgroundColor: 'rgba(60,141,188,0.9)',
      strokeColor: 'rgba(60,141,188,0.8)',
      pointColor: '#3b8bba',
      pointStrokeColor: 'rgba(60,141,188,1)',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(60,141,188,1)',
      data: [28, 48, 40, 19, 86, 27, 90],
    },
    {
      label: 'Electronics',
      backgroundColor: 'rgb(210, 214, 222)',
      strokeColor: 'rgb(210, 214, 222)',
      pointColor: 'rgb(210, 214, 222)',
      pointStrokeColor: '#c1c7d1',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgb(220,220,220)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const salesChartOptions = {
  // Boolean - If we should show the scale at all
  showScale: true,
  // Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: false,
  // String - Colour of the grid lines
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  // Number - Width of the grid lines
  scaleGridLineWidth: 1,
  // Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,
  // Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: true,
  // Number - Tension of the bezier curve between points
  lineTension: 0.3,
  // Number - Radius of each point dot in pixels
  pointRadius: 0,
  // Boolean - Whether to show a stroke for datasets
  datasetStroke: true,
  // Number - Pixel width of dataset stroke
  datasetStrokeWidth: 2,
  // Boolean - Whether to fill the dataset with a color
  datasetFill: true,
  legend: {
    display: false,
  },
  // String - A leg,end template
  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
  maintainAspectRatio: false,
  // Boolean - whether to make the chart responsive to window resizing
  responsive: true,
};

class MonthlyRecapChart extends Component {
  state = { }

  render() {
    return (
      <Line ref={(c) => { this.chartRef = c; }} data={salesChartData} options={salesChartOptions} height={180} />
    );
  }
}

export default MonthlyRecapChart;
