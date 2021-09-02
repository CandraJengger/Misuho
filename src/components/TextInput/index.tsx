import React from 'react';
import { Label, Input, TextInputWrapper, TextArea } from './styles';
import Props from './textInput.props';

const TextInputComponent: React.FC<Props & Record<string, any>> = ({
  label,
  value,
  placeholder,
  type = 'input',
  ...props
}) => {
  return (
    <TextInputWrapper>
      <Label>{label}</Label>
      {type === 'input' ? (
        <Input placeholder={placeholder} value={value} {...props} />
      ) : (
        <TextArea placeholder={placeholder} value={value} {...props} />
      )}
    </TextInputWrapper>
  );
};

export default TextInputComponent;
