const infobox1 = `<Infobox
icon="ion-ios-gear-outline"
color="aqua"
number={[90, <small key="temp">%</small>]}
text="CPU TRAFFIC"
/>
</Col>`;
const infobox2 = `<Infobox
icon="fab-google-plus-g"
color="red"
number="41,410"
text="Likes"
/>`;
const infobox3 = `<Infobox
icon="ion-ios-cart-outline"
color="green"
number="Sales"
text="760"
/>`;
const infobox4 = `<Infobox
icon="ion-ios-people-outline"
color="yellow"
number="2,000"
text="New Members"
/>`;

const alert = '<Alert closable type="info" title="Inspection Info" icon="fa-info">Most components will show their jsx code when you click on them! - Try me</Alert>';

const visitorsReport = `<Box type="success" collapsable closable noPadding title="Visitors Report">
<Row>
  <Col md={9} sm={8}>
    <div className="pad">
      <div style={{ height: '325px' }} />
    </div>
  </Col>
  <Col md={3} sm={4}>
    <div className="pad box-pane-right bg-green" style={{ minHeight: '280px' }}>
      <SparklineBox text="Visits" header="8390" chartData={[90, 70, 90, 70, 75, 80, 70]} />
      <SparklineBox text="Referrals" header="30%" chartData={[90, 50, 90, 70, 61, 83, 63]} />
      <SparklineBox text="Organic" header="70%" chartData={[90, 50, 90, 70, 61, 83, 63]} />
    </div>
  </Col>
</Row>
</Box>`;

const infobox5 = `<Infobox
iconColorOnly={false}
icon="ion-ios-pricetag-outline"
color="yellow"
text="Inventory"
number="5,200"
progress={50}
progressText="50% Increase in 30 Days"
/>`;
const infobox6 = `<Infobox
iconColorOnly={false}
icon="ion-ios-heart-outline"
color="green"
text="Mentions"
number="92,050"
progress={20}
progressText="20% Increase in 30 Days"
/>`;
const infobox7 = `<Infobox
iconColorOnly={false}
icon="ion-ios-cloud-download-outline"
color="red"
text="Downloads"
number="114,381"
progress={70}
progressText="70% Increase in 30 Days"
/>`;
const infobox8 = `<Infobox
iconColorOnly={false}
icon="ion-ios-chatbubble-outline"
color="aqua"
text="Direct Messages"
number="163,921"
progress={40}
progressText="40% Increase in 30 Days"
/>`;

const latestOrders = `<Box
type="info"
title="Latest Orders"
collapsable
closable
footer={[<Button key="place-new-order" size="sm" text="Place New Order" flat pullLeft type="info" />, <Button key="view-all-orders" size="sm" text="View All Orders" flat pullRight />]}
>
<SimpleTable columns={this.latestOrdersColumns} data={this.latestOrdersData} />
</Box>

latestOrdersColumns = [
  {
    title: 'Order ID',
    data: 'id',
    render: data => <a href="pages/examples/invoice.html">{data}</a>,
  },
  {
    title: 'Item',
    data: 'item',
  },
  {
    title: 'Status',
    data: 'status',
    render: (data, rowData) => <span className={\`label label-\${rowData.type}\`}>{data}</span>,
  },
  {
    title: 'Popularity',
    data: 'popularity',
    render: (data, rowData) => <Sparkbar color={rowData.color} height="20" data={data} />,
  },
];

latestOrdersData = [
  {
    id: 'OR9842',
    item: 'Call of Duty IV',
    status: 'Shipped',
    popularity: [90, 80, 90, -70, 61, -83, 63],
    color: '#00a65a',
    type: 'success',
  },
  {
    id: 'OR1848',
    item: 'Samsung Smart TV',
    status: 'Pending',
    popularity: [90, 80, -90, 70, 61, -83, 68],
    color: '#f39c12',
    type: 'warning',
  },
  {
    id: 'OR7429',
    item: 'iPhone 6 Plus',
    status: 'Delivered',
    popularity: [90, -80, 90, 70, -61, 83, 63],
    color: '#f56954',
    type: 'danger',
  },
  {
    id: 'OR7429',
    item: 'Samsung Smart TV',
    status: 'Processing',
    popularity: [90, 80, -90, 70, -61, 83, 63],
    color: '#00c0ef',
    type: 'info',
  },
  {
    id: 'OR1848',
    item: 'Samsung Smart TV',
    status: 'Pending',
    popularity: [90, 80, -90, 70, 61, -83, 68],
    color: '#f39c12',
    type: 'warning',
  },
  {
    id: 'OR7429',
    item: 'iPhone 6 Plus',
    status: 'Delivered',
    popularity: [90, -80, 90, 70, -61, 83, 63],
    color: '#f56954',
    type: 'danger',
  },
  {
    id: 'OR9842',
    item: 'Call of Duty IV',
    status: 'Shipped',
    popularity: [90, 80, 90, -70, 61, -83, 63],
    color: '#00a65a',
    type: 'success',
  },
];`;

