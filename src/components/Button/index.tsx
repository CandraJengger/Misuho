import React from 'react';
import Props from './button.props';
import { Button } from './styles';

const ButtonComponent: React.FC<Props> = ({
  type = 'primary',
  text = 'Button',
  fluid = false,
  onClick,
}) => {
  return (
    <Button primary={type === 'primary'} onClick={onClick} fluid={fluid}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
