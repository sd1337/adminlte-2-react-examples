import React, { Component } from 'react';
import {
  Content, Row, Col, Infobox, Infobox2, Box,
} from 'adminlte-2-react';
// import Box from 'adminlte-react/src/components/content/Box';

class Widgets extends Component {
  state = {}

  render() {
    return (
      <Content title="Widgets" subTitle="Preview page" browserTitle="AdminLTE | Widgets">
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Infobox
              icon="far-envelope"
              color="aqua"
              number="1,410"
              text="Messages"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Infobox
              icon="far-flag"
              color="green"
              number="410"
              text="Bookmarks"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Infobox
              icon="far-copy"
              color="yellow"
              number="Uploads"
              text="13,648"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Infobox
              icon="far-star"
              color="red"
              number="93,139"
              text="Likes"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Infobox
              icon="far-bookmark"
              color="aqua"
              number="41,410"
              text="Bookmarks"
              progress={70}
              progressText="70% Increase in 30 Days"
              iconColorOnly={false}
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Infobox
              icon="far-thumbs-up"
              color="green"
              number="41,410"
              text="Likes"
              progress={70}
              progressText="70% Increase in 30 Days"
              iconColorOnly={false}
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Infobox
              icon="far-calendar-alt"
              color="yellow"
              number="41,410"
              text="EVENTS"
              progress={70}
              progressText="70% Increase in 30 Days"
              iconColorOnly={false}
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Infobox
              icon="far-comments"
              color="red"
              number="41,410"
              text="COMMENTS"
              progress={70}
              progressText="70% Increase in 30 Days"
              iconColorOnly={false}
            />
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6} xs={12}>
            <Infobox2 icon="fas-shopping-cart" title="150" text="New Orders" color="aqua" footerText="More Info" />
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Infobox2 icon="ion-ios-stats" title="53" subTitle="%" text="Bounce Rate" color="green" footerText="More Info" />
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Infobox2 icon="ion-person-add" title="44" text="User Registrations" color="yellow" footerText="More Info" />
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Infobox2 icon="ion-pie-graph" title="65" text="Unique Visitors" color="red" footerText="More Info" />
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6} xs={12}>
            <Box collapsable collapsed title="Expandable">
              The body of the box
            </Box>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Box closable title="Removable" type="success">
              The body of the box
            </Box>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Box collapsable title="Collapsable" type="warning">
              The body of the box
            </Box>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Box loaded={false} title="Loading state" type="danger">
              The body of the box
            </Box>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6} xs={12}>
            <Box solid collapsable collapsed title="Expandable">
              The body of the box
            </Box>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Box solid closable title="Removable" type="success">
              The body of the box
            </Box>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Box solid collapsable title="Collapsable" type="warning">
              The body of the box
            </Box>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Box solid loaded={false} title="Loading state" type="danger">
              The body of the box
            </Box>
          </Col>
        </Row>
      </Content>
);
  }
}

export default Widgets;
