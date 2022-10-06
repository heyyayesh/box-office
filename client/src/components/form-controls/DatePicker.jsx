import React from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ label, name, placeholder, ...rest }) => {
  return (
    <div className='flex flex-col gap-2 border border-gray-400 rounded-md p-2'>
      <label className='font-semibold'>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          //   const { setFieldValue } = form;
          //   const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={field.value}
              onChange={val => form.setFieldValue(name, val)}
              className='border border-gray-400 rounded-md indent-2 grid place-center h-9'
              placeholder={placeholder}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component='div' className='text-red-400' />
    </div>
  );
};

export default DatePicker;
