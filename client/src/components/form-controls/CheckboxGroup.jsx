import React from 'react';
import { Field } from 'formik';

const CheckboxGroup = ({ label, name, options, ...rest }) => {
  return (
    <div className='flex flex-col gap-2 border border-gray-400 rounded-md p-2'>
      <label className='font-semibold'>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map(option => {
            return (
              <div key={option.key} className='flex gap-2'>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
    </div>
  );
};

export default CheckboxGroup;
