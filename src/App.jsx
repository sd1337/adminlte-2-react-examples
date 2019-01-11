import React, { Component } from 'react';
import AdminLTE, { Sidebar } from 'adminlte-2-react';
import ComponentBuilder from './Pages/ComponentBuilder';
import ExamplesWithJSX from './Pages/ExamplesWithJSX';

const { Item } = Sidebar;
class App extends Component {
  state={}

  render() {
    return (
      <AdminLTE browserTitle="alte-2-react-examples" theme="black" >
        <Sidebar.Core>
  <Item icon="fas-pencil-ruler" text="Component Builder" link="/component-builder" />
  <Item icon="fas-code" text="Examples with JSX" link="/examples-with-jsx" />
        </Sidebar.Core>
        <ComponentBuilder path="/component-builder" />
        <ExamplesWithJSX path="/examples-with-jsx" />
      </AdminLTE>
    );
  }
}

export default App;
