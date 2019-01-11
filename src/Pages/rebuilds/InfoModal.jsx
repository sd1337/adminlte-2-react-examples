import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/styles/prism';

import { Content } from 'adminlte-2-react';


const InfoModal = ({ show, onHide, text }) => (
  <Content title="JSX" modal show={show} onHide={onHide} modalSize="lg">
    <SyntaxHighlighter language="jsx" style={monoBlue}>{text}</SyntaxHighlighter>
  </Content>
);

InfoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  text: PropTypes.string,
};

InfoModal.defaultProps = {
  text: null,
};

export default InfoModal;
