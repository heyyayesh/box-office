import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Textarea = ({ name, placeholder, ...rest }) => {
  return (
    <div className='flex flex-col gap-2'>
      <Field
        as='textarea'
        id={name}
        name={name}
        placeholder={placeholder}
        className='border border-gray-400 rounded-md px-2 py-1 grid place-center min-h-[80px] resize-y'
        {...rest}
      />
      <ErrorMessage name={name} component='div' className='text-red-400' />
    </div>
  );
};

export default Textarea;
