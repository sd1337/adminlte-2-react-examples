import React, { Component } from 'react';
import uuidv4 from 'uuid';
import {
  Content, Row, Col, Box, Margin, Button, ButtonGroup, Divider,
} from 'adminlte-2-react';

class Buttons extends Component {
  state = {}

  // eslint-disable-next-line class-methods-use-this
  initCap(p) {
    return p.toLowerCase().replace(/(?:^|\s)[a-z]/g, m => m.toUpperCase());
  }

  render() {
    return (
      <Content title="Buttons" subTitle="Control panel">
        <Row>
          <Col md={12}>
            <Box icon="far-edit" title="Buttons" type="primary">
              <p>
                Various types of buttons. Using the base class
                {' '}
                <code>.btn</code>
              </p>
              <table className="table table-bordered text-center">
                <tbody>
                  <tr>
                    <th>Normal</th>
                    <th>
                      Large
                      {' '}
                      <code>.btn-lg</code>
                    </th>
                    <th>
                      Small
                      {' '}
                      <code>.btn-sm</code>
                    </th>
                    <th>
                      X-Small
                      {' '}
                      <code>.btn-xs</code>
                    </th>
                    <th>
                      Flat
                      {' '}
                      <code>.btn-flat</code>
                    </th>
                    <th>
                      Disabled
                      {' '}
                      <code>.disabled</code>
                    </th>
                  </tr>
                  {['default', 'primary', 'success', 'info', 'danger', 'warning'].map(p => (
                    <tr key={uuidv4()}>
                      <td><Button block type={p} text={this.initCap(p)} /></td>
                      <td><Button block type={p} text={this.initCap(p)} size="lg" /></td>
                      <td><Button block type={p} text={this.initCap(p)} size="sm" /></td>
                      <td><Button block type={p} text={this.initCap(p)} size="xs" /></td>
                      <td><Button block type={p} text={this.initCap(p)} flat /></td>
                      <td><Button block type={p} text={this.initCap(p)} disabled /></td>
                      <td><Button type={p} icon="fa-edit" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Box title="Block Buttons">
              <Button block text=".btn-block" />
              <Button block flat text=".btn-block .btn-flat" />
              <Button block size="sm" text=".btn-block .btn-sm" />
            </Box>
            <Box title="Horizontal Button Group" padding>
              <p>
                Horizontal button groups are easy to create with bootstrap. Just add your buttons inside
                {' '}
                <code>&lt;div class=&quot;btn-group&quot;&gt;&lt;/div&gt;</code>
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Button</th>
                    <th>Icons</th>
                    <th>Flat</th>
                    <th>Dropdown</th>
                  </tr>
                </thead>
                <tbody>
                  {['default', 'info', 'danger', 'warning', 'success'].map(p => (
                    <tr key={uuidv4()}>
                      <td>
                        <ButtonGroup>
                          <Button type={p} text="Left" />
                          <Button type={p} text="Middle" />
                          <Button type={p} text="Right" />
                        </ButtonGroup>

                      </td>
                      <td>
                        <ButtonGroup>
                          <Button type={p} icon="fas-align-left" />
                          <Button type={p} icon="fas-align-center" />
                          <Button type={p} icon="fas-align-right" />
                        </ButtonGroup>

                      </td>
                      <td>
                        <ButtonGroup>
                          <Button type={p} flat icon="fas-align-left" />
                          <Button type={p} flat icon="fas-align-center" />
                          <Button type={p} flat icon="fas-align-right" />
                        </ButtonGroup>

                      </td>
                      <td>
                        <ButtonGroup>
                          <Button type={p} text="1" />
                          <Button type={p} text="2" />
                          <Button type={p}>
                            <a href="/">Dropdown link</a>
                            <a href="/">Dropdown link</a>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
            <Box title="Button Addon">
              {/* TODO: Button forms when */}
              <p>With dropdown</p>
              <p>Normal</p>
              <p>Flat</p>
            </Box>
            <Box title="Split buttons">
              <p>Normal split buttons:</p>
              <Margin>
                {['default', 'info', 'danger', 'warning', 'success'].map(p => (
                  <Button split key={uuidv4()} type={p} text="Action">
                    <a href="/">Action</a>
                    <a href="/">Another action</a>
                    <a href="/">Something else here</a>
                    <Divider />
                    <a href="/">Separated link</a>
                  </Button>
                ))}
              </Margin>
            </Box>
            {/* TODO: add social buttons */}
          </Col>
          <Col md={6}>
            <Box title="Application Buttons">
              <p>
                Add the classes
                {' '}
                <code>.btn.btn-app</code>
                {' '}
                to an
                {' '}
                <code>&lt;a&gt;</code>
                {' '}
                tag to achieve the following:
              </p>
              <Button text="Edit" icon="fas-edit" app />
              <Button text="Play" icon="fas-play" app />
              <Button text="Repeat" icon="fas-redo" app />
              <Button text="Pause" icon="fas-pause" app />
              <Button text="Save" icon="fas-save" app />
              <Button text="Notifications" icon="fas-bullhorn" app badge="yellow" badgeText="3" />
              <Button text="Products" icon="fas-barcode" app badge="green" badgeText="300" />
              <Button text="Users" icon="fas-users" app badge="purple" badgeText="891" />
              <Button text="Orders" icon="fas-inbox" app badge="teal" badgeText="67" />
              <Button text="Inbox" icon="fas-envelope" app badge="aqua" badgeText="12" />
              <Button text="Likes" icon="far-heart" app badge="red" badgeText="531" />
            </Box>
            <Box title="Different Colors">
              <p>
                Mix and match with various background colors. Use base class
                {' '}
                <code>.btn</code>
                {' '}
                and add any available
                <code>.bg-*</code>
                {' '}
                class

              </p>
              <p>
                <Button color="maroon" flat margin text=".btn.bg-maroon.btn-flat" />
                <Button color="purple" flat margin text=".btn.bg-purple.btn-flat" />
                <Button color="navy" flat margin text=".btn.bg-navy.btn-flat" />
                <Button color="orange" flat margin text=".btn.bg-orange.btn-flat" />
                <Button color="olive" flat margin text=".btn.bg-olive.btn-flat" />
              </p>
              <p>
                <Button color="maroon" margin text=".btn.bg-maroon" />
                <Button color="purple" margin text=".btn.bg-purple" />
                <Button color="navy" margin text=".btn.bg-navy" />
                <Button color="orange" margin text=".btn.bg-orange" />
                <Button color="olive" margin text=".btn.bg-olive" />
              </p>
            </Box>
            <Box title="Vertical button group" padding>
              <p>
                Vertical button groups are easy to create with bootstrap. Just add your buttons
                  inside
                {' '}
                <code>&lt;div class=&quot;btn-group-vertical&quot;&gt;&lt;/div&gt;</code>
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Button</th>
                    <th>Icons</th>
                    <th>Flat</th>
                    <th>Dropdown</th>
                  </tr>
                </thead>
                <tbody>
                  {['default', 'info', 'danger', 'warning', 'success'].map(p => (
                    <tr key={uuidv4()}>
                      <td>
                        <ButtonGroup vertical>
                          <Button type={p} text="Top" />
                          <Button type={p} text="Middle" />
                          <Button type={p} text="Bottom" />
                        </ButtonGroup>
                      </td>
                      <td>
                        <ButtonGroup vertical>
                          <Button type={p} icon="fas-align-left" />
                          <Button type={p} icon="fas-align-center" />
                          <Button type={p} icon="fas-align-right" />
                        </ButtonGroup>
                      </td>
                      <td>
                        <ButtonGroup vertical>
                          <Button type={p} flat icon="fas-align-left" />
                          <Button type={p} flat icon="fas-align-center" />
                          <Button type={p} flat icon="fas-align-right" />
                        </ButtonGroup>
                      </td>
                      <td>
                        <ButtonGroup vertical>
                          <Button type={p} text="1" />
                          <Button type={p} text="2" />
                          <Button type={p}>
                            <a href="/">Dropdown link</a>
                            <a href="/">Dropdown link</a>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Buttons;
