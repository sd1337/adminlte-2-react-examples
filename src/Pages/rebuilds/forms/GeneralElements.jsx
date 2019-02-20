import React from 'react';

import {
  Content, Row, Col, Box, Button, Inputs, Divider,
} from 'adminlte-2-react';

const {
  Text, Checkbox, Radio, Select
} = Inputs;
// const {
//   Text, Checkbox, Radio, Select,
// } = Inputs;

const GeneralElements = () => (
  <Content title="General Form Elements" subTitle="Preview" browserTitle="AdminLTE 2 | General Form Elements">
    <Row>
      <Col md={6}>
        <Box type="primary" title="Quick Example" border footer={<Button type="primary" text="Submit" pullLeft />}>
          <Text name="exampleInputEmail1" placeholder="Enter email" label="Email address" labelPosition="above" />
          <Text name="exampleInputPassword1" placeholder="Password" label="Password" labelPosition="above" inputType="password" />
          <Text name="exampleInputPassword1" label="File input" labelPosition="above" inputType="file" help="Example block-level help text here." />
          <Checkbox label="Check me out" />
        </Box>
        <Box type="success" title="Different Height" border>
          <Text placeholder=".input-lg" size="lg" labelPosition="none" />
          <br />
          <Text placeholder="Default input" labelPosition="none" />
          <br />
          <Text placeholder=".input-sm" size="sm" labelPosition="none" />
        </Box>
        <Box type="danger" title="Different Width" border>
          <Row>
            <Col xs={3}>
              <Text placeholder=".col-xs-3" labelPosition="none" />
            </Col>
            <Col xs={4}>
              <Text placeholder=".col-xs-4" labelPosition="none" />
            </Col>
            <Col xs={5}>
              <Text placeholder=".col-xs-5" labelPosition="none" />
            </Col>
          </Row>
        </Box>
        <Box type="info" title="Input Addon" border>
          <Text labelPosition="none" placeholder="Username" addonLeft="@" />
          <br />
          <Text labelPosition="none" addonRight=".00" />
          <br />
          <Text labelPosition="none" addonLeft="$" addonRight=".00" />
          <h4>With icons</h4>
          <Text labelPosition="none" placeholder="Email" iconLeft="fas-envelope" />
          <br />
          <Text labelPosition="none" iconRight="fas-check" />
          <br />
          <Text labelPosition="none" iconRight="fas-ambulance" iconLeft="fas-dollar-sign" />
          <h4>With checkbox and radio inputs</h4>
          <Row>
            <Col lg={6}>
              <Text checkboxLeft labelPosition="none" />
            </Col>
            <Col lg={6}>
              <Text radioLeft labelPosition="none" />
            </Col>
          </Row>
          <h4>With buttons</h4>
          <p className="margin">
            Large:
            {' '}
            <code>.input-group.input-group-lg</code>
          </p>
          <Text
            size="lg"
            buttonLeft={(
              <Button size="lg" type="warning" text="Action">
                <a href="/">Action</a>
                <a href="/">Another action</a>
                <a href="/">Something else here</a>
                <Divider />
                <a href="/">Separated link</a>
              </Button>
            )}
          />
          <p className="margin">Normal</p>
          <Text buttonLeft={<Button type="danger" text="Action" />} />
          <p className="margin">
            Small
            {' '}
            <code>.input-group.input-group-sm</code>
          </p>
          <Text size="sm" buttonRight={<Button type="info" flat text="Go!" />} />
        </Box>
      </Col>
      <Col md={6}>
        <Box
          type="info"
          title="Horizontal Form"
          bodyClassName="form-horizontal"
          footer={(
            <React.Fragment>
              <Button text="Cancel" pullLeft />
              <Button text="Sign in" type="info" pullRight />
            </React.Fragment>
          )}
          border
        >
          <Text name="inputEmail3" placeholder="Email" label="Email" />
          <Text name="inputPassword3" placeholder="Password" label="Password" inputType="password" />
          <Checkbox label="Remember me" />
        </Box>
        <Box type="warning" title="General Elements" border>
          <Text label="Text" labelPosition="above" placeholder="Enter ..." />
          <Text label="Text Disabled" labelPosition="above" placeholder="Enter ..." disabled />
          <Text label="Textarea" inputType="textarea" rows={3} labelPosition="above" placeholder="Enter ..." />
          <Text label="Textarea Disabled" inputType="textarea" rows={3} labelPosition="above" placeholder="Enter ..." disabled />
          <Text type="success" labelPosition="above" label="Input with success" labelIcon="fas-check" placeholder="Enter ..." help="Help block with success" />
          <Text type="warning" labelPosition="above" label="Input with warning" labelIcon="far-bell" placeholder="Enter ..." help="Help block with warning" />
          <Text type="error" labelPosition="above" label="Input with error" labelIcon="far-times-circle" placeholder="Enter ..." help="Help block with error" />
          <Checkbox text="Checkbox 1" labelXs={0} />
          <Checkbox text="Checkbox 2" labelXs={0} />
          <Checkbox text="Checkbox disabled" labelXs={0} disabled />
          <Radio
            options={[{
              checked: true, id: 'optionsRadios1', value: 'option1', label: 'Option one is this and that—be sure to include why it\'s great',
            },
            { id: 'optionsRadios2', value: 'option2', label: 'Option two can be something else and selecting it will deselect option one' },
            {
              disabled: true, id: 'optionsRadios3', value: 'option3', label: 'Option three is disabled',
            },
            ]}
            name="optionsRadios"
            onChange={() => { }}
          />
          <Select
            label="Select"
            options={[
              { label: 'option 1', value: '1' },
              { label: 'option 2', value: '2' },
              { label: 'option 3', value: '3' },
              { label: 'option 4', value: '4' },
              { label: 'option 5', value: '5' },
            ]}
            value={1}
          />
          <Select
            label="Select Disabled"
            options={[
              { label: 'option 1', value: '1' },
              { label: 'option 2', value: '2' },
              { label: 'option 3', value: '3' },
              { label: 'option 4', value: '4' },
              { label: 'option 5', value: '5' },
            ]}
            disabled
          />
          <Select
            label="Select Multiple"
            options={[
              { label: 'option 1', value: '1' },
              { label: 'option 2', value: '2' },
              { label: 'option 3', value: '3' },
              { label: 'option 4', value: '4' },
              { label: 'option 5', value: '5' },
            ]}
            multiple
          />
          <Select
            label="Select Disabled"
            options={[
              { label: 'option 1', value: '1' },
              { label: 'option 2', value: '2' },
              { label: 'option 3', value: '3' },
              { label: 'option 4', value: '4' },
              { label: 'option 5', value: '5' },
            ]}
            multiple
            disabled
          />
        </Box>
      </Col>
    </Row>
  </Content>
);

export default GeneralElements;
