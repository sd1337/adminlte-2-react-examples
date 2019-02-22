import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AdminLTE, {
  Sidebar, AsyncComponent, Footer, Navbar,
} from 'adminlte-2-react';
import moment from 'moment';

import ComponentBuilder from './pages/ComponentBuilder';
import ExamplesWithJSX from './pages/ExamplesWithJSX';

import Dashboard from './pages/rebuilds/Dashboard';
import DashboardV2 from './pages/rebuilds/DashboardV2';
import ChartJS from './pages/rebuilds/charts/ChartJS';
import Widgets from './pages/rebuilds/Widgets';
import user1Image from './assets/img/user1-128x128.jpg';
import user2Image from './assets/img/user2-160x160.jpg';
import user3Image from './assets/img/user3-128x128.jpg';
import user4Image from './assets/img/user4-128x128.jpg';

const { Item, Header } = Sidebar;
const { MessageItem, Entry, NotificationItem, TaskItem } = Navbar;
class App extends Component {
  state = {}

  loadedElements = {}

  getAsync(path) {
    const asyncRequire = () => {
      switch (path) {
        case '/ui-elements/general':
          return AsyncComponent(() => {
            if (this.loadedElements[path]) {
              console.log('cached');
              return this.loadedElements[path];
            }
            console.log('loading');
            const newElem = import(/* webpackChunkName: 'ui-elements.general' */'./pages/rebuilds/ui-elements/General');
            this.loadedElements[path] = newElem;
            return newElem;
          });
        case '/ui-elements/icons':
          return AsyncComponent(() => {
            if (this.loadedElements[path]) {
              console.log('cached');
              return this.loadedElements[path];
            }
            console.log('loading');
            const newElem = import(/* webpackChunkName: 'ui-elements.icons' */'./pages/rebuilds/ui-elements/Icons');
            this.loadedElements[path] = newElem;
            return newElem;
          });
        case '/ui-elements/buttons':
          return AsyncComponent(() => {
            if (this.loadedElements[path]) {
              console.log('cached');
              return this.loadedElements[path];
            }
            console.log('loading');
            const newElem = import(/* webpackChunkName: 'ui-elements.buttons' */'./pages/rebuilds/ui-elements/Buttons');
            this.loadedElements[path] = newElem;
            return newElem;
          });
        case '/ui-elements/sliders':
          return AsyncComponent(() => {
            if (this.loadedElements[path]) {
              console.log('cached');
              return this.loadedElements[path];
            }
            console.log('loading');
            const newElem = import(/* webpackChunkName: 'ui-elements.sliders' */'./pages/rebuilds/ui-elements/Sliders');
            this.loadedElements[path] = newElem;
            return newElem;
          });
        case '/ui-elements/modals/:type?':
          return AsyncComponent(() => {
            if (this.loadedElements[path]) {
              console.log('cached');
              return this.loadedElements[path];
            }
            console.log('loading');
            const newElem = import(/* webpackChunkName: 'ui-elements.modals' */'./pages/rebuilds/ui-elements/Modals');
            this.loadedElements[path] = newElem;
            return newElem;
          });
        case '/forms/general':
          return AsyncComponent(() => {
            if (this.loadedElements[path]) {
              console.log('cached');
              return this.loadedElements[path];
            }
            console.log('loading');
            const newElem = import(/* webpackChunkName: 'form.general' */'./pages/rebuilds/forms/GeneralElements');
            this.loadedElements[path] = newElem;
            return newElem;
          });
        case '/forms/advanced':
          return AsyncComponent(() => {
            if (this.loadedElements[path]) {
              console.log('cached');
              return this.loadedElements[path];
            }
            console.log('loading');
            const newElem = import(/* webpackChunkName: 'form.advanced' */'./pages/rebuilds/forms/AdvancedElements');
            this.loadedElements[path] = newElem;
            return newElem;
          });
        case '/tables/simple':
          return AsyncComponent(() => {
            if (this.loadedElements[path]) {
              console.log('cached');
              return this.loadedElements[path];
            }
            console.log('loading');
            const newElem = import(/* webpackChunkName: 'tables.simple' */'./pages/rebuilds/tables/SimpleTables');
            this.loadedElements[path] = newElem;
            return newElem;
          });
        case '/tables/data':
          return AsyncComponent(() => {
            if (this.loadedElements[path]) {
              console.log('cached');
              return this.loadedElements[path];
            }
            console.log('loading');
            const newElem = import(/* webpackChunkName: 'tables.data' */'./pages/rebuilds/tables/DataTables');
            this.loadedElements[path] = newElem;
            return newElem;
          });
        case '/calendar':
          return AsyncComponent(() => {
            if (this.loadedElements[path]) {
              console.log('cached');
              return this.loadedElements[path];
            }
            console.log('loading');
            const newElem = import(/* webpackChunkName: 'calendar' */'./pages/rebuilds/Calendar');
            this.loadedElements[path] = newElem;
            return newElem;
          });
        default:
          return null;
      }
    };
    return <Route path={path} exact component={asyncRequire(path)} />;
  } 

