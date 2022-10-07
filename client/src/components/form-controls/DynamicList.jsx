import React from 'react';
import { Field, FieldArray } from 'formik';

const DynamicList = ({ name, label, placeholder, ...rest }) => {
  return (
    <div className='flex flex-col gap-2 rounded-md'>
      <label className='font-semibold' htmlFor={name}>
        {label}
      </label>
      <FieldArray name={name}>
        {({ form, push, remove }) => {
          return form.values.cast.map((person, index) => {
            return (
              <div key={index} className='flex gap-3'>
                <Field
                  name={`cast[${index}]`}
                  className='border border-gray-400 rounded-md indent-2 grid place-center h-9'
                />
                <button
                  type='button'
                  className='border border-gray-400 w-8 rounded-md text-2xl'
                  onClick={() => form.values.cast.length > 1 && remove(index)}
                >
                  -
                </button>
                <button
                  type='button'
                  className='border border-gray-400 w-8 rounded-md text-2xl'
                  onClick={() => push('')}
                >
                  +
                </button>
              </div>
            );
          });
        }}
      </FieldArray>
    </div>
  );
};

export default DynamicList;
