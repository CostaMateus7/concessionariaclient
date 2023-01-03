import React from 'react';
import { InputStyle } from './style';

export default function Input({
  type, name, placeholder, onChange,
}) {
  return (
    <InputStyle
      type={type}
      name={name}
      onChange={onChange}

    />
  );
}
