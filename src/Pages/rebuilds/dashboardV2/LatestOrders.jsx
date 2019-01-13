import React from 'react';
import {
  Box, SimpleTable, Button, Sparkbar,
} from 'adminlte-2-react';

const latestOrdersColumns = [
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
    render: (data, rowData) => <span className={`label label-${rowData.type}`}>{data}</span>,
  },
  {
    title: 'Popularity',
    data: 'popularity',
    render: (data, rowData) => <Sparkbar color={rowData.color} height="20" data={data} />,
  },
];

const latestOrdersData = [
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
];

const LatestOrders = () => (
  <Box
    type="info"
    title="Latest Orders"
    collapsable
    closable
    footer={[<Button key="place-new-order" size="sm" text="Place New Order" flat pullLeft type="info" />, <Button key="view-all-orders" size="sm" text="View All Orders" flat pullRight />]}
  >
    <SimpleTable columns={latestOrdersColumns} data={latestOrdersData} />
  </Box>
);

export default LatestOrders;
