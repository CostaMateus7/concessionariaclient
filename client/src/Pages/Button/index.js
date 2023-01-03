import React from 'react';
import { ButtonStyle } from './style';

export default function Button({ type, onClick, children }) {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
}
