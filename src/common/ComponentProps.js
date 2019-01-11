/* eslint-disable no-multi-str */
// import {Types}

const Box = {
  title: 'string',
  collapsable: 'bool',
  closable: 'bool',
  footer: 'oneOfType([\
    "arrayOf"("node"),\
    "node",\
  ])',
  type: 'oneOf'('Types'),
  /* eslint-disable react/forbid-prop-types */
  options: 'array',
  icon: 'string',
  titleRight: 'bool',
  loaded: 'bool',
  noPadding: 'bool',
  /* TODO: make prop more specific */
  badge: 'oneOfType([\
    "arrayOf"("node"),\
    "node",\
  ])',
  toolIcon: 'string',
  customOptions: 'shape',
  className: 'string',
  footerClass: 'string',
  collapsed: 'bool',
  solid: 'bool',
  textCenter: 'bool',
  padding: 'bool',
  bodyClassName: 'string',
  border: 'bool',
  style: 'shape',
  header: 'oneOfType([\
    "arrayOf"("node"),\
    "node",\
  ])',
  children: 'oneOfType([\
    "arrayOf"("node"),\
    "node",\
  ])',
};

export { Box };