const progressGroup1 = `<ProgressGroup
text="Add Products to Cart"
maxValue={200}
currentValue={160}
color="aqua"
/>`;
const progressGroup2 = `<ProgressGroup
text="Complete Purchase"
maxValue={400}
currentValue={310}
color="red"
/>`;
const progressGroup3 = `<ProgressGroup
text="Visit Premium Page"
maxValue={800}
currentValue={480}
color="green"
/>`;
const progressGroup4 = `<ProgressGroup
text="Send Inquiries"
maxValue={500}
currentValue={250}
color="yellow"
/>`;

const descriptionBlock1 = `<DescriptionBlock
percentage={17}
percentageColor="green"
header="$35,210.43"
text="TOTAL REVENUE"
indication="up"
/>`;
const descriptionBlock2 = `<DescriptionBlock
percentage={0}
percentageColor="yellow"
header="$10,390.90"
text="TOTAL COST"
indication="left"
/>`;
const descriptionBlock3 = `<DescriptionBlock
percentage={20}
percentageColor="green"
header="$24,813.53"
text="TOTAL PROFIT"
indication="up"
/>`;
const descriptionBlock4 = `<DescriptionBlock
percentage={18}
percentageColor="red"
header="1200"
text="GOAL COMPLETIONS"
indication="down"
/>`;

const browserUsage = `
browserUsageFooter = (
  <NavList pills stacked>
    <NavListItem iconClass="fa-angle-down" color="red" iconLabel="12%" text="United States of America" onClick={() => { }} />
    <NavListItem iconClass="fa-angle-up" color="green" iconLabel="4%" text="India" onClick={() => { }} />
    <NavListItem iconClass="fa-angle-left" color="yellow" iconLabel="0%" text="China" onClick={() => { }} />
  </NavList>
);
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

browserUsageData = {
  labels: ['Chrome', 'IE', 'FireFox', 'Safari', 'Opera', 'Navigator'],
  datasets: [{
    data: [700, 500, 400, 600, 300, 100],
    backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
  }],
};

browserUsageOptions = {
  // Boolean - Whether we should show a stroke on each segment
  segmentShowStroke: true,
  // String - The colour of each segment stroke
  segmentStrokeColor: '#fff',
  // Number - The width of each segment stroke
  segmentStrokeWidth: 1,
  // Number - The percentage of the chart that we cut out of the middle
  cutoutPercentage: 50, // This is 0 for Pie charts
  // Number - Amount of animation steps
  animationSteps: 100,
  // String - Animation easing effect
  animationEasing: 'easeOutBounce',
  // Boolean - Whether we animate the rotation of the Doughnut
  animateRotate: true,
  // Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale: false,
  // Boolean - whether to make the chart responsive to window resizing
  responsive: true,
  // Boolean - whether to maintain the starting aspect
  // ratio or not when responsive, if set to false, will take up entire container
  maintainAspectRatio: false,
  legend:
  {
    display: false,
  },
  // String - A legend template
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
            <i className={\`fa fa-circle-o text-\${mapColor(backgroundColor[i])}\`} />
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
        return \`\${datasets[0].data[index]} \${labels[index]} users\`;
      },
    },
  },
};`;

export {
  infobox1, infobox2, infobox3, infobox4, alert, visitorsReport,
  infobox5, infobox6, infobox7, infobox8, latestOrders, progressGroup1, progressGroup2,
  progressGroup3, progressGroup4, descriptionBlock1, descriptionBlock2,
  descriptionBlock3, descriptionBlock4, browserUsage,
};