  messageMenu = [
    {
      text: 'Support Team',
      subText: 'Why not buy a new awesome theme?',
      imageUrl: user1Image,
      when: moment().subtract(5, 'minutes'),
    },
    {
      text: 'AdminLTE Design Team',
      subText: 'Why not buy a new awesome theme?',
      imageUrl: user2Image,
      when: moment().subtract(2, 'hours'),
    },
    {
      text: 'Developers',
      subText: 'Why not buy a new awesome theme?',
      imageUrl: user3Image,
      when: moment().subtract(13, 'hours'),
    },
    {
      text: 'Sales departement',
      subText: 'Why not buy a new awesome theme?',
      imageUrl: user4Image,
      when: moment().subtract(1, 'day'),
    },
    {
      text: 'Reviewers',
      subText: 'Why not buy a new awesome theme?',
      imageUrl: user3Image,
      when: moment().subtract(2, 'days'),
    },
  ]

  notificationMenu = [
    {
      icon: 'fas-users',
      iconColor: 'aqua',
      text: '5 new members joined today',
    },
    {
      icon: 'fas-exclamation-triangle',
      iconColor: 'yellow',
      text: ' Very long description here that may not fit into the page and may cause design problems',
    },
    {
      icon: 'fas-users',
      iconColor: 'red',
      text: '5 new members joined today',
    },
    {
      icon: 'fas-shopping-cart',
      iconColor: 'green',
      text: '25 sales made',
    },
    {
      icon: 'fas-user',
      iconColor: 'red',
      text: 'You changed your username',
    },
  ]

  taskMenu = [
    {
      value: 20,
      barColor: 'aqua',
      text: 'Design some buttons',
    },
    {
      value: 40,
      barColor: 'green',
      text: 'Create a nice theme',
    },
    {
      value: 60,
      barColor: 'red',
      text: 'Some task I need to do',
    },
    {
      value: 80,
      barColor: 'yellow',
      text: 'Make beautiful transitions',
    },
  ]

