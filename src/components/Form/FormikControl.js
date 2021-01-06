import React from 'react';
import Input from './FieldType/Input';
import Textarea from './FieldType/Textarea';
import Select from './FieldType/Select';
import RadioButtons from './FieldType/RadioButtons';
import CheckboxGroup from './FieldType/CheckboxGroup';

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    case 'date':
    default:
      return null;
  }
};

export default FormikControl;
