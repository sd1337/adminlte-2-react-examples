import React, { Component } from 'react';
import {
  Content, Row, Col, Box, Inputs,
} from 'adminlte-2-react';

class Sliders extends Component {
  state = {}

  render() {
    return (
      <Content title="Sliders" subTitle="range sliders" browserTitle="AdminLTE 2 | Sliders">
        <Row>
          <Col xs={12}>
            <Box title="RC Slider" type="primary">
              <Row margin>
                <Col sm={6}>
                  {['red', 'light-blue', 'green', 'yellow', 'aqua', 'purple'].map(p => (
                    <React.Fragment key={`slider-colored-${p}`}>
                      <Inputs.Slider defaultValue={[-100, 100]} min={-200} max={200} step={5} color={p} onAfterChange={() => console.log('test lol')} />
                      <p>{`<Slider color="${p}" />`}</p>
                    </React.Fragment>
                  ))}
                </Col>
                <Col sm={6} textCenter>
                  <Inputs.Slider defaultValue={[-100, 100]} min={-200} max={200} step={5} color="red" vertical />
                  <Inputs.Slider defaultValue={[-100, 100]} min={-200} max={200} step={5} color="light-blue" vertical />
                  <Inputs.Slider defaultValue={[-100, 100]} min={-200} max={200} step={5} color="green" vertical />
                  <Inputs.Slider defaultValue={[-100, 100]} min={-200} max={200} step={5} color="yellow" vertical />
                  <Inputs.Slider defaultValue={[-100, 100]} min={-200} max={200} step={5} color="aqua" vertical />
                  <Inputs.Slider defaultValue={[-100, 100]} min={-200} max={200} step={5} color="purple" vertical />
                </Col>
              </Row>
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Sliders;
