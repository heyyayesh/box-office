import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormController from './form-controls/FormController';

const AddMovie = () => {
  // Genre Options
  const genreOptions = [
    { key: 'Action', value: 'action' },
    { key: 'Crime', value: 'crime' },
    { key: 'Drama', value: 'drama' },
    { key: 'Fantasy', value: 'fantasy' },
    { key: 'Horror', value: 'horror' },
    { key: 'Comedy', value: 'comedy' },
    { key: 'Romance', value: 'romance' },
    { key: 'Science Fiction', value: 'sci-fi' },
    { key: 'Sports', value: 'sports' },
    { key: 'Thriller', value: 'thriller' },
    { key: 'Mystery', value: 'mystery' },
    { key: 'War', value: 'war' },
    { key: 'Western', value: 'western' },
  ];

  // Initial values for the form inputs
  const initialValues = {
    title: '',
    director: '',
    description: '',
    genre: [],
    releaseDate: null,
    cast: [''],
  };

  // Validation schema for form inputs
  const validationSchema = Yup.object({
    title: Yup.string().required('Required Field!'),
    director: Yup.string().required('Required Field!'),
    description: Yup.string(),
    genre: Yup.array(),
    releaseDate: Yup.date().required('Required Field!').nullable(),
  });

  // Submit handler for the form
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl text-center mb-10 mt-2'>Add a New Movie</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='flex flex-col gap-2'>
          {/* Movie Title */}
          <FormController
            control='input'
            name='title'
            placeholder='Title of the Movie'
            label='Title'
          />

          {/* Movie Director */}
          <FormController
            control='input'
            name='director'
            placeholder='Director'
            label='Director'
          />

          {/* Movie Description */}
          <FormController
            control='textarea'
            name='description'
            placeholder='Description'
            label='Description'
          />

          {/* Movie Genre(s) */}
          <FormController
            control='checkboxgroup'
            name='genre'
            label='Genre (Select all that apply)'
            options={genreOptions}
          />

          {/* Movie Release Date */}
          <FormController
            control='datepicker'
            name='releaseDate'
            placeholder='Release date'
            label='Release Date'
          />

          {/* Movie Cast */}
          <FormController
            control='dynamiclist'
            name='cast'
            placeholder='Cast'
            label='Cast'
          />

          {/* Submit Button */}
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
