import React from 'react';
import { Label, Input, TextInputWrapper } from './styles';
import Props from './textInput.props';

const TextInputComponent: React.FC<Props> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <TextInputWrapper>
      <Label>{label}</Label>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </TextInputWrapper>
  );
};

export default TextInputComponent;