  render() {
    return (
      <AdminLTE browserTitle="adminlte-2-react-examples" theme="black" footer={<Footer />}>
        <Navbar.Core>
          <Entry
            icon="fas-envelope"
          >
            {this.messageMenu.map(p => <MessageItem {...p} />)}
            {this.notificationMenu.map(p => <NotificationItem {...p} />)}
          </Entry>
          <Entry
            icon="fas-bell"
            className="notifications-menu"
            labelType="warning"
          >
            {this.notificationMenu.map(p => <NotificationItem {...p} />)}
          </Entry>
          <Entry
            icon="far-flag"
            className="tasks-menu"
            labelType="danger"
            headerText="You have #value# tasks"
            footerText="View all tasks"
          >
            {this.taskMenu.map(p => <TaskItem {...p} />)}
          </Entry>
          <Entry
            icon="fas-power-off"
          />
        </Navbar.Core>
        <Sidebar.Core>
          <Item icon="fas-pencil-ruler" text="Component Builder" to="/component-builder" />
          <Item icon="fas-code" text="Examples with JSX" to="/examples-with-jsx" />
          <Header text="MAIN NAVIGATION" />
          <Item active text="Dashboard" icon="fa-tachometer-alt">
            <Item text="Dashboard v1" to="/dashboard" activeOn="^/$" />
            <Item text="Dashboard v2" to="/dashboardv2" />
          </Item>
          <Item text="Layout Options" icon="far-copy" labels={{ type: 'primary', text: 4 }}>
            <Item text="Top Navigation" to="/top-nav" />
            <Item text="Boxed" to="/boxed" />
            <Item text="Fixed" to="/fixed" />
            <Item text="Collapsed Sidebar" to="/collapsed-sidebar" />
          </Item>
          <Item to="/widgets" text="Widgets" icon="fa-th" labels={[{ color: 'green', text: 'new', small: true }]} />
          <Item text="Charts" icon="fa-chart-pie">
            <Item text="ChartJS" to="/chart-js" />
            <Item text="Morris" to="/morris" />
            <Item text="Flot" to="/flot" />
          </Item>
          <Item text="UI Elements" icon="fa-laptop">
            <Item text="General" to="/ui-elements/general" />
            <Item text="Icons" to="/ui-elements/icons" />
            <Item text="Buttons" to="/ui-elements/buttons" />
            <Item text="Sliders" to="/ui-elements/sliders" />
            <Item text="Timeline" to="/ui-elements/timeline" />
            <Item text="Modals" to="/ui-elements/modals" activeOn="^/ui-elements/modals" />
          </Item>
          <Item text="Forms" icon="fa-edit">
            <Item text="General Elements" to="/forms/general" />
            <Item text="Advanced Elements" to="/forms/advanced" />
            <Item text="Editors" to="/forms/editors" />
          </Item>
          <Item text="Tables" icon="fa-table">
            <Item text="Simple tables" to="/tables/simple" />
            <Item text="Data tables" to="/tables/data" />
          </Item>
          <Item to="/calendar" text="Calendar" icon="fa-calendar" labels={[{ small: true, text: 3, color: 'red' }, { small: true, text: 17, color: 'blue' }]} />
          <Item to="/mailbox" text="Mailbox" icon="fa-envelope" labels={[{ small: true, text: 12, color: 'yellow' }, { small: true, text: 16, color: 'green' }, { small: true, text: 5, color: 'red' }]} />
          <Item text="Examples" icon="fa-folder">
            <Item text="Invoice" to="/examples/invoice" />
            <Item text="Profile" to="/examples/profile" />
            <Item text="Login" to="/examples/login" />
            <Item text="Register" to="/examples/register" />
            <Item text="Lockscreen" to="/examples/lockscreen" />
            <Item text="404 Error" to="/examples/404-error" />
            <Item text="500 Error" to="/examples/500-error" />
            <Item text="Blank Page" to="/examples/blank-page" />
            <Item text="Pace Page" to="/examples/pace-page" />
          </Item>
          <Item text="Multilevel" icon="fa-share">
            <Item text="Level One" to="/mulitlevel/one" />
            <Item text="Level One" to="/mulitlevel/one">
              <Item text="Level Two" to="/mulitlevel/two" />
              <Item text="Level Two" to="/mulitlevel/two">
                <Item text="Level Tree" to="/mulitlevel/tree" />
                <Item text="Level Tree" to="/mulitlevel/tree" />
              </Item>
              <Item text="Level Two" to="/mulitlevel/two" />
            </Item>
            <Item text="Level One" to="/mulitlevel/one" />
          </Item>
          <li className="header">LABELS</li>
          <Item text="Important" color="red" />
          <Item text="Warning" color="yellow" />
          <Item text="Information" color="aqua" />
        </Sidebar.Core>
        <ComponentBuilder path="/component-builder" />
        <ExamplesWithJSX path="/examples-with-jsx" />

        <Dashboard path="/dashboard" exact />
        <DashboardV2 path="/dashboardv2" exact />
        <ChartJS path="/chart-js" exact />
        <Widgets path="/widgets" exact />
        {this.getAsync('/ui-elements/general')}
        {this.getAsync('/ui-elements/icons')}
        {this.getAsync('/ui-elements/buttons')}
        {this.getAsync('/ui-elements/sliders')}
        {this.getAsync('/ui-elements/modals/:type?')}
        {this.getAsync('/forms/general')}
        {this.getAsync('/forms/advanced')}
        {this.getAsync('/tables/simple')}
        {this.getAsync('/tables/data')}
        {this.getAsync('/calendar')}
      </AdminLTE>
    );
  }
}

export default App;
