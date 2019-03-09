import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Content, Row, Col, Inputs, Box, Button,
} from 'adminlte-2-react';
import { Formik } from 'formik';
import Countries from '../../common/Countries.js';

import Select2 from '../../a2r-local/content/Inputs/Select2';
import ModalContent from '../../a2r-local/Content';

const mappedCountries = Countries.map(p => p.name);

class FormikForm extends Component {
  state = { showModal: false }

  render() {
    const { showModal } = this.state;
    const form = (
      <>
        <Select2
          labelPosition="above"
          label="Country"
          options={mappedCountries}
          name="country"
        />
        <Formik
          initialValues={{ email: '', password: '', country: 'Colombia' }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          /* and other goodies */
          }) => (
            <React.Fragment>
              <Select2
                labelPosition="above"
                label="Country"
                value={values.country}
                options={mappedCountries}
                name="country"
                onChange={handleChange}
              />
            </React.Fragment>
          )}
        </Formik>
      </>
    );
    return (
      <Content title="Formik form" subTitle="Input form elements controlled by formik">
        <ModalContent
          title="Formik form"
          subTitle="Input form elements controlled by formik"
          modal
          show={showModal}
          onHide={() => { this.setState({ showModal: false }); }}
        >
          {form}
        </ModalContent>
        <Box header={
          <Button text="Modal" onClick={() => { this.setState({ showModal: true }); }} />
        }
        >
          {form}
        </Box>
      </Content>
    );
  }
}

export default FormikForm;
