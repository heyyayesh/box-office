import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormController from './form-controls/FormController';

const AddMovie = () => {
  // Initial values for the form inputs
  const initialValues = {
    title: '',
    director: '',
    description: '',
  };

  // Validation schema for form inputs
  const validationSchema = Yup.object({
    title: Yup.string().required('Required Field!'),
    director: Yup.string().required('Required Field!'),
  });

  // Submit handler for the form
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl text-center mb-20 mt-2'>Add a New Movie</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='flex flex-col gap-2'>
          <FormController
            control='input'
            name='title'
            placeholder='Title of the Movie'
          />
          <FormController
            control='input'
            name='director'
            placeholder='Director'
          />
          <FormController
            control='textarea'
            name='description'
            placeholder='Description'
          />

          <button
            type='submit'
            className='bg-blue-400 p-2 rounded-md text-white'
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMovie;
