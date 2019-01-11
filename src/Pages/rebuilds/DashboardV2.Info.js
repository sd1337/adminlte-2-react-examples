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

export {
  infobox1, infobox2, infobox3, infobox4, alert, visitorsReport, infobox5, infobox6, infobox7, infobox8, latestOrders
};
