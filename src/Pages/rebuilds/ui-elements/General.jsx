import React, { Component } from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';
import uuidv4 from 'uuid';

import {
  Content, Row, Col, Box, Alert, Callout, ProgressBar, Tabs, TabContent,
} from 'adminlte-2-react';

import './General.css';


class General extends Component {
  colorPaletteBoxStyle = {
    height: '35px',
    lineHeight: '35px',
    textAlign: 'center',
  }

  // eslint-disable-next-line class-methods-use-this
  renderPalette(colors) {
    return colors.map(p => (
      <Col key={uuidv4()} sm={4} md={2}>
        <h4 className="text-center">{p[0]}</h4>
        <div className="color-palette-set">
          <div className={`bg-${p[1]} disabled color-palette`}><span>Disabled</span></div>
          <div className={`bg-${p[1]} color-palette`}><span>{p[2]}</span></div>
          <div className={`bg-${p[1]}-active color-palette`}><span>Active</span></div>
        </div>
      </Col>
    ));
  }

  render() {
    return (
      <Content title="General UI" subTitle="Preview of UI elements">
        <Box icon="fas-tag" title="Color Palette" className="color-palette-box">
          <Row>
            {this.renderPalette([
              ['Primary', 'light-blue', '#3c8dbc'],
              ['Info', 'aqua', '#00c0ef'],
              ['Success', 'green', '#00a65a'],
              ['Warning', 'yellow', '#f39c12'],
              ['Danger', 'red', '#f56954'],
              ['Gray', 'gray', '#d2d6de'],
            ])}
          </Row>
          <Row>
            {this.renderPalette([
              ['Navy', 'navy', '#3c8dbc'],
              ['Teal', 'teal', '#001F3F'],
              ['Purple', 'purple', '#605ca8'],
              ['Orange', 'orange', '#ff851b'],
              ['Maroon', 'maroon', '#D81B60'],
              ['Black', 'black', '#111111'],
            ])}
          </Row>
        </Box>
        <h2 className="page-header">Alerts and Callouts</h2>
        <Row>
          <Col md={6}>
            <Box icon="fas-exclamation-triangle" title="Alerts">
              <Alert closable type="danger" icon="fa-ban" title="Alert!">
                Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire
                    soul, like these sweet mornings of spring which I enjoy with my whole heart.
              </Alert>
              <Alert closable type="info" icon="fa-info" title="Alert!">
                Info alert preview. This alert is dismissable.
              </Alert>
              <Alert closable type="warning" icon="fa-exclamation-triangle" title="Alert!">
                Warning alert preview. This alert is dismissable.
              </Alert>
              <Alert closable type="success" icon="fa-check" title="Alert!">
                Success alert preview. This alert is dismissable.
              </Alert>
            </Box>
          </Col>
          <Col md={6}>
            <Box icon="fas-bullhorn" title="Callouts">
              <Callout title="I am a danger callout!" type="danger">
                There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul,
                                    like these sweet mornings of spring which I enjoy with my whole heart.
              </Callout>
              <Callout title="I am an info callout!" type="info">Follow the steps to continue to payment.</Callout>
              <Callout title="I am a warning callout!" type="warning">This is a yellow callout.</Callout>
              <Callout title="I am a success callout!" type="success">This is a green callout.</Callout>
            </Box>
          </Col>
        </Row>
        <h2 className="page-header">AdminLTE Custom Tabs</h2>
        {/* TODO: Add Tab Menu */}
        <Row>
          <Col md={6}>
            <Tabs defaultActiveKey="tab_1">
              <TabContent title="Tab 1" eventKey="tab_1">
                <b>How to use:</b>
                <p>
                  Exactly like the original bootstrap tabs except you should use
                    the custom wrapper
                  {' '}
                  <code>.nav-tabs-custom</code>
                  {' '}
                  to achieve this style.

                </p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole heart.
                I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so happy,
                my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
                that I neglect my talents. I should be incapable of drawing a single stroke
                at the present moment; and yet I feel that I never was a greater artist than now.
              </TabContent>
              <TabContent title="Tab 2" eventKey="tab_2">
                The European languages are members of the same family. Their separate existence is a myth.
                For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
                in their grammar, their pronunciation and their most common words. Everyone realizes why a
                new common language would be desirable: one could refuse to pay expensive translators. To
                achieve this, it would be necessary to have uniform grammar, pronunciation and more common
                words. If several languages coalesce, the grammar of the resulting language is more simple
                and regular than that of the individual languages.
              </TabContent>
              <TabContent title="Tab 3" eventKey="tab_3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&quot;s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </TabContent>
            </Tabs>
          </Col>
          <Col md={6}>
            <Tabs activeKey="tab_1" pullRight icon="fas-th" title="Custom Tabs" titleLeft>
              <TabContent title="Tab 1" eventKey="tab_1">
                <b>How to use:</b>
                <p>
                  Exactly like the original bootstrap tabs except you should use
                    the custom wrapper
                  {' '}
                  <code>.nav-tabs-custom</code>
                  {' '}
                  to achieve this style.

                </p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole heart.
                I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so happy,
                my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
                that I neglect my talents. I should be incapable of drawing a single stroke
                at the present moment; and yet I feel that I never was a greater artist than now.
              </TabContent>
              <TabContent title="Tab 2" eventKey="tab_2">
                The European languages are members of the same family. Their separate existence is a myth.
                For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
                in their grammar, their pronunciation and their most common words. Everyone realizes why a
                new common language would be desirable: one could refuse to pay expensive translators. To
                achieve this, it would be necessary to have uniform grammar, pronunciation and more common
                words. If several languages coalesce, the grammar of the resulting language is more simple
                and regular than that of the individual languages.
              </TabContent>
              <TabContent title="Tab 3" eventKey="tab_3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&quot;s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </TabContent>
            </Tabs>
          </Col>
        </Row>
        <h2 className="page-header">Progress Bars</h2>
        <Row>
          <Col md={6}>
            <Box solid title="Progress Bars Different Sizes">
              <p><code>.progress</code></p>
              <ProgressBar type="primary" striped value={40} text="40% Complete (success)" />
              <p>
                Class:
                {' '}
                <code>.sm</code>
              </p>
              <ProgressBar type="success" striped sm value={20} text="20% Complete" />
              <p>
                Class:
                {' '}
                <code>.xs</code>
              </p>
              <ProgressBar type="warning" striped xs value={60} text="60% Complete (warning)" />
              <p>
                Class:
                {' '}
                <code>.xxs</code>
              </p>
              <ProgressBar type="danger" striped xxs value={60} text="60% Complete (warning)" />
            </Box>
          </Col>
          <Col md={6}>
            <Box solid title="Progress Bars">
              <ProgressBar color="green" value={40} text="40% Complete (success)" />
              <ProgressBar color="aqua" value={20} text="20% Complete" />
              <ProgressBar color="yellow" value={60} text="60% Complete (warning)" />
              <ProgressBar color="red" value={80} text="80% Complete" />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Box solid textCenter title="Vertical Progress Bars Different Sizes">
              <p>
                By adding the class
                {' '}
                <code>.vertical</code>
                {' '}
                and
                {' '}
                <code>.progress-sm</code>
                ,
                {' '}
                <code>.progress-xs</code>
                {' '}
                or
                <code>.progress-xxs</code>
                {' '}
                we achieve:

              </p>
              <ProgressBar type="primary" vertical active striped value={40} text="40%" />
              <ProgressBar type="success" vertical active sm value={100} text="100%" />
              <ProgressBar type="warning" striped vertical active xs value={60} text="60%" />
              <ProgressBar type="info" striped vertical active xxs value={60} text="60%" />
            </Box>
          </Col>
          <Col md={6}>
            <Box solid textCenter title="Vertical Progress bars">
              <p>
                By adding the class
                {' '}
                <code>.vertical</code>
                {' '}
                we achieve:
              </p>
              <ProgressBar color="green" vertical active value={40} text="40%" />
              <ProgressBar color="aqua" vertical active value={20} text="20%" />
              <ProgressBar color="yellow" vertical active value={60} text="60%" />
              <ProgressBar color="red" vertical active value={80} text="80%" />
            </Box>
          </Col>
        </Row>
        <h2 className="page-header">Bootstrap Accordion &amp; Carousel</h2>
        <Row>
          <Col xs={12}>
            <Alert closable type="danger" icon="fa-ban" title="Alert!">
              Carousel and accordion are still work in progress and currently broken, if you already need those components look at
              {' '}
              <code>react-bootstrap</code>
              {' '}
              <a href="https://react-bootstrap.github.io/components/panel/" target="_blank" rel="noopener noreferrer">PanelGrouo</a>
              {' and '}
              <a href="https://react-bootstrap.github.io/components/carousel/" target="_blank" rel="noopener noreferrer">Carousel</a>
              {' Components'}
            </Alert>
          </Col>
          {/* TODO: fix accordion */}
          <Col md={6}>
            <Box solid title="Collapsible Accordion">
              <PanelGroup
                accordion
                id="accordion-controlled-example"
                // onSelect={this.handleSelect}
                // activeKey="1"
              >
                <Panel eventKey="1">
                  <Panel.Heading>
                    <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&quot;t heard of them accusamus labore sustainable VHS.</Panel.Body>
                </Panel>
                <Panel eventKey="2">
                  <Panel.Heading>
                    <Panel.Title toggle>Collapsible Group Danger</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&quot;t heard of them accusamus labore sustainable VHS.</Panel.Body>
                </Panel>
                <Panel eventKey="3">
                  <Panel.Heading>
                    <Panel.Title toggle>Collapsible Group Success</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&quot;t heard of them accusamus labore sustainable VHS.</Panel.Body>
                </Panel>
              </PanelGroup>
            </Box>
          </Col>
          {/* TODO: implement carousel */}
          <Col md={6}>
            <Box solid title="Carousel" />
          </Col>
        </Row>
        <h2 className="page-header">Typography</h2>
        <Row>
          <Col md={6}>
            <Box solid icon="fas-text-width" title="Headlines">
              <h1>h1. Bootstrap heading</h1>
              <h2>h2. Bootstrap heading</h2>
              <h3>h3. Bootstrap heading</h3>
              <h4>h4. Bootstrap heading</h4>
              <h5>h5. Bootstrap heading</h5>
              <h6>h6. Bootstrap heading</h6>
            </Box>
          </Col>
          <Col md={6}>
            <Box solid icon="fas-text-width" title="Text Emphasis">
              <p className="lead">Lead to emphasize importance</p>
              <p className="text-green">Text green to emphasize success</p>
              <p className="text-aqua">Text aqua to emphasize info</p>
              <p className="text-light-blue">Text light blue to emphasize info (2)</p>
              <p className="text-red">Text red to emphasize danger</p>
              <p className="text-yellow">Text yellow to emphasize warning</p>
              <p className="text-muted">Text muted to emphasize general</p>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Box solid icon="fas-text-width" title="Block Quotes">
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <small>
                  Someone famous in
                  {' '}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </blockquote>
            </Box>
          </Col>
          <Col md={6}>
            <Box solid icon="fas-text-width" title="Block Quotes Pulled Right">
              <blockquote className="pull-right">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <small>
                  Someone famous in
                  {' '}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </blockquote>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Box solid icon="fas-text-width" title="Unordered List">
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Box>
          </Col>
          <Col md={4}>
            <Box solid icon="fas-text-width" title="Ordered List">
              <ol>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ol>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ol>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ol>
            </Box>
          </Col>
          <Col md={4}>
            <Box solid icon="fas-text-width" title="Unstyled List">
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Box solid icon="fas-text-width" title="Description Horizontal">
              <dl>
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
                <dt>Euismod</dt>
                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                <dt>Malesuada porta</dt>
                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
              </dl>
            </Box>
          </Col>
          <Col md={6}>
            <Box solid icon="fas-text-width" title="Description">
              <dl className="dl-horizontal">
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
                <dt>Euismod</dt>
                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                <dt>Malesuada porta</dt>
                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                <dt>Felis euismod semper eget lacinia</dt>
                <dd>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                                    sit amet risus.
                </dd>
              </dl>
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default General;
