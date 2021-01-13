import React, { Component } from 'react';
import { Content, Button } from 'adminlte-2-react';

class Default extends Component {
  state = {
    show: true
  }

  modalFooter =
    <React.Fragment>
      <Button text='Close' pullLeft onClick={() => this.setState({ show: false })} />
      <Button type='primary' text='Save changes' />
    </React.Fragment>;

  render() {
    const { show } = this.state;
    return (
      <Content title='Default Modal' modal modalCloseTo='/ui-elements/modals' modalFooter={this.modalFooter} show={show}>
        One fine body...
      </Content>
    );
  }
}

export default Default;