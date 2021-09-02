import React from 'react';
import Props from './buttonIcon.props';
import { Button } from './styles';

const ButtonIcon: React.FC<Props> = ({ source, onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={source} alt="icon" />
    </Button>
  );
};

export default ButtonIcon;
