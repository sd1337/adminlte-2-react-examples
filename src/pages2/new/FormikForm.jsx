import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Content, Row, Col, Inputs, Box, Button,
} from 'adminlte-2-react';
import { Formik } from 'formik';
import Countries from '../../common/Countries.js';


const { Select2 } = Inputs;

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
              <Select2
                labelPosition="above"
                label="Country"
                name="country2"
                options={mappedCountries}
                onFetchData={({ page, searchValue }, success, failure) => {
                  const intermediateResult = mappedCountries.filter(p => p.toUpperCase().indexOf(searchValue.toUpperCase()) > -1);
                  const start = (page * 10);
                  const end = start + 10;
                  const finalResult = intermediateResult.filter((value, idx) => idx >= start && idx < end);
                  const waitTime = Math.random() * 2000;
                  setTimeout(() => {
                    success(finalResult, intermediateResult.length > end);
                  }, waitTime);
                }}
                select2Options={{
                  language: {
                    searching: 'Suche...',
                    loadingMore: 'Lade mehr Ergebnisse…',
                    errorLoading: 'Die Ergebnisse konnten nicht geladen werden.',
                    noResults: 'Keine Übereinstimmungen gefunden',
                  },
                }}
                allowClear
              />
            </React.Fragment>
          )}
        </Formik>
      </>
    );
    return (
      <Content title="Formik form" subTitle="Input form elements controlled by formik">
        <Content
          title="Formik form"
          subTitle="Input form elements controlled by formik"
          modal
          show={showModal}
          onHide={() => { this.setState({ showModal: false }); }}
        >
          {form}
        </Content>
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
