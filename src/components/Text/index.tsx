import React from 'react';
import { Text } from './styles';
import Props from './text.props';

const TextComponent: React.FC<Props> = ({
  strong = true,
  type = 'md',
  text,
}) => {
  return (
    <Text type={type} strong={strong}>
      {text}
    </Text>
  );
};

export default TextComponent;
