
const simpleOptions = 'simpleOptions = [\'Alabama\', \'Alaska\', \'California\', \'Delaware\', \'Tennessee\', \'Texas\', \'Washington\']';

const select21 = `<Select2
    labelPosition="above"
    label="Minimal"
    value={selectedSelect2Value}
    options={this.simpleOptions}
    buttonRight={<Button icon="fas-info-circle" />}
    onChange={(event) => {
    const { params: { data: value } } = event;
    // debugger;
    this.setState({ selectedSelect2Value: value });
    }}
/>
${simpleOptions}`;

const select22 = `<Select2
    labelPosition="above"
    disabled={select2Disabled}
    label="Disabled"
    defaultValue="Alabama"
    options={this.simpleOptions}
    checkboxLeft
    checkboxLeftProps={{
    onChange: ({ target: { checked: value } }) => {
        this.setState({ select2Disabled: !value });
    },
    defaultValue: !select2Disabled,
    }}
    allowClear
/>
${simpleOptions}`;
const select23 = `<Select2
    labelPosition="above"
    placeholder="Select a state"
    multiple
    label="Multiple"
    options={this.simpleOptions}
/>
${simpleOptions}`;
const select24 = `<Select2
    labelPosition="above"
    label="Disabled Result"
    defaultValue="Alabama"
    onChange={(event) => {
    const { params: { data: { value } } } = event;
    this.setState({ selectedSelect2Value: value });
    }}
    options={this.disabledResultOptions}
/>
disabledResultOptions = [{ value: 'Alabama' },
    { value: 'Alaska' },
    { value: 'California (disabled)', disabled: true },
    { value: 'Delaware' },
    { value: 'Tennessee' },
    { value: 'Texas' },
    { value: 'Washington' }]`;


export {
  select21, select22, select23, select24,
};
