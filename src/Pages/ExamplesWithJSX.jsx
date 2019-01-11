import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/styles/prism';

import AdminLTE, {
  Content, Row, Col, Box, Infobox, DescriptionBlock, ProgressGroup, ProductList, ProductListItem,
} from 'adminlte-2-react';


class ExamplesWithJSX extends Component {
  state = {}

  static mapComponent({ component, text, title }) {
    return (
      <Row>
        <Col xs={12}>
          <Box title={title} collapsable>
            <Col xs={6}>
              <Box>
                <div style={{ padding: '5px', height: '100%', background: 'rgb(245, 242, 240)' }}>
                  {component}
                </div>
              </Box>
            </Col>
            <Col xs={6}>
              <Box title="jsx">
                <SyntaxHighlighter language="jsx" style={monoBlue}>{text}</SyntaxHighlighter>
              </Box>
            </Col>
          </Box>
        </Col>
      </Row>
    );
  }

  examples = [
    {
      title: 'Infobox',
      component: <Infobox
        icon="ion-ios-gear-outline"
        color="aqua"
        number={[90, <small key="temp">%</small>]}
        text="CPU TRAFFIC"
      />,
      text: `<Infobox
  icon="ion-ios-gear-outline"
  color="aqua"
  number={[90, <small key="temp">%</small>]}
  text="CPU TRAFFIC"
/>`,
    },
    {
      title: 'Advanced Box',
      component: <Box
        title="Monthly Recap Report"
        collapsable
        closable
        options={<ul />}
        footer={(
          <Row>
            <Col sm={3} xs={6}>
              <DescriptionBlock
                percentage={17}
                percentageColor="green"
                header="$35,210.43"
                text="TOTAL REVENUE"
                indication="up"
              />
            </Col>
            <Col sm={3} xs={6}>
              <DescriptionBlock
                percentage={0}
                percentageColor="yellow"
                header="$10,390.90"
                text="TOTAL COST"
                indication="left"
              />
            </Col>
            <Col sm={3} xs={6}>
              <DescriptionBlock
                percentage={20}
                percentageColor="green"
                header="$24,813.53"
                text="TOTAL PROFIT"
                indication="up"
              />
            </Col>
            <Col sm={3} xs={6}>
              <DescriptionBlock
                percentage={18}
                percentageColor="red"
                header="1200"
                text="GOAL COMPLETIONS"
                indication="down"
              />
            </Col>
          </Row>
        )}
      >
        <Row>
          <Col md={8}>
            <p className="text-center">
              <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
            </p>

            <div className="chart">
              {/* Sales Chart Canvas */}
              <canvas id="salesChart" style={{ height: '180px' }} />
            </div>
          </Col>
          <Col md={4}>
            <p className="text-center">
              <strong>Goal Completion</strong>
            </p>
            <ProgressGroup text="Add Products to Cart" maxValue={200} currentValue={160} color="aqua" />
            <ProgressGroup text="Complete Purchase" maxValue={400} currentValue={310} color="red" />
            <ProgressGroup text="Visit Premium Page" maxValue={800} currentValue={480} color="green" />
            <ProgressGroup text="Send Inquiries" maxValue={500} currentValue={250} color="yellow" />
          </Col>
        </Row>
      </Box>,
      text: `<Box
  title="Monthly Recap Report"
  collapsable
  closable
  options={<ul />}
  footer={(
    <Row>
      <Col sm={3} xs={6}>
        <DescriptionBlock
          percentage={17}
          percentageColor="green"
          header="$35,210.43"
          text="TOTAL REVENUE"
          indication="up"
        />
      </Col>
      <Col sm={3} xs={6}>
        <DescriptionBlock
          percentage={0}
          percentageColor="yellow"
          header="$10,390.90"
          text="TOTAL COST"
          indication="left"
        />
      </Col>
      <Col sm={3} xs={6}>
        <DescriptionBlock
          percentage={20}
          percentageColor="green"
          header="$24,813.53"
          text="TOTAL PROFIT"
          indication="up"
        />
      </Col>
      <Col sm={3} xs={6}>
        <DescriptionBlock
          percentage={18}
          percentageColor="red"
          header="1200"
          text="GOAL COMPLETIONS"
          indication="down"
        />
      </Col>
    </Row>
  )}
>
  <Row>
    <Col md={8}>
      <p className="text-center">
        <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
      </p>

      <div className="chart">
        {/* Sales Chart Canvas */}
        <canvas id="salesChart" style={{ height: "180px" }} />
      </div>
    </Col>
    <Col md={4}>
      <p className="text-center">
        <strong>Goal Completion</strong>
      </p>
      <ProgressGroup text="Add Products to Cart" maxValue={200} currentValue={160} color="aqua" />
      <ProgressGroup text="Complete Purchase" maxValue={400} currentValue={310} color="red" />
      <ProgressGroup text="Visit Premium Page" maxValue={800} currentValue={480} color="green" />
      <ProgressGroup text="Send Inquiries" maxValue={500} currentValue={250} color="yellow" />
    </Col>
  </Row>
</Box>`,
    },
    {
      title: 'ProductList',
      component: <ProductList inBox>
        <ProductListItem image="img/default-50x50.gif" title="Samsung TV" label="$1800" labelType="warning" description={'Samsung 32" 1080p 60Hz LED Smart HDTV.'} />
        <ProductListItem image="img/default-50x50.gif" title="Bicycle" label="$700" labelType="info" description={'26" Mongoose Dolomite Men\'s 7-speed, Navy Blue.'} />
        <ProductListItem image="img/default-50x50.gif" title="Xbox One" label="$350" labelType="danger" description="Xbox One Console Bundle with Halo Master Chief Collection." />
        <ProductListItem image="img/default-50x50.gif" title="PlayStation 4" label="$399" labelType="success" description="PlayStation 4 500GB Console (PS4)" />
      </ProductList>,
      text: `<ProductList inBox>
  <ProductListItem image='img/default-50x50.gif' title='Samsung TV' label='$1800' labelType='warning' description={"Samsung 32\" 1080p 60Hz LED Smart HDTV."} />
  <ProductListItem image='img/default-50x50.gif' title='Bicycle' label='$700' labelType='info' description={'26" Mongoose Dolomite Men\'s 7-speed, Navy Blue.'} />
  <ProductListItem image='img/default-50x50.gif' title='Xbox One' label='$350' labelType='danger' description="Xbox One Console Bundle with Halo Master Chief Collection." />
  <ProductListItem image='img/default-50x50.gif' title='PlayStation 4' label='$399' labelType='success' description="PlayStation 4 500GB Console (PS4)" />
</ProductList>`,
    },
  ]

  render() {
    return (
      <Content title="Examples with JSX">
        {this.examples.map(ExamplesWithJSX.mapComponent)}
      </Content>
    );
  }
}

export default ExamplesWithJSX;
