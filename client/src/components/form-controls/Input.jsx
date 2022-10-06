import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormField = ({ name, label, placeholder, ...rest }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='font-semibold' htmlFor={name}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        className='border border-gray-400 rounded-md indent-2 grid place-center h-9'
        {...rest}
      />
      <ErrorMessage name={name} component='div' className='text-red-400' />
    </div>
  );
};

export default FormField;
