import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AdminLTE, { Sidebar, AsyncComponent } from 'adminlte-2-react';
import ComponentBuilder from './pages/ComponentBuilder';
import ExamplesWithJSX from './pages/ExamplesWithJSX';

import Dashboard from './pages/rebuilds/Dashboard';
import DashboardV2 from './pages/rebuilds/DashboardV2';
import ChartJS from './pages/rebuilds/charts/ChartJS';
import Widgets from './pages/rebuilds/Widgets';
import Default from './pages/rebuilds/ui-elements/modals/Default';

const { Item, Header } = Sidebar;
class App extends Component {
  state={}

  render() {
    return (
      <AdminLTE browserTitle="adminlte-2-react-examples" theme="black">
        <Sidebar.Core>
          <Item icon="fas-pencil-ruler" text="Component Builder" link="/component-builder" />
          <Item icon="fas-code" text="Examples with JSX" link="/examples-with-jsx" />
          <Header text="MAIN NAVIGATION" />
          <Item active text="Dashboard" icon="fa-tachometer-alt">
            <Item text="Dashboard v1" link="/dashboard" />
            <Item text="Dashboard v2" link="/dashboardv2" />
          </Item>
          <Item link="#" text="Layout Options" icon="far-copy" labels={{ type: 'primary', text: 4 }}>
            <Item text="Top Navigation" link="/top-nav" />
            <Item text="Boxed" link="/boxed" />
            <Item text="Fixed" link="/fixed" />
            <Item text="Collapsed Sidebar" link="/collapsed-sidebar" />
          </Item>
          <Item link="/widgets" text="Widgets" icon="fa-th" labels={[{ color: 'green', text: 'new', small: true }]} />
          <Item text="Charts" icon="fa-chart-pie">
            <Item text="ChartJS" link="/chart-js" />
            <Item text="Morris" link="/morris" />
            <Item text="Flot" link="/flot" />
          </Item>
          <Item link="#" text="UI Elements" icon="fa-laptop">
            <Item text="General" link="/ui-elements/general" />
            <Item text="Icons" link="/ui-elements/icons" />
            <Item text="Buttons" link="/ui-elements/buttons" />
            <Item text="Sliders" link="/ui-elements/sliders" />
            <Item text="Timeline" link="/ui-elements/timeline" />
            <Item text="Modals" link="/ui-elements/modals" />
          </Item>
          <Item link="#" text="Forms" icon="fa-edit">
            <Item text="General Elements" link="/forms/general" />
            <Item text="Advanced Elements" link="/forms/advanced" />
            <Item text="Editors" link="/forms/editors" />
          </Item>
          <Item link="#" text="Tables" icon="fa-table">
            <Item text="Simple tables" link="/tables/simple" />
            <Item text="Data tables" link="/tables/data" />
          </Item>
          <Item link="/calendar" text="Calendar" icon="fa-calendar" labels={[{ small: true, text: 3, color: 'red' }, { small: true, text: 17, color: 'blue' }]} />
          <Item link="/mailbox" text="Mailbox" icon="fa-envelope" labels={[{ small: true, text: 12, color: 'yellow' }, { small: true, text: 16, color: 'green' }, { small: true, text: 5, color: 'red' }]} />
          <Item link="#" text="Examples" icon="fa-folder">
            <Item text="Invoice" link="/examples/invoice" />
            <Item text="Profile" link="/examples/profile" />
            <Item text="Login" link="/examples/login" />
            <Item text="Register" link="/examples/register" />
            <Item text="Lockscreen" link="/examples/lockscreen" />
            <Item text="404 Error" link="/examples/404-error" />
            <Item text="500 Error" link="/examples/500-error" />
            <Item text="Blank Page" link="/examples/blank-page" />
            <Item text="Pace Page" link="/examples/pace-page" />
          </Item>
          <Item link="#" text="Multilevel" icon="fa-share">
            <Item text="Level One" link="/mulitlevel/one" />
            <Item text="Level One" link="/mulitlevel/one">
              <Item text="Level Two" link="/mulitlevel/two" />
              <Item text="Level Two" link="/mulitlevel/two">
                <Item text="Level Tree" link="/mulitlevel/tree" />
                <Item text="Level Tree" link="/mulitlevel/tree" />
              </Item>
              <Item text="Level Two" link="/mulitlevel/two" />
            </Item>
            <Item text="Level One" link="/mulitlevel/one" />
          </Item>
          <li className="header">LABELS</li>
          <Item link="#" text="Important" color="red" />
          <Item link="#" text="Warning" color="yellow" />
          <Item link="#" text="Information" color="aqua" />
        </Sidebar.Core>
        <ComponentBuilder path="/component-builder" />
        <ExamplesWithJSX path="/examples-with-jsx" />

        <DashboardV2 path="/" exact />
        <Dashboard path="/dashboard" exact />
        <DashboardV2 path="/dashboardv2" exact />
        <ChartJS path="/chart-js" exact />
        <Widgets path="/widgets" exact />
        <Route path="/ui-elements/general" exact component={AsyncComponent(() => import(/* webpackChunkName: 'ui-elements.general' */'./pages/rebuilds/ui-elements/General'))} />
        <Route path="/ui-elements/icons" exact component={AsyncComponent(() => import(/* webpackChunkName: 'ui-elements.icons' */'./pages/rebuilds/ui-elements/Icons'))} />
        <Route path="/ui-elements/buttons" exact component={AsyncComponent(() => import(/* webpackChunkName: 'ui-elements.buttons' */'./pages/rebuilds/ui-elements/Buttons'))} />
        <Route path="/ui-elements/sliders" exact component={AsyncComponent(() => import(/* webpackChunkName: 'ui-elements.sliders' */'./pages/rebuilds/ui-elements/Sliders'))} />
        <Route path="/ui-elements/modals" component={AsyncComponent(() => import(/* webpackChunkName: 'ui-elements.modals' */'./pages/rebuilds/ui-elements/Modals'))} />
        <Default path="/ui-elements/modals/default" exact modal />
        <Route path="/forms/general" exact component={AsyncComponent(() => import(/* webpackChunkName: 'form.general' */'./pages/rebuilds/forms/GeneralElements'))} />
        <Route path="/forms/advanced" exact component={AsyncComponent(() => import(/* webpackChunkName: 'form.advanced' */'./pages/rebuilds/forms/AdvancedElements'))} />
        <Route path="/tables/simple" exact component={AsyncComponent(() => import(/* webpackChunkName: 'tables.simple' */'./pages/rebuilds/tables/SimpleTables'))} />
        <Route path="/tables/data" exact component={AsyncComponent(() => import(/* webpackChunkName: 'tables.data' */'./pages/rebuilds/tables/DataTables'))} />
        <Route path="/calendar" exact component={AsyncComponent(() => import(/* webpackChunkName: 'calendar' */'./pages/rebuilds/Calendar'))} />
      </AdminLTE>
    );
  }
}

export default App;
