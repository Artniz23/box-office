import React from 'react';
import { RadioWrapper } from './CustomRadio.styled';

const CustomRadio = ({ label, ...restProps }) => {
  return (
    <RadioWrapper htmlFor={restProps.id}>
      {label}
      <input {...restProps} type="radio" />
      <span />
    </RadioWrapper>
  );
};

export default CustomRadio;
